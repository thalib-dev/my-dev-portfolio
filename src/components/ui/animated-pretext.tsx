'use client';

import React, { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import { prepareWithSegments, layoutNextLine, type LayoutCursor } from '@chenglou/pretext';
import { cn } from '@/lib/utils';

interface AnimatedPretextProps {
  text: string;
  lineHeight?: number;
  className?: string;
  bolds?: string[];
  obstacleRadius?: number;
}

function circleIntervalForBand(cx: number, cy: number, r: number, bandTop: number, bandBottom: number, hPad: number, vPad: number) {
  const top = bandTop - vPad;
  const bottom = bandBottom + vPad;
  if (top >= cy + r || bottom <= cy - r) return null;
  const minDy = cy >= top && cy <= bottom ? 0 : cy < top ? top - cy : cy - bottom;
  if (minDy >= r) return null;
  const maxDx = Math.sqrt(r * r - minDy * minDy);
  return { left: cx - maxDx - hPad, right: cx + maxDx + hPad };
}

function carveTextLineSlots(base: { left: number; right: number }, blocked: { left: number; right: number }[]) {
  let slots = [base];
  const MIN_SLOT_WIDTH = 40;
  for (let bi = 0; bi < blocked.length; bi++) {
    const iv = blocked[bi];
    const next = [];
    for (let si = 0; si < slots.length; si++) {
      const s = slots[si];
      if (iv.right <= s.left || iv.left >= s.right) {
        next.push(s);
        continue;
      }
      if (iv.left > s.left) next.push({ left: s.left, right: iv.left });
      if (iv.right < s.right) next.push({ left: iv.right, right: s.right });
    }
    slots = next;
  }
  return slots.filter((s) => s.right - s.left >= MIN_SLOT_WIDTH);
}

export function AnimatedPretext({
  text,
  lineHeight = 28,
  className,
  bolds = [],
  obstacleRadius = 50,
}: AnimatedPretextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const elsRef = useRef<HTMLSpanElement[]>([]);

  const [containerWidth, setContainerWidth] = useState(0);
  const [computedFont, setComputedFont] = useState('18px sans-serif');
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  const mousePosRef = useRef<{ x: number; y: number } | null>(null);

  const isInView = useInView(wrapperRef, { once: true, margin: '-10% 0px' });

  useEffect(() => {
    if (containerRef.current) {
      setTimeout(() => {
        if (containerRef.current) {
          const style = window.getComputedStyle(containerRef.current);
          setComputedFont(style.font || `${style.fontSize} ${style.fontFamily}`);
          setIsFontLoaded(true);
        }
      }, 50);
    }
  }, []);

  const prepared = useMemo(() => {
    if (!isFontLoaded) return null;
    try {
      return prepareWithSegments(text, computedFont);
    } catch (e) {
      console.error("pretext prepare error:", e);
      return null;
    }
  }, [text, computedFont, isFontLoaded]);

  const renderTextWithBoldsHTML = useCallback((lineText: string) => {
    if (!bolds.length) return lineText.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    let html = lineText;
    bolds.forEach(bold => {
      const regex = new RegExp(`(${bold.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'g');
      html = html.replace(regex, `<strong class="text-black dark:text-white font-semibold">$1</strong>`);
    });
    return html;
  }, [bolds]);

  const computeAndRender = useCallback((width: number, mPos: { x: number; y: number } | null) => {
    if (!prepared || !containerRef.current) return;

    let cursor: LayoutCursor = { segmentIndex: 0, graphemeIndex: 0 };
    let lineTop = 0;
    let computedLinesCount = 0;
    let textExhausted = false;
    let loops = 0;

    const container = containerRef.current;

    while (!textExhausted && loops < 1000) {
      loops++;
      const bandTop = lineTop;
      const bandBottom = lineTop + lineHeight;
      const blocked = [];

      if (mPos) {
        const iv = circleIntervalForBand(mPos.x, mPos.y, obstacleRadius, bandTop, bandBottom, 5, 2);
        if (iv !== null) blocked.push(iv);
      }

      const slots = carveTextLineSlots({ left: 0, right: width }, blocked);

      if (slots.length === 0) {
        lineTop += lineHeight;
        continue;
      }

      slots.sort((a, b) => a.left - b.left);
      for (let si = 0; si < slots.length; si++) {
        const slot = slots[si];
        const slotWidth = slot.right - slot.left;

        const line = layoutNextLine(prepared, cursor, slotWidth);

        if (line === null) {
          textExhausted = true;
          break;
        }

        let el = elsRef.current[computedLinesCount];
        if (!el) {
          el = document.createElement('span');
          el.style.position = 'absolute';
          el.style.whiteSpace = 'pre-wrap';
          el.style.pointerEvents = 'none';
          el.style.lineHeight = `${lineHeight}px`;
          el.style.left = '0';
          el.style.top = '0';
          container.appendChild(el);
          elsRef.current[computedLinesCount] = el;
        }

        el.style.display = 'block';
        el.style.transform = `translate(${Math.round(slot.left)}px, ${Math.round(lineTop)}px)`;
        el.innerHTML = renderTextWithBoldsHTML(line.text);

        computedLinesCount++;
        cursor = line.end;
      }
      lineTop += lineHeight;
    }

    for (let i = computedLinesCount; i < elsRef.current.length; i++) {
      elsRef.current[i].style.display = 'none';
    }
    container.style.height = `${lineTop}px`;
  }, [prepared, lineHeight, obstacleRadius, renderTextWithBoldsHTML]);

  useEffect(() => {
    if (!prepared || !containerRef.current) return;
    const ob = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width;
      if (width > 0) {
        setContainerWidth(width);
        computeAndRender(width, mousePosRef.current);
      }
    });
    ob.observe(containerRef.current);
    return () => ob.disconnect();
  }, [prepared, computeAndRender]);

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!containerRef.current || containerWidth === 0) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mousePosRef.current = { x, y };
    requestAnimationFrame(() => {
      computeAndRender(containerWidth, mousePosRef.current);
    });
  };

  const handlePointerLeave = () => {
    mousePosRef.current = null;
    requestAnimationFrame(() => {
      computeAndRender(containerWidth, null);
    });
  };

  return (
    <motion.div
      ref={wrapperRef}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <p
        ref={containerRef}
        className={cn("w-full relative m-0 p-0 block", className)}
        style={{ minHeight: `${lineHeight}px` }}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        {/* Empty container: vanilla JS populates the lines above for 60fps glitch-free routing! */}
        {!isFontLoaded && <span className="opacity-0">{text}</span>}
      </p>
    </motion.div>
  );
}

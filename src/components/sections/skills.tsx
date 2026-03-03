'use client';
import React, { useRef, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { config } from '@/data/config';
import { useInView } from 'framer-motion';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-50%' });

  useEffect(() => {
    if (isInView) {
      window.history.replaceState(null, '', '#skills');
    }
  }, [isInView]);

  return (
    <section id="skills" ref={ref} className="min-h-screen max-w-7xl mx-auto ">
      <div href={'#skills'}>
        <h2
          className={cn(
            'bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16',
            'bg-gradient-to-b from-black/80 to-black/50',
            'dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50'
          )}
        >
          SKILLS<br/>
          <span className="text-[16px]">(Press N)</span>
        
        </h2>
        </div>
    </section>
  );
};

export default SkillsSection;

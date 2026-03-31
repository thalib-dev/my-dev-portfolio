'use client';
import React, { useRef, useEffect } from 'react';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useInView } from 'framer-motion';
import { AnimatedPretext } from '@/components/ui/animated-pretext';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-50%' });

  useEffect(() => {
    if (isInView) {
      window.history.replaceState(null, '', '#about');
    }
  }, [isInView]);

  const p1Text = "I’m Mohammed Thalib TM, a Junior Software Engineer with 8 months of experience focused on building reliable, scalable infrastructure and intelligent applications. I thrive on solving complex engineering problems and creating systems that are not just functional, but also elegant and efficient.";
  const p2Text = "Currently, I work as a Software Engineer at UC Operations LLC, where I specialize in automating complex data processing workflows using GCP and Firebase. As a solo contributor, I've successfully deployed over 5 zero-bug cloud API projects and am now contributing to the development of an advanced ML-powered chatbot.";
  const p3Text = "My technical sweet spot lies in combining cloud architecture (AWS, GCP) with robust backend technologies (Python, Node.js) and modern DevOps practices (CI/CD, Terraform). Whether it's architecting a zero-downtime deployment pipeline or building custom automation bots, I am passionate about engineering systems that are fast, maintainable, and built to last.";

  const textClass = "text-lg text-gray-600 dark:text-gray-300 leading-relaxed";
  // The line height depends on the specific font size (18px) and leading-relaxed (1.625) -> 29.25px. We'll use 29.
  const lineHeight = 29;

  return (
    <section id="about" ref={ref} className="py-20 px-4">
      <Link href={'#about'}>
        <h2
          className={cn(
            'bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16',
            'bg-gradient-to-b from-black/80 to-black/50',
            'dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50'
          )}
        >
          WHO I AM
        </h2>
      </Link>
      <div className="relative mt-12 max-w-4xl">

        <div className="relative pl-12">
          <Card className="w-full bg-white/0 border-white/0 shadow-none">
            <CardContent className="p-6 space-y-6 text-left">
              <AnimatedPretext 
                text={p1Text} 
                className={textClass} 
                lineHeight={lineHeight} 
                bolds={["Mohammed Thalib TM"]} 
              />
              <AnimatedPretext 
                text={p2Text} 
                className={textClass} 
                lineHeight={lineHeight} 
                bolds={["UC Operations LLC", "GCP", "Firebase", "ML-powered chatbot"]} 
              />
              <AnimatedPretext 
                text={p3Text} 
                className={textClass} 
                lineHeight={lineHeight} 
                bolds={["AWS, GCP", "Python, Node.js", "CI/CD, Terraform"]} 
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

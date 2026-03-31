'use client';
import React, { useRef, useEffect } from 'react';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useInView } from 'framer-motion';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-50%' });

  useEffect(() => {
    if (isInView) {
      window.history.replaceState(null, '', '#about');
    }
  }, [isInView]);

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
          <Card className="w-full bg-white/0 border-white/0">
            <CardContent className="p-6 space-y-6 text-left">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                IΓÇÖm <strong>Mohammed Thalib TM</strong>, a Junior Software Engineer with 8 months of experience focused on building reliable, scalable infrastructure and intelligent applications. I thrive on solving complex engineering problems and creating systems that are not just functional, but also elegant and efficient.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Currently, I work as a Software Engineer at <strong>UC Operations LLC</strong>, where I specialize in automating complex data processing workflows using <strong>GCP</strong> and <strong>Firebase</strong>. As a solo contributor, I&apos;ve successfully deployed over 5 zero-bug cloud API projects and am now contributing to the development of an advanced <strong>ML-powered chatbot</strong>.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My technical sweet spot lies in combining cloud architecture (<strong>AWS, GCP</strong>) with robust backend technologies (<strong>Python, Node.js</strong>) and modern DevOps practices (<strong>CI/CD, Terraform</strong>). Whether it&apos;s architecting a zero-downtime deployment pipeline or building custom automation bots, I am passionate about engineering systems that are fast, maintainable, and built to last.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

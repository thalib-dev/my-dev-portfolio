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
                    I'm a DevOps engineer by trade, but at my core, I'm a problem-solver. I thrive on building the digital backbone—the automated, scalable, and resilient infrastructure—that allows great ideas to come to life. For me, it's about creating systems that are not just functional, but also elegant and efficient.
                    </p>

                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    My work revolves around the entire DevOps lifecycle. I containerize applications using <strong>Docker</strong>, orchestrate them with <strong>Kubernetes</strong>, and construct the <strong>CI/CD pipelines</strong> (with Jenkins or GitHub Actions) that seamlessly move code from development to production. I'm at home in the cloud, especially with <strong>AWS</strong>, and I’m a firm believer in <strong>Infrastructure as Code (IaC)</strong> for creating predictable and repeatable environments.
                    </p>
                    
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    What truly motivates me is the challenge of optimization. I enjoy diving into complex workflows to make them faster, more reliable, and less dependent on manual intervention. Whether it's through savvy <strong>shell scripting</strong>, implementing robust monitoring and logging, or refining deployment strategies, my ultimate goal is to empower development teams by creating a frictionless path to production.
                    </p>

                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    In the end, I'm passionate about building things that are built to last. I strive to engineer infrastructure that is not only production-ready but also maintainable and a pleasure to work on.
                    </p>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

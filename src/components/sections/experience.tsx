'use client';
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'framer-motion';
import { experienceData } from '@/data/experience';
import { Card, CardContent } from '@/components/ui/card';

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-50%' });

  useEffect(() => {
    if (isInView) {
      window.history.replaceState(null, '', '#experience');
    }
  }, [isInView]);

  return (
    <section id="experience" ref={ref} className="py-20 px-4">
      <h2
        className={cn(
          'bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16',
          'bg-gradient-to-b from-black/80 to-black/50',
          'dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50'
        )}
      >
        EXPERIENCE
      </h2>
      <div className="relative mt-12 max-w-4xl">
        {/* The vertical line */}
        <div className="absolute top-0 left-4 w-0.5 h-full bg-gray-300 dark:bg-gray-700"></div>
        <div className="space-y-12">
          {experienceData.map((item, index) => (
            <div key={index} className="relative pl-12">
              {/* The dot */}
              <div className="absolute top-1 left-4 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-2 border-white dark:border-gray-900"></div>
              
              <Card className="bg-white/0c border-white/0">
                <CardContent className="p-6">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{item.date}</p>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                  <h4 className="text-lg font-semibold text-primary dark:text-primary-light mb-2">{item.company}</h4>
                  <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                    {item.description.split('. ').map((point, i) => (
                      point && <li key={i}>{point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

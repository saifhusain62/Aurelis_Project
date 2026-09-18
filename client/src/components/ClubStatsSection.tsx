'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatItem {
  id: string;
  value: number;
  label: string;
}

const stats: StatItem[] = [
  {
    id: 'holes',
    value: 18,
    label: 'Championship holes',
  },
  {
    id: 'heritage',
    value: 58,
    label: 'Years of heritage',
  },
  {
    id: 'acres',
    value: 240,
    label: 'Private acres',
  },
  {
    id: 'memberships',
    value: 450,
    label: 'Limited memberships',
  },
];

function AnimatedCounter({ target, duration = 2 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);

      // Smooth ease-out cubic curve
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(easeOut * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function ClubStatsSection() {
  return (
    <section className="w-full bg-[#0d2217] text-white h-auto lg:h-[248px] py-12 sm:py-14 lg:py-0 px-4 sm:px-6 lg:px-16 flex items-center overflow-hidden border-t border-[#1a3826]">
      <div className="max-w-[1650px] w-full mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0 relative items-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative flex flex-col items-center justify-center text-center px-2 sm:px-6"
            >
              {/* Counter Number */}
              <div className="font-serif text-5xl sm:text-7xl lg:text-[80px] xl:text-[88px] font-normal text-[#cbf23a] leading-none tracking-tight mb-2 sm:mb-2.5 select-none">
                <AnimatedCounter target={stat.value} duration={2} />
              </div>

              {/* Label */}
              <p className="text-[#B8CBB9] text-xs sm:text-sm md:text-[15px] font-medium tracking-normal">
                {stat.label}
              </p>

              {/* Vertical divider line for desktop */}
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-16 xl:h-20 w-[1px] bg-white/10" />
              )}

              {/* Vertical divider line for 2-column mobile/tablet layout */}
              {index % 2 === 0 && (
                <div className="block lg:hidden absolute right-0 top-1/2 -translate-y-1/2 h-14 w-[1px] bg-white/10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

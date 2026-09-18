'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

interface NextRoundCTASectionProps {
  backgroundImage?: string;
}

export default function NextRoundCTASection({
  backgroundImage = '/community.png',
}: NextRoundCTASectionProps) {
  return (
    <section className="relative w-full min-h-[600px] sm:min-h-[660px] lg:min-h-[720px] bg-[#0c1811] text-white flex items-center overflow-hidden px-6 lg:px-16 py-20 sm:py-28 lg:py-32">

      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Golfer preparing for the next round"
          fill
          unoptimized
          priority
          className="object-cover object-top sm:object-[80%_top] lg:object-[right_top]"
        />

        {/* Dark Vignette & Gradient Overlays for optimal text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 sm:via-black/65 md:via-black/50 lg:via-black/40 lg:via-45% to-transparent z-10" />
        <div className="absolute inset-y-0 left-0 w-full sm:w-2/3 lg:w-1/2 backdrop-blur-[1.5px] pointer-events-none z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#09130d]/50 via-transparent to-[#09130d]/70 z-10 pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 max-w-[1650px] w-full mx-auto">
        <div className="max-w-2xl lg:max-w-3xl flex flex-col items-start">

          {/* Eyebrow text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[#B6C8B7] text-xs sm:text-sm font-medium tracking-wide mb-3 sm:mb-4"
          >
            Golf, community and time well spent.
          </motion.p>

          {/* Main Italic Serif Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            style={{ fontFamily: 'var(--font-serif)' }}
            className="italic text-4xl sm:text-5xl lg:text-[60px] xl:text-[68px] leading-[1.04] text-white font-normal tracking-tight mb-10 sm:mb-14"
          >
            <span className="block">The best rounds</span>
            <span className="block">are rarely rushed.</span>
          </motion.h2>

          {/* Subheading */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-sans text-2xl sm:text-3xl lg:text-[40px] font-semibold text-white tracking-tight mb-6 sm:mb-7"
          >
            Ready for your next round?
          </motion.h3>

          {/* Action Buttons Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-wrap items-center gap-3.5 sm:gap-5 mb-6"
          >
            {/* Primary Button: Book a Tee Time */}
            <Link
              href="/book"
              className="inline-flex items-center justify-between gap-3.5 sm:gap-4 bg-white text-[#0f2619] font-semibold text-sm sm:text-[15px] pl-5 sm:pl-6 pr-1.5 sm:pr-2 py-1.5 sm:py-2 rounded-full shadow-2xl group cursor-pointer hover:bg-[#f3f6f3] transition-all"
            >
              <span>Book a Tee Time</span>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#c6f135] text-[#0f2619] flex items-center justify-center shadow-sm">
                <FiArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
              </div>
            </Link>

            {/* Secondary Button: Plan Your Visit */}
            <Link
              href="/visit"
              className="inline-flex items-center justify-between gap-3.5 sm:gap-4 border border-white/40 bg-black/30 backdrop-blur-md text-white font-semibold text-sm sm:text-[15px] pl-5 sm:pl-6 pr-1.5 sm:pr-2 py-1.5 sm:py-2 rounded-full shadow-2xl group cursor-pointer hover:bg-white/10 hover:border-white/60 transition-all"
            >
              <span>Plan Your Visit</span>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#c6f135] text-[#0f2619] flex items-center justify-center shadow-sm">
                <FiArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
              </div>
            </Link>
          </motion.div>

          {/* Footer Note */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-[#c6f135] text-xs sm:text-[13px] font-normal tracking-wide"
          >
            Members receive priority booking access.
          </motion.p>

        </div>
      </div>

    </section>
  );
}

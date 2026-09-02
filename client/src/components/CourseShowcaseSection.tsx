'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

export default function CourseShowcaseSection() {
  return (
    <section className="w-full bg-[#E5ECE3] text-[#122718] py-24 sm:py-32 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-[1650px] mx-auto">

        {/* Top Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-14 sm:mb-20">

          {/* Left Title Area */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 flex flex-col items-start"
          >
            {/* Tag Badge */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full border border-[#CBD5C8] p-1.5 flex items-center justify-center bg-white/60 shadow-sm">
                <Image
                  src="/logo.svg"
                  alt="Aurelis Logo"
                  width={18}
                  height={18}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="border border-[#CBD5C8] bg-white/50 text-[#122718] px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                THE COURSE
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="font-sans text-5xl sm:text-[58px] lg:text-[62px] font-semibold tracking-tight leading-[1.06] text-[#122718]">
              <span className="block">Designed to challenge.</span>
              <span className="block">Made to be remembered.</span>
            </h2>
          </motion.div>

          {/* Right Description & Link */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col items-start lg:items-end lg:text-right lg:pt-8"
          >
            <p className="text-[#4A5E50] text-base sm:text-lg leading-relaxed max-w-[420px] mb-4">
              Every hole follows the natural contours of the landscape, creating a course that rewards precision, patience and imagination.
            </p>

            <Link
              href="/course"
              className="inline-flex items-center gap-2 text-[#122718] font-bold text-sm sm:text-base border-b-2 border-[#122718] pb-0.5 group hover:text-[#2d5236] hover:border-[#2d5236] transition-colors"
            >
              <span>Explore the Course</span>
              <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Bottom Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

          {/* Left Large Image Card (Golfers in Cart) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-8"
          >
            <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[620px] rounded-[2.5rem] overflow-hidden shadow-lg bg-stone-200">
              <Image
                src="/courseimg1.png"
                alt="Golfers in cart on the course"
                fill
                unoptimized
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Right Column: Golf Ball Image + Course Specs Card */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="lg:col-span-4 flex flex-col gap-6 sm:gap-8 justify-between"
          >
            {/* Top Right: Golf Ball on Green Image */}
            <div className="relative w-full h-[240px] sm:h-[280px] lg:h-[340px] rounded-[2.2rem] overflow-hidden shadow-md bg-stone-200">
              <Image
                src="/courseimg2.png"
                alt="Golf ball near hole on green"
                fill
                unoptimized
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Bottom Right: Dark Green Specs Card */}
            <div className="bg-[#10291d] text-white rounded-[2.2rem] p-7 sm:p-9 flex flex-col justify-between flex-grow shadow-md">
              <div className="flex flex-col divide-y divide-[#1e3f2e]">

                {/* 18 Holes */}
                <div className="flex items-center justify-between py-4 sm:py-5 first:pt-0">
                  <span className="text-lg sm:text-xl font-medium tracking-tight text-[#f4f7f4]">
                    18 Holes
                  </span>
                  <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#c6f135]">
                    Championship layout
                  </span>
                </div>

                {/* Par 72 */}
                <div className="flex items-center justify-between py-4 sm:py-5">
                  <span className="text-lg sm:text-xl font-medium tracking-tight text-[#f4f7f4]">
                    Par 72
                  </span>
                  <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#c6f135]">
                    Precision over power
                  </span>
                </div>

                {/* 7,164 Yards */}
                <div className="flex items-center justify-between py-4 sm:py-5 last:pb-0">
                  <span className="text-lg sm:text-xl font-medium tracking-tight text-[#f4f7f4]">
                    7,164 Yards
                  </span>
                  <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#c6f135]">
                    From the championship tees
                  </span>
                </div>

              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

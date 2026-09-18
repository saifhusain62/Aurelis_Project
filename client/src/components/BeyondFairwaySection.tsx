'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface FacilityItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  aspectClass: string;
  colSpan: string;
}

const facilities: FacilityItem[] = [
  {
    id: 'clubhouse',
    title: 'The Clubhouse',
    description: 'Private lounges, terraces and thoughtfully designed social spaces.',
    image: '/fairway1.jpg',
    imageAlt: 'The Clubhouse terrace and private lounges at sunset',
    aspectClass: 'aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/9.5]',
    colSpan: 'lg:col-span-7',
  },
  {
    id: 'dining',
    title: 'Dining',
    description: 'Seasonal menus and understated hospitality overlooking the course.',
    image: '/fairway2.jpg',
    imageAlt: 'Fine dining and wine overlooking the golf course landscape',
    aspectClass: 'aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/3.4]',
    colSpan: 'lg:col-span-5',
  },
  {
    id: 'practice',
    title: 'Practice',
    description: 'Tour-level practice facilities designed for continual improvement.',
    image: '/fairway3.jpg',
    imageAlt: 'Tour-level practice facilities and driving range tracking',
    aspectClass: 'aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/3.4]',
    colSpan: 'lg:col-span-5',
  },
  {
    id: 'private-events',
    title: 'Private Events',
    description: 'Intimate spaces for member gatherings, celebrations and corporate occasions.',
    image: '/fairway4.jpg',
    imageAlt: 'Private events and member gatherings on the terrace overlooking the grounds',
    aspectClass: 'aspect-[16/8] sm:aspect-[16/7.5] lg:aspect-[16/7.2]',
    colSpan: 'lg:col-span-7',
  },
];

export default function BeyondFairwaySection() {
  return (
    <section className="w-full bg-[#F6F4ED] text-[#122718] py-20 sm:py-28 lg:py-32 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-[1650px] mx-auto">

        {/* Header Block */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          {/* Tag Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            {/* Logo Emblem Icon */}
            <div className="w-8 h-8 rounded-full border border-[#D5D0C1] p-1.5 flex items-center justify-center bg-white/70 shadow-sm">
              <Image
                src="/logo.svg"
                alt="Aurelis Logo"
                width={18}
                height={18}
                className="w-full h-full object-contain"
              />
            </div>
            {/* Pill Label */}
            <span className="border border-[#D5D0C1] bg-white/60 text-[#122718] px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.18em] uppercase shadow-sm">
              BEYOND THE FAIRWAY
            </span>
          </motion.div>

          {/* Section Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-sans text-4xl sm:text-5xl lg:text-[58px] font-semibold tracking-tight leading-[1.08] text-[#122718] max-w-4xl"
          >
            <span className="block">Everything around the game,</span>
            <span className="block">considered.</span>
          </motion.h2>
        </div>

        {/* 2-Row Asymmetric Cards Grid */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-16">

          {/* Row 1: The Clubhouse (Wide) + Dining (Narrow) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-10 items-start">
            {/* The Clubhouse */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-7 flex flex-col group cursor-pointer"
            >
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] rounded-[24px] sm:rounded-[32px] overflow-hidden bg-stone-200 shadow-sm">
                <Image
                  src={facilities[0].image}
                  alt={facilities[0].imageAlt}
                  fill
                  unoptimized
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="mt-4 sm:mt-5">
                <h3 className="text-xl sm:text-[22px] font-bold text-[#122718] tracking-tight">
                  {facilities[0].title}
                </h3>
                <p className="text-[#55695B] text-sm sm:text-[15px] font-normal mt-1 leading-relaxed">
                  {facilities[0].description}
                </p>
              </div>
            </motion.div>

            {/* Dining */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="lg:col-span-5 flex flex-col group cursor-pointer"
            >
              <div className="relative w-full aspect-[4/3] sm:aspect-[4/3.2] lg:aspect-[4/3] rounded-[24px] sm:rounded-[32px] overflow-hidden bg-stone-200 shadow-sm">
                <Image
                  src={facilities[1].image}
                  alt={facilities[1].imageAlt}
                  fill
                  unoptimized
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="mt-4 sm:mt-5">
                <h3 className="text-xl sm:text-[22px] font-bold text-[#122718] tracking-tight">
                  {facilities[1].title}
                </h3>
                <p className="text-[#55695B] text-sm sm:text-[15px] font-normal mt-1 leading-relaxed">
                  {facilities[1].description}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Row 2: Practice (Narrow) + Private Events (Wide) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-10 items-start">
            {/* Practice */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 flex flex-col group cursor-pointer"
            >
              <div className="relative w-full aspect-[4/3] sm:aspect-[4/3.2] lg:aspect-[4/3] rounded-[24px] sm:rounded-[32px] overflow-hidden bg-stone-200 shadow-sm">
                <Image
                  src={facilities[2].image}
                  alt={facilities[2].imageAlt}
                  fill
                  unoptimized
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="mt-4 sm:mt-5">
                <h3 className="text-xl sm:text-[22px] font-bold text-[#122718] tracking-tight">
                  {facilities[2].title}
                </h3>
                <p className="text-[#55695B] text-sm sm:text-[15px] font-normal mt-1 leading-relaxed">
                  {facilities[2].description}
                </p>
              </div>
            </motion.div>

            {/* Private Events */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="lg:col-span-7 flex flex-col group cursor-pointer"
            >
              <div className="relative w-full aspect-[16/8] sm:aspect-[16/7.5] lg:aspect-[16/7.2] rounded-[24px] sm:rounded-[32px] overflow-hidden bg-stone-200 shadow-sm">
                <Image
                  src={facilities[3].image}
                  alt={facilities[3].imageAlt}
                  fill
                  unoptimized
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="mt-4 sm:mt-5">
                <h3 className="text-xl sm:text-[22px] font-bold text-[#122718] tracking-tight">
                  {facilities[3].title}
                </h3>
                <p className="text-[#55695B] text-sm sm:text-[15px] font-normal mt-1 leading-relaxed">
                  {facilities[3].description}
                </p>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}

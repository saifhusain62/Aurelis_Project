'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

interface ClubBeginsSectionProps {
  backgroundImage?: string;
}

export default function ClubBeginsSection({
  backgroundImage = '/beginimg.png',
}: ClubBeginsSectionProps) {
  return (
    <section className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] bg-[#0c1f15] text-white flex items-center overflow-hidden px-6 lg:px-16 py-20 sm:py-28">

      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Aurelis Clubhouse & Golf Club"
          fill
          unoptimized
          priority
          className="object-cover object-center lg:object-[80%_center]"
        />

        {/* Left Side Blur & Forest Green Gradient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1d13] via-[#0b1d13]/90 md:via-[#0b1d13]/85 lg:via-[#0b1d13]/70 lg:via-50% to-transparent z-10" />

        {/* Subtle blur mask overlay on the far left for exact match */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-2/3 lg:w-1/2 backdrop-blur-[2px] pointer-events-none z-10" />

        {/* Top and Bottom soft shading */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#09130d]/40 via-transparent to-[#09130d]/60 z-10 pointer-events-none" />
      </div>

      {/* Content Container (Standard site width max-w-[1650px] mx-auto) */}
      <div className="relative z-20 max-w-[1650px] w-full mx-auto">
        <div className="max-w-2xl flex flex-col items-start">

          {/* Top Badges (Icon Circle + Pill) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-2.5 mb-8 sm:mb-10"
          >
            {/* Emblem Circle */}
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#4d6a54] bg-[#142d1f]/70 backdrop-blur-md p-2 flex items-center justify-center shadow-md">
              <Image
                src="/logo.svg"
                alt="Aurelis Emblem"
                width={18}
                height={18}
                className="w-full h-full object-contain filter brightness-110"
              />
            </div>

            {/* Pill Capsule */}
            <div className="border border-[#4d6a54] bg-[#142d1f]/70 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest text-[#c6f135] uppercase shadow-md">
              THE CLUB
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-[64px] font-semibold text-white tracking-tight leading-[1.08] mb-6"
          >
            <span className="block">Your place at the</span>
            <span className="block">club begins here.</span>
          </motion.h2>

          {/* Description Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[#B6C8B7] text-base sm:text-lg lg:text-[1.15rem] leading-relaxed max-w-xl mb-10 font-normal"
          >
            Discover membership opportunities and arrange a private introduction to Aurelis Golf Club.
          </motion.p>

          {/* CTA Pill Button (Styled same as Hero Section) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <Link
              href="/membership"
              className="inline-flex items-center justify-between gap-4 bg-white text-[#0f2619] font-semibold text-sm sm:text-base pl-6 pr-2 py-2 rounded-full shadow-2xl group w-fit cursor-pointer"
            >
              <span>Request Membership</span>
              <div className="w-10 h-10 rounded-full bg-[#c6f135] text-[#0f2619] flex items-center justify-center shadow-sm">
                <FiArrowUpRight className="w-5 h-5 transition-transform duration-300 ease-out group-hover:rotate-45" />
              </div>
            </Link>
          </motion.div>

        </div>
      </div>

    </section>
  );
}

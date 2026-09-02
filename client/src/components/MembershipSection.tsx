'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const membershipFeatures = [
  {
    number: '01',
    title: 'Priority Course Access',
    description: 'Preferred tee times and year-round access to our championship course.',
  },
  {
    number: '02',
    title: 'Private Clubhouse',
    description: 'Member-only lounges, dining rooms and spaces created for privacy.',
  },
  {
    number: '03',
    title: 'Curated Events',
    description: 'Invitation-only tournaments, dinners and social gatherings throughout the year.',
  },
  {
    number: '04',
    title: 'Practice & Performance',
    description: 'Professional instruction, practice facilities and personalized coaching.',
  },
];

export default function MembershipSection() {
  return (
    <section className="w-full bg-[#F6F5EE] text-[#122718] py-24 sm:py-32 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-[1650px] mx-auto">
        
        {/* Top Header Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start mb-12 sm:mb-16"
        >
          {/* Tag Badge */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-full border border-[#D5D0C1] p-1.5 flex items-center justify-center bg-white/60 shadow-sm">
              <Image
                src="/logo.svg"
                alt="Aurelis Logo"
                width={18}
                height={18}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="border border-[#D5D0C1] bg-white/50 text-[#122718] px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
              MEMBERSHIP
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="font-sans text-5xl sm:text-[58px] lg:text-[62px] font-semibold tracking-tight leading-[1.06] text-[#122718] mb-5">
            <span className="block">Membership, without</span>
            <span className="block">compromise.</span>
          </h2>

          {/* Subtitle Description */}
          <p className="text-[#5A6E60] text-base sm:text-lg leading-relaxed max-w-lg">
            A limited membership created for those who value exceptional golf, considered service and a genuine sense of community.
          </p>
        </motion.div>

        {/* Bottom 2-Column Content: Image and List perfectly aligned at the top */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Feature Image */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 w-full"
          >
            <div className="relative w-full max-w-[650px] h-[450px] sm:h-[560px] lg:h-[680px] rounded-[2.5rem] overflow-hidden shadow-lg bg-stone-200">
              <Image
                src="/membercard.jpg"
                alt="Custom Titleist golf club held in gloved hand"
                fill
                unoptimized
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Right Column: Numbered Features List + CTA (Starts flush at top) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-6 flex flex-col justify-start"
          >
            {/* Numbered List */}
            <div className="flex flex-col divide-y divide-[#E0DCCE]">
              {membershipFeatures.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 gap-4 py-8 sm:py-9 first:pt-0"
                >
                  {/* Number 01, 02, etc. */}
                  <div className="col-span-2 sm:col-span-2">
                    <span className="text-[#122718] font-medium text-lg sm:text-xl tracking-tight">
                      {item.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="col-span-10 sm:col-span-10">
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#122718] tracking-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#5A6E60] text-sm sm:text-base leading-relaxed max-w-md">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Explore Membership Link */}
            <div className="pt-6 sm:pt-7">
              <Link
                href="/membership"
                className="inline-flex items-center gap-2 text-[#122718] font-semibold text-sm sm:text-base border-b border-[#122718] pb-0.5 group hover:text-[#2d5236] hover:border-[#2d5236] transition-colors"
              >
                <span>Explore Membership</span>
                <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

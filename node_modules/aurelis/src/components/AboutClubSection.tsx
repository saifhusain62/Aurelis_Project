'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';

export default function AboutClubSection() {
  return (
    <section className="w-full bg-[#F7F5EE] text-[#122718] py-24 sm:py-32 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-[1650px] mx-auto">

        {/* Top Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 sm:mb-24">

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
              <div className="w-8 h-8 rounded-full border border-[#D5D0C1] p-1.5 flex items-center justify-center bg-white/50">
                <Image
                  src="/logo.svg"
                  alt="Aurelis Logo"
                  width={18}
                  height={18}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="border border-[#D5D0C1] bg-white/40 text-[#122718] px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                THE CLUB
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="font-sans text-5xl sm:text-[58px] lg:text-[58px] font-semibold tracking-tight leading-[1.05] text-[#122718]">
              <span className="block">More than a course.</span>
              <span className="block">A place to belong.</span>
            </h2>
          </motion.div>

          {/* Right Description Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 lg:text-right lg:pt-8 flex justify-end"
          >
            <p className="text-[#4A5E50] text-base sm:text-lg leading-relaxed max-w-[490px] text-right ml-auto">
              Aurelis brings together championship golf, thoughtful hospitality and a private community. Shaped for those who value quiet distinction over spectacle, sustained since 1968.
            </p>
          </motion.div>

        </div>

        {/* Lower 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">

          {/* Column 1: Small Image + Description + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-4 flex flex-col justify-between"
          >
            <div>
              {/* Image */}
              <div className="relative w-full aspect-[4/3.5] rounded-[2rem] overflow-hidden shadow-sm bg-stone-200">
                <Image
                  src="/about1.png"
                  alt="Golf Course Lifestyle"
                  fill
                  unoptimized
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Subtitle */}
              <p className="text-[#5A6E60] text-sm leading-relaxed max-w-xs mt-6 mb-8">
                Passionate stewards committed to the course, the clubhouse and the community.
              </p>
            </div>

            {/* CTA Button */}
            <div className="w-fit">
              <Link
                href="/membership"
                className="inline-flex items-center justify-between gap-4 bg-[#0f2619] text-white pl-6 pr-2 py-2 rounded-full font-semibold text-sm shadow-md group w-fit cursor-pointer"
              >
                <span>Get Membership</span>
                <div className="w-9 h-9 rounded-full bg-[#c6f135] text-[#0f2619] flex items-center justify-center shadow-sm">
                  <FiArrowUpRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:rotate-45" />
                </div>
              </Link>
            </div>
          </motion.div>

          {/* Column 2: Stats & Community Block with Left Border */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-4 border-l-0 lg:border-l border-[#E2DFD4] lg:pl-12 flex flex-col justify-start py-2"
          >
            {/* Heritage Stat Number */}
            <div className="flex items-start gap-1">
              <span
                style={{ fontFamily: 'var(--font-serif)' }}
                className="text-7xl sm:text-8xl lg:text-[7.5rem] font-normal leading-none text-[#122718]"
              >
                58
              </span>
              <span className="text-[#c6f135] text-2xl sm:text-3xl mt-1">★</span>
            </div>
            <p className="text-[#122718] font-semibold text-sm tracking-wide mt-3 mb-10">
              Years of heritage
            </p>

            {/* Community Heading & Paragraph */}
            <h3 className="font-semibold text-xl text-[#122718] mb-2">
              A private community
            </h3>
            <p className="text-[#5A6E60] text-sm leading-relaxed max-w-xs mb-5">
              Members who return season after season - a fellowship shaped by shared mornings on the course.
            </p>

            {/* Overlapping Avatars (Positioned directly under description) */}
            <div className="flex items-center -space-x-2 mt-1">
              <div className="relative w-10 h-10 rounded-full border-2 border-[#F7F5EE] overflow-hidden shadow-sm">
                <Image
                  src="/about2.png"
                  alt="Member Avatar"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              <div className="relative w-10 h-10 rounded-full border-2 border-[#F7F5EE] overflow-hidden shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                  alt="Member Avatar"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              <div className="relative w-10 h-10 rounded-full border-2 border-[#F7F5EE] overflow-hidden shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
                  alt="Member Avatar"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              <div className="relative w-10 h-10 rounded-full border-2 border-[#F7F5EE] overflow-hidden shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=200&auto=format&fit=crop"
                  alt="Member Avatar"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Column 3: Large Right Feature Image */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:col-span-4"
          >
            <div className="relative w-full h-full min-h-[420px] rounded-[2.5rem] overflow-hidden shadow-sm bg-stone-200">
              <Image
                src="/about2.png"
                alt="Golfer Swinging"
                fill
                unoptimized
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

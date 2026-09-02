'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-36 pb-12 px-6 lg:px-16 overflow-hidden bg-[#09130d]">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/herobg.png"
          alt="Aurelis Golf Estate"
          fill
          priority
          unoptimized
          className="object-cover object-center transition-transform duration-1000 scale-105"
        />
      </div>

      {/* Atmospheric Overlay to ensure text readability */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-[#09130d] via-[#09130d]/50 to-black/40 z-10 pointer-events-none" /> */}

      {/* Main Content Area */}
      <div className="relative z-20 max-w-[1650px] mx-auto w-full my-auto flex flex-col lg:flex-row lg:items-end justify-between gap-12 pt-8">

        {/* Left Side: Typography & Main CTAs */}
        <div className="max-w-2xl flex flex-col gap-6 sm:gap-8">

          {/* Tag Badges */}
          <div className="flex items-center gap-2">
            {/* Small emblem circle */}
            <div className="w-8 h-8 rounded-full bg-[#c6f135] text-[#0f2619] flex items-center justify-center shadow-md">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2L4 19h4.5l1.5-3.5h4L15.5 19H20L12 2zm-1 8.5L12 6l1 4.5h-2z" />
              </svg>
            </div>
            {/* EST. Pill Badge */}
            <div className="bg-[#c6f135] text-[#0f2619] px-4 py-1.5 rounded-full text-xs font-extrabold tracking-wider uppercase shadow-md">
              PRIVATE MEMBERS CLUB · EST. 1968
            </div>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-[5.4rem] leading-[0.98] tracking-tight text-white font-normal drop-shadow-lg">
            <span className="italic block font-serif text-[#f8faf8] font-normal">
              A quieter way
            </span>
            <span className="block font-serif font-medium">
              to play the game.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-200 text-base sm:text-lg lg:text-xl font-normal max-w-lg leading-relaxed text-shadow-sm">
            Championship golf, considered hospitality and a private community shaped around the game.
          </p>

          {/* CTA & Course Meta Stats */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-2">
            {/* White CTA Pill Button */}
            <Link
              href="/membership"
              className="inline-flex items-center justify-between gap-4 bg-white hover:bg-slate-100 text-[#0f2619] font-semibold text-sm sm:text-base pl-6 pr-2 py-2 rounded-full transition-all shadow-2xl hover:scale-[1.02] active:scale-95 group w-fit"
            >
              <span>Explore Membership</span>
              <div className="w-10 h-10 rounded-full bg-[#c6f135] text-[#0f2619] flex items-center justify-center group-hover:translate-x-0.5 transition-transform shadow-sm">
                <FiArrowRight className="w-5 h-5" />
              </div>
            </Link>

            {/* Course Meta Info */}
            <div className="flex items-center gap-2.5 text-slate-300 text-xs sm:text-sm font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#c6f135] shadow-[0_0_8px_#c6f135]" />
              <span>18 Holes · Par 72 · 7,164 Yards</span>
            </div>
          </div>

        </div>

        {/* Right Side: Floating Event Glass Card */}
        <div className="w-full lg:max-w-md lg:ml-auto">
          <div className="glass-card glass-card-hover p-6 sm:p-8 rounded-[2rem] relative border border-white/20 shadow-2xl backdrop-blur-xl">
            {/* Card Date Badge */}
            <div className="bg-[#c6f135] text-[#0f2619] px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold inline-block shadow-sm">
              Aug 24, 2026
            </div>

            {/* Event Title & Subtitle */}
            <div className="mt-8 mb-4">
              <h3 className="text-white font-semibold text-xl sm:text-2xl tracking-tight leading-snug">
                Summer Members Invitational
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm font-medium mt-2">
                Members Tournament · 08:00
              </p>
            </div>

            {/* Floating Arrow Button */}
            <Link
              href="/events"
              className="absolute bottom-6 right-6 w-11 h-11 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-[#0f2619] transition-all shadow-md group"
              aria-label="View Event Details"
            >
              <FiArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

      </div>

      {/* Bottom Gradient Fade */}
      <div className="relative z-20 max-w-[1650px] mx-auto w-full flex items-center justify-between text-xs text-slate-400 font-medium pt-8 border-t border-white/10">
        <div>© 2026 Aurelis Golf Estate. All rights reserved.</div>
        <div className="hidden sm:flex gap-6">
          <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
        </div>
      </div>
    </section>
  );
}

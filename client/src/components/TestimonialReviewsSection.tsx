'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const testimonials = [
  {
    quote:
      '“Aurelis offers more than a great course. With immaculate greens and a genuine community, it’s the place we return to season after season.”',
    author: 'Eleanor Whitfield',
    role: 'MEMBER SINCE 2011',
    image: '/testimg1.jpg',
  },
  {
    quote:
      '“The pace of play, the exceptional hospitality in the clubhouse, and the camaraderie among members make Aurelis an irreplaceable sanctuary.”',
    author: 'Harrison Vance',
    role: 'MEMBER SINCE 2017',
    image:
      'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=1000&auto=format&fit=crop',
  },
  {
    quote:
      '“From early morning tee times to quiet dinners on the terrace, every single visit reminds me why this club is in a league of its own.”',
    author: 'Clara Montrose',
    role: 'MEMBER SINCE 2019',
    image:
      'https://images.unsplash.com/photo-1593111774642-a1789c625807?q=80&w=1000&auto=format&fit=crop',
  },
];

export default function TestimonialReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="w-full bg-[#F5F4EC] text-[#122718] py-24 sm:py-32 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-[1650px] mx-auto">

        {/* Top Header Row with Tilted Photo Badge */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-16 sm:mb-20">

          {/* Left Title Area */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start"
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
                MEMBER REVIEWS
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="font-sans text-5xl sm:text-[58px] lg:text-[62px] font-semibold tracking-tight leading-[1.06] text-[#122718]">
              <span className="block">What our members</span>
              <span className="block">say about Aurelis.</span>
            </h2>
          </motion.div>

          {/* Right Floating Tilted Photo */}
          <motion.div
            initial={{ opacity: 0, rotate: 6, scale: 0.95 }}
            whileInView={{ opacity: 1, rotate: 12, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative w-[290px] h-[190px] rounded-[1.8rem] overflow-hidden shadow-xl bg-stone-200"
          >
            <Image
              src='/membercard.jpg'
              alt="Members talking on course"
              fill
              unoptimized
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Bottom Cards Grid: Left Lime Rating Card + Right White Review Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

          {/* Left Rating Card: Bright Lime Card with Inset Dark Forest Card */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-4 bg-[#B8F128] rounded-[2.6rem] p-4 sm:p-5 flex items-stretch shadow-lg relative overflow-hidden group"
          >
            {/* Background subtle geometric light facet shapes */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-white/20 rotate-45 transform origin-center rounded-3xl" />
              <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-lime-400/30 rotate-12 transform origin-center rounded-3xl" />
            </div>

            {/* Dark Forest Inset Card - Matches full container height */}
            <div className="relative z-10 w-full bg-[#122B1E] text-white rounded-[2.1rem] py-10 px-6 sm:py-12 sm:px-8 flex flex-col items-center justify-between text-center shadow-2xl">
              
              {/* Laurel Wreath with 4.9 Rating */}
              <div className="flex items-center justify-center gap-3 my-auto">
                {/* Left Laurel Branch SVG */}
                <svg className="w-6 h-12 text-[#98C296] opacity-90" viewBox="0 0 24 48" fill="currentColor">
                  <path d="M18 4C14 8 10 14 10 24C10 34 14 40 18 44C16 41 14 36 14 24C14 12 16 7 18 4Z" />
                  <path d="M12 10C8 13 5 18 6 22C8 22 11 18 12 10Z" />
                  <path d="M11 20C7 23 4 28 5 32C7 32 10 28 11 20Z" />
                  <path d="M13 30C9 33 6 38 7 42C9 42 12 38 13 30Z" />
                </svg>

                <span 
                  style={{ fontFamily: 'var(--font-serif)' }}
                  className="text-6xl sm:text-7xl font-normal tracking-tight text-[#F7F9F6] leading-none"
                >
                  4.9
                </span>

                {/* Right Laurel Branch SVG */}
                <svg className="w-6 h-12 text-[#98C296] opacity-90" viewBox="0 0 24 48" fill="currentColor">
                  <path d="M6 4C10 8 14 14 14 24C14 34 10 40 6 44C8 41 10 36 10 24C10 12 8 7 6 4Z" />
                  <path d="M12 10C16 13 19 18 18 22C16 22 13 18 12 10Z" />
                  <path d="M13 20C17 23 20 28 19 32C17 32 14 28 13 20Z" />
                  <path d="M11 30C15 33 18 38 17 42C15 42 12 38 11 30Z" />
                </svg>
              </div>

              {/* Bottom Details (Avatars + Stars + Label) */}
              <div className="flex flex-col items-center my-auto">
                {/* Overlapping Avatars with Green Ring Borders */}
                <div className="flex items-center -space-x-2.5 mb-5">
                  <div className="relative w-11 h-11 rounded-full border-2 border-[#548450] overflow-hidden shadow-sm">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                      alt="Member Avatar"
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-11 h-11 rounded-full border-2 border-[#548450] overflow-hidden shadow-sm">
                    <Image
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
                      alt="Member Avatar"
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-11 h-11 rounded-full border-2 border-[#548450] overflow-hidden shadow-sm">
                    <Image
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
                      alt="Member Avatar"
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* 5-Star Rating */}
                <div className="flex items-center gap-1.5 text-white text-xs sm:text-sm mb-4">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>

                {/* Subtext */}
                <p className="text-[#F0F5EE] text-sm sm:text-base font-medium tracking-tight">
                  450+ Satisfied Members
                </p>
              </div>

            </div>
          </motion.div>

          {/* Right White Review Card with Carousel & Golfer Photo */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="lg:col-span-8 bg-white rounded-[2.5rem] p-8 sm:p-12 lg:p-14 shadow-lg flex flex-col justify-between"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center">

              {/* Quote & Author Info */}
              <div className="md:col-span-7 flex flex-col justify-between h-full py-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p className="text-2xl sm:text-3xl lg:text-[2.1rem] font-medium leading-[1.3] text-[#122718] tracking-tight mb-8">
                      {current.quote}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Author Info + Carousel Navigation */}
                <div className="flex items-end justify-between pt-6 border-t border-stone-100">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#122718]">
                      {current.author}
                    </h4>
                    <p className="text-[#647469] text-xs font-semibold tracking-wider uppercase mt-0.5">
                      {current.role}
                    </p>
                  </div>

                  {/* Arrow Buttons */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={handlePrev}
                      aria-label="Previous Review"
                      className="w-11 h-11 rounded-full border border-[#D5D0C1] flex items-center justify-center text-[#122718] hover:bg-[#122718] hover:text-white hover:border-[#122718] transition-all cursor-pointer shadow-sm"
                    >
                      <FiArrowLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNext}
                      aria-label="Next Review"
                      className="w-11 h-11 rounded-full border border-[#D5D0C1] flex items-center justify-center text-[#122718] hover:bg-[#122718] hover:text-white hover:border-[#122718] transition-all cursor-pointer shadow-sm"
                    >
                      <FiArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Photo (Golfer Swinging Finish) */}
              <div className="md:col-span-5 relative w-full h-[320px] sm:h-[380px] lg:h-[420px] rounded-[2rem] overflow-hidden shadow-md bg-stone-100">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={current.image}
                      alt={current.author}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

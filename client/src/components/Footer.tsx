'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { FaFacebookF, FaXTwitter, FaInstagram, FaYoutube } from 'react-icons/fa6';

interface FooterProps {
  backgroundImage?: string;
}

export default function Footer({
  backgroundImage = '/footer.jpg',
}: FooterProps) {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <footer className="relative w-full  text-white pt-24 sm:pt-32 lg:pt-40 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden">

      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Aurelis Golf Club at sunset"
          fill
          unoptimized
          priority
          className="object-cover object-top sm:object-center"
        />
        {/* Subtle vignette gradient to blend seamlessly while keeping image clear */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#09130d]/60 via-black/25 to-[#09130d]/80 z-10" />
      </div>

      {/* Main Container */}
      <div className="relative z-20 max-w-[1650px] w-full mx-auto flex flex-col items-center">

        {/* Giant "AURELIS" Background Wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full select-none pointer-events-none -mb-8 sm:-mb-20 md:-mb-32 lg:-mb-40 text-center z-10"
        >
          <h1 className="font-sans font-black tracking-[-0.04em] text-[48px] sm:text-[110px] md:text-[180px] lg:text-[230px] xl:text-[270px] leading-none text-[#c6f135] uppercase drop-shadow-md">
            AURELIS
          </h1>
        </motion.div>

        {/* Floating Glassmorphism Footer Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="w-full relative z-20 bg-[#0f2115]/80 backdrop-blur-2xl border border-[#2c4732]/70 rounded-[15px] shadow-2xl px-5 sm:px-10 lg:px-14 py-8 sm:py-12 lg:py-14"
        >

          {/* Upper 4-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

            {/* Column 1: SAY HELLO */}
            <div className="lg:col-span-4 flex flex-col items-start">
              <span className="text-xs uppercase font-bold tracking-[0.18em] text-[#9cb1a0] mb-4">
                SAY HELLO
              </span>
              <a
                href="mailto:members@aurelisgolfclub.com"
                className="text-sm sm:text-base font-semibold text-[#c6f135] hover:underline mb-2.5 transition-colors"
              >
                members@aurelisgolfclub.com
              </a>
              <a
                href="tel:+12145550142"
                className="text-sm sm:text-base font-medium text-white/90 mb-6 hover:text-white transition-colors"
              >
                +1 (214) 555-0142
              </a>

              {/* Social Icons */}
              <div className="flex items-center gap-2.5">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 hover:border-white/40 text-white flex items-center justify-center transition-all"
                >
                  <FaFacebookF className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X (Twitter)"
                  className="w-9 h-9 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 hover:border-white/40 text-white flex items-center justify-center transition-all"
                >
                  <FaXTwitter className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 hover:border-white/40 text-white flex items-center justify-center transition-all"
                >
                  <FaInstagram className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 hover:border-white/40 text-white flex items-center justify-center transition-all"
                >
                  <FaYoutube className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Column 2: QUICK LINKS */}
            <div className="lg:col-span-2 flex flex-col items-start">
              <span className="text-xs uppercase font-bold tracking-[0.18em] text-[#9cb1a0] mb-4">
                QUICK LINKS
              </span>
              <ul className="space-y-3">
                <li>
                  <Link href="/club" className="text-sm sm:text-base text-white/80 hover:text-white transition-colors">
                    Club
                  </Link>
                </li>
                <li>
                  <Link href="/course" className="text-sm sm:text-base text-white/80 hover:text-white transition-colors">
                    The Course
                  </Link>
                </li>
                <li>
                  <Link href="/membership" className="text-sm sm:text-base text-white/80 hover:text-white transition-colors">
                    Membership
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="text-sm sm:text-base text-white/80 hover:text-white transition-colors">
                    Events
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: MEMBER */}
            <div className="lg:col-span-2 flex flex-col items-start">
              <span className="text-xs uppercase font-bold tracking-[0.18em] text-[#9cb1a0] mb-4">
                MEMBER
              </span>
              <ul className="space-y-3">
                <li>
                  <Link href="/login" className="text-sm sm:text-base text-white/80 hover:text-white transition-colors">
                    Member Login
                  </Link>
                </li>
                <li>
                  <Link href="/book" className="text-sm sm:text-base text-white/80 hover:text-white transition-colors">
                    Book Tee Time
                  </Link>
                </li>
                <li>
                  <Link href="/calendar" className="text-sm sm:text-base text-white/80 hover:text-white transition-colors">
                    Club Calendar
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: STAY CONNECTED */}
            <div className="lg:col-span-4 flex flex-col items-start">
              <span className="text-xs uppercase font-bold tracking-[0.18em] text-[#9cb1a0] mb-4">
                STAY CONNECTED
              </span>
              <form onSubmit={handleSubscribe} className="w-full">
                {/* Search / Subscribe Capsule */}
                <div className="w-full border border-white/20 bg-[#0d1e13]/80 rounded-full p-1.5 flex items-center justify-between shadow-inner focus-within:border-white/40 transition-colors">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email Address"
                    required
                    className="bg-transparent text-white placeholder:text-white/45 text-xs sm:text-sm px-4 focus:outline-none flex-1 min-w-0"
                  />
                  <button
                    type="submit"
                    className="bg-[#142e1f] hover:bg-[#1a3d28] border border-[#2b4c34] text-white text-xs sm:text-sm font-semibold pl-4 pr-1 py-1.5 rounded-full flex items-center gap-2.5 transition-all cursor-pointer shrink-0 shadow-md"
                  >
                    <span>Subscribe</span>
                    <div className="w-7 h-7 rounded-full bg-[#c6f135] text-[#0f2619] flex items-center justify-center shrink-0 shadow-sm">
                      <FiArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </button>
                </div>
                <p className="text-xs text-white/45 mt-3 font-normal">
                  By subscribing, you accept our privacy policy.
                </p>
              </form>
            </div>

          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-[#29422e]/60 my-8 sm:my-10" />

          {/* Lower Row: Logo + Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Logo & Brand Info */}
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 relative flex items-center justify-center">
                <Image
                  src="/logo.svg"
                  alt="Aurelis Logo"
                  width={28}
                  height={28}
                  className="w-full h-full object-contain filter brightness-110"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xs sm:text-sm tracking-[0.18em] text-white uppercase">
                  AURELIS GOLF CLUB
                </span>
                <span className="text-[10px] tracking-[0.22em] text-[#c6f135]/90 font-semibold uppercase">
                  EST. 1968
                </span>
              </div>
            </div>

            {/* Copyright */}
            <p className="text-xs text-white/50 font-normal text-center sm:text-right">
              Copyright &copy; 2026 Aurelis Golf Club. All rights reserved.
            </p>
          </div>

        </motion.div>

      </div>
    </footer>
  );
}

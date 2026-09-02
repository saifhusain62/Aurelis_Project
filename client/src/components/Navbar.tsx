'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FiChevronDown, FiPhone, FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-5 transition-all">
      <div className="max-w-[1650px] mx-auto bg-white/95 backdrop-blur-md text-[#0f2619] rounded-full px-4 sm:px-6 py-3 shadow-2xl flex items-center justify-between border border-white/40">
        {/* Left: Brand Logo & Emblem */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link href="/" className="flex items-center gap-2.5 group">
            {/* Custom Emblem */}
            <div className="w-9 h-9 rounded-full bg-[#0f2619] flex items-center justify-center text-[#c6f135] shadow-sm transition-transform group-hover:scale-105">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2L4 19h4.5l1.5-3.5h4L15.5 19H20L12 2zm-1 8.5L12 6l1 4.5h-2z" />
              </svg>
            </div>
            <span className="font-bold text-lg tracking-[0.18em] text-[#0f2619] font-sans">
              AURELIS
            </span>
          </Link>

          <span className="hidden sm:block h-6 w-[1px] bg-slate-200" />
        </div>

        {/* Center: Navigation Menu (Desktop) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-800">
          <div className="relative group py-1 cursor-pointer">
            <Link href="/club" className="flex items-center gap-1.5 hover:text-[#0f2619] transition-colors">
              Club
              <FiChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0f2619] transition-transform group-hover:rotate-180" />
            </Link>
          </div>

          <Link href="/course" className="hover:text-[#0f2619] transition-colors">
            The Course
          </Link>

          <div className="relative group py-1 cursor-pointer">
            <Link href="/membership" className="flex items-center gap-1.5 hover:text-[#0f2619] transition-colors">
              Membership
              <FiChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0f2619] transition-transform group-hover:rotate-180" />
            </Link>
          </div>

          <Link href="/experiences" className="hover:text-[#0f2619] transition-colors">
            Experiences
          </Link>

          <Link href="/events" className="hover:text-[#0f2619] transition-colors">
            Events
          </Link>
        </nav>

        {/* Right: Phone & Book Tee Time CTA */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Phone Contact */}
          <a
            href="tel:+12145550142"
            className="hidden md:flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-[#0f2619] transition-colors group"
          >
            <div className="w-8 h-8 rounded-full bg-[#c6f135] text-[#0f2619] flex items-center justify-center group-hover:scale-105 transition-transform">
              <FiPhone className="w-4 h-4 fill-current" />
            </div>
            <span className="tracking-tight">+1 (214) 555-0142</span>
          </a>

          {/* Book Tee Time Button */}
          <Link
            href="/book"
            className="bg-[#0f2619] hover:bg-[#183a27] text-white px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium flex items-center gap-2.5 transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            <span className="w-2 h-2 rounded-full bg-[#c6f135] shadow-[0_0_8px_#c6f135] animate-pulse" />
            Book a Tee Time
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full hover:bg-slate-100 text-slate-800 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 max-w-[1650px] mx-auto bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/40 flex flex-col gap-4 text-slate-900 animate-in fade-in slide-in-from-top-4">
          <Link
            href="/club"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold py-2 border-b border-slate-100 flex items-center justify-between"
          >
            Club
            <FiChevronDown className="w-4 h-4" />
          </Link>
          <Link
            href="/course"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold py-2 border-b border-slate-100"
          >
            The Course
          </Link>
          <Link
            href="/membership"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold py-2 border-b border-slate-100 flex items-center justify-between"
          >
            Membership
            <FiChevronDown className="w-4 h-4" />
          </Link>
          <Link
            href="/experiences"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold py-2 border-b border-slate-100"
          >
            Experiences
          </Link>
          <Link
            href="/events"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold py-2 border-b border-slate-100"
          >
            Events
          </Link>
          
          <a
            href="tel:+12145550142"
            className="flex items-center gap-3 pt-2 text-sm font-semibold text-slate-900"
          >
            <div className="w-8 h-8 rounded-full bg-[#c6f135] text-[#0f2619] flex items-center justify-center">
              <FiPhone className="w-4 h-4" />
            </div>
            +1 (214) 555-0142
          </a>
        </div>
      )}
    </header>
  );
}

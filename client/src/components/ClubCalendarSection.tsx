'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

interface CalendarEvent {
  id: string;
  date: string;
  title: string;
  details: string;
  href?: string;
}

const events: CalendarEvent[] = [
  {
    id: 'summer-invitational',
    date: '24 AUG',
    title: 'Summer Members Invitational',
    details: 'Members Tournament · 08:00',
    href: '/calendar/summer-invitational',
  },
  {
    id: 'nine-dine',
    date: '06 SEP',
    title: 'Nine & Dine',
    details: 'Golf + Private Dinner · 16:30',
    href: '/calendar/nine-and-dine',
  },
  {
    id: 'club-championship',
    date: '21 SEP',
    title: 'Club Championship',
    details: 'Annual Championship · All Day',
    href: '/calendar/club-championship',
  },
];

export default function ClubCalendarSection() {
  return (
    <section className="w-full bg-[#F6F4ED] text-[#122718] py-20 sm:py-28 lg:py-32 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-[1650px] mx-auto">
        
        {/* Header Block */}
        <div className="mb-14 sm:mb-20 lg:mb-24">
          {/* Badge */}
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
              CLUB CALENDAR
            </span>
          </motion.div>

          {/* Title & View Calendar Link Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-sans text-4xl sm:text-5xl lg:text-[58px] font-semibold tracking-tight leading-[1.08] text-[#122718]"
            >
              <span className="block">What&apos;s happening at</span>
              <span className="block">Aurelis.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="pb-2"
            >
              <Link
                href="/calendar"
                className="inline-flex items-center gap-1.5 text-[#122718] text-sm sm:text-base font-semibold underline underline-offset-4 hover:opacity-75 transition-opacity group"
              >
                <span>View Club Calendar</span>
                <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Events List */}
        <div className="w-full border-t border-b border-[#DED9CB]/80 divide-y divide-[#DED9CB]/80">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 + index * 0.1 }}
            >
              <Link
                href={event.href || '/calendar'}
                className="group flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8 py-7 sm:py-9 lg:py-10 px-2 sm:px-4 rounded-2xl hover:bg-black/[0.02] transition-colors cursor-pointer"
              >
                {/* Left Side: Date + Event Title */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-12 lg:gap-24 flex-1">
                  
                  {/* Date Badge */}
                  <div className="flex items-center gap-2.5 min-w-[120px] sm:min-w-[140px]">
                    <span className="w-2 h-2 rounded-full bg-[#a7d620] shrink-0" />
                    <span className="text-xs sm:text-[13px] font-bold tracking-[0.15em] text-[#122718] uppercase">
                      {event.date}
                    </span>
                  </div>

                  {/* Event Title */}
                  <h3 className="font-sans text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#122718] tracking-tight group-hover:text-[#0b1e13] transition-colors">
                    {event.title}
                  </h3>
                </div>

                {/* Right Side: Event Details + Circular Arrow Button */}
                <div className="flex items-center justify-between md:justify-end gap-6 sm:gap-10 lg:gap-14 pt-2 md:pt-0">
                  <span className="text-xs sm:text-sm md:text-[15px] text-[#55695B] font-medium whitespace-nowrap">
                    {event.details}
                  </span>

                  {/* Circular Arrow Button */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#485E4E]/40 flex items-center justify-center text-[#122718] group-hover:bg-[#122718] group-hover:text-white group-hover:border-[#122718] transition-all duration-300 shadow-sm shrink-0">
                    <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </div>
                </div>

              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

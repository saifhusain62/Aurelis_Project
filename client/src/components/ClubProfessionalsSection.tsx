'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Professional {
  id: string;
  name: string;
  role: string;
  image: string;
  imagePosition?: string;
}

const professionals: Professional[] = [
  {
    id: 'james-calloway',
    name: 'James Calloway',
    role: 'Head Golf Professional',
    image: '/player1.jpg',
    imagePosition: 'object-top',
  },
  {
    id: 'sofia-bennett',
    name: 'Sofia Bennett',
    role: 'PGA Teaching Professional',
    image: '/player2.jpg',
    imagePosition: 'object-top',
  },
  {
    id: 'marcus-reyes',
    name: 'Marcus Reyes',
    role: 'Assistant Golf Professional',
    image: '/player3.jpg',
    imagePosition: 'object-top',
  },
  {
    id: 'charlotte-hayes',
    name: 'Charlotte Hayes',
    role: 'Junior Programs Coach',
    image: '/player4.jpg',
    imagePosition: 'object-top',
  },
];

export default function ClubProfessionalsSection() {
  return (
    <section className="w-full bg-[#F6F4ED] text-[#122718] py-20 sm:py-28 lg:py-32 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-[1650px] mx-auto">

        {/* Header Block */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
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
              CLUB PROFESSIONALS
            </span>
          </motion.div>

          {/* Title & View All Team Link */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-sans text-4xl sm:text-5xl lg:text-[58px] font-semibold tracking-tight leading-[1.08] text-[#122718]"
            >
              Meet our professionals.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="pb-2"
            >
              <Link
                href="/professionals"
                className="text-[#122718] text-sm sm:text-base font-semibold underline underline-offset-4 hover:opacity-75 transition-opacity"
              >
                View All Team
              </Link>
            </motion.div>
          </div>
        </div>

        {/* 4 Professionals Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-8 items-start">
          {professionals.map((pro, index) => (
            <motion.div
              key={pro.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 + index * 0.1 }}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/5] sm:aspect-[3.6/4.8] lg:aspect-[4/5] rounded-[24px] sm:rounded-[32px] overflow-hidden bg-stone-200 shadow-sm">
                <Image
                  src={pro.image}
                  alt={pro.name}
                  fill
                  unoptimized
                  className={`object-cover ${pro.imagePosition || 'object-top'} group-hover:scale-105 transition-transform duration-700 ease-out`}
                />
              </div>

              {/* Name & Role */}
              <div className="mt-4 sm:mt-5 text-center flex flex-col items-center">
                <h3 className="text-xl sm:text-[22px] font-bold text-[#122718] tracking-tight">
                  {pro.name}
                </h3>
                <p className="text-[#55695B] text-xs sm:text-sm font-medium mt-1 leading-snug">
                  {pro.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

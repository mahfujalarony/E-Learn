"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Calendar, Mail, BarChart2 } from "lucide-react";
import Navbar from "./ui/Navbar";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen w-full bg-[#49bbbd] overflow-hidden px-4 pt-6 sm:px-8 lg:px-16">

      {/* 1. Navbar */}
      {/* <Navbar backgroundColor="bg-[#49bbbd]" /> */}

      {/* 2. Hero Content */}
      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-12 pb-32 lg:mt-20 lg:flex-row lg:pb-0">

        {/* Left Content */}
        <div className="w-full text-center lg:w-1/2 lg:text-left z-10">
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[54px]">
            <span className="text-[#f39c12]">Studying</span> Online is now <br className="hidden sm:inline" />
            much easier
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/90 mx-auto lg:mx-0">
            TOTC is an interesting platform that will teach you in more an interactive way
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
            <button className="rounded-full bg-white/30 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/40 transition">
              Join for free
            </button>
            <button className="flex items-center gap-3 text-sm font-medium text-gray-800 group">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#49bbbd] shadow-md transition group-hover:scale-105">
                <Play className="h-5 w-5 fill-current ml-0.5" />
              </span>
              <span className="text-white lg:text-gray-800">Watch how it works</span>
            </button>
          </div>
        </div>

        {/* Right Content (Image & Floating Cards) */}
        <div className="relative flex w-full justify-center lg:w-1/2 lg:justify-end">
          <div className="relative h-[450px] w-[350px] sm:h-[550px] sm:w-[420px]">
            {/* Main Student Image */}
            <Image
              src="/assets/student-hero.png" // public ফোল্ডারে ব্যাকগ্রাউন্ড ছাড়া পিএনজি ইমেজটি রাখুন
              alt="Student"
              fill
              className="object-contain object-bottom select-none"
              priority
            />

            {/* Card 1: 250k Assisted Student */}
            <div className="absolute top-28 -left-12 flex items-center gap-3 rounded-2xl bg-white/80 p-3 shadow-lg backdrop-blur-md border border-white/20 sm:-left-20">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#55c3c5] text-white">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-800">250k</h4>
                <p className="text-[10px] text-gray-500">Assisted Student</p>
              </div>
            </div>

            {/* Card 2: User Experience Class */}
            <div className="absolute bottom-16 -left-6 flex flex-col gap-3 rounded-2xl bg-white/80 p-4 shadow-lg backdrop-blur-md border border-white/20 sm:-left-10 w-[210px]">
              <div className="flex items-center gap-2.5">
                <div className="relative h-9 w-9 overflow-hidden rounded-full">
                  <Image src="/assets/Ellipse.svg" alt="Instructor" fill className="object-cover" />
                  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-white" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-800">User Experience Class</h4>
                  <p className="text-[10px] text-gray-400">Today at 12.00 PM</p>
                </div>
              </div>
              <button className="w-full rounded-full bg-[#e8597c] py-2 text-xs font-semibold text-white hover:bg-[#d44b6c] transition">
                Join Now
              </button>
            </div>

            {/* Card 3: Congratulations */}
            <div className="absolute bottom-32 -right-8 flex items-center gap-3 rounded-2xl bg-white/80 p-3.5 shadow-lg backdrop-blur-md border border-white/20 sm:-right-12">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f88c3d] text-white">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-800">Congratulations</h4>
                <p className="text-[10px] text-gray-500">Your admission completed</p>
              </div>
            </div>

            {/* Floating Pink Analytics Icon */}
            <div className="absolute top-24 right-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#ea4c89] text-white shadow-lg shadow-pink-500/30">
              <BarChart2 className="h-5 w-5" />
            </div>

          </div>
        </div>

      </div>

      {/* 3. Bottom White Wave Shape */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-[60px] sm:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200" preserveAspectRatio="none">
          <path d="M0,0V1200H1200V0C924.3,678.88,435.53,745.2,0,0Z" className="fill-white"></path>
        </svg>
      </div>

    </div>
  );
}
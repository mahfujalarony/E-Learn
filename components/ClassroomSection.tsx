"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

export default function ClassroomSection() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-6xl flex flex-col items-center justify-between gap-12 lg:flex-row">
        
        {/* Left Side: Content */}
        <div className="w-full text-center lg:w-1/2 lg:text-left z-10">
          <div className="relative inline-block lg:block">
            {/* Top Left Floating Green Dot */}
            <span className="absolute -top-3 -left-4 h-6 w-6 rounded-full bg-[#14ccb6] opacity-80 lg:-left-6" />
            
            <h2 className="relative text-2xl font-bold leading-tight text-[#2f327d] sm:text-3xl lg:text-[36px] z-10">
              Everything you can do in a physical <br className="hidden sm:inline" />
              classroom, <span className="text-[#14ccb6]">you can do with TOTC</span>
            </h2>
          </div>

          <div className="relative mt-6 max-w-xl mx-auto lg:mx-0">
            {/* Right Side Small Floating Green Dot */}
            <span className="absolute -right-4 top-1/2 h-3.5 w-3.5 rounded-full bg-[#14ccb6] lg:-right-6" />
            
            <p className="text-sm leading-relaxed text-gray-400">
              TOTC's school management software helps traditional and online schools manage 
              scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.
            </p>
          </div>
          
          {/* Learn More Link */}
          <div className="mt-8">
            <Link 
              href="#" 
              className="text-sm font-medium text-gray-500 underline underline-offset-4 hover:text-[#14ccb6] transition-colors"
            >
              Learn more
            </Link>
          </div>
        </div>

        {/* Right Side: Image Grid with Custom Accent Shapes & Play Button */}
        <div className="relative flex w-full justify-center lg:w-1/2 lg:justify-end">
          <div className="relative h-[260px] w-[340px] sm:h-[340px] sm:w-[480px]">
            
            {/* 1. Top-Left Cyan Accent Block */}
            <div className="absolute -top-4 -left-4 h-24 w-24 rounded-tl-[2rem] border-t-8 border-l-8 border-[#29b2e1] -z-10" />

            {/* 2. Bottom-Right Green Accent Block */}
            <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-br-[2rem] bg-[#14ccb6] -z-10" />

            {/* 3. Main Classroom Preview Image */}
            <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] bg-gray-100 shadow-md">
              <Image
                src="/assets/section.jpg" // public ফোল্ডারে আপনার ইমেজটি রাখুন
                alt="Physical Classroom Experience"
                fill
                className="object-cover"
                priority
              />
              
              {/* 4. Center Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                <button
                  type="button"
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#29b2e1] shadow-lg transition-transform duration-300 hover:scale-115"
                >
                  <Play className="h-6 w-6 fill-current ml-1" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
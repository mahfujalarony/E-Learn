"use client";

import React from "react";
import Image from "next/image";
import { Grid, Layers, Users, Phone } from "lucide-react";

export default function OurFeatures() {
  const featureList = [
    {
      icon: <Grid className="h-5 w-5 text-[#2f327d]" />,
      text: "Teachers don't get lost in the grid view and have a dedicated Podium space.",
    },
    {
      icon: <Layers className="h-5 w-5 text-[#f88c3d]" />,
      text: "TA's and presenters can be moved to the front of the class.",
    },
    {
      icon: <Users className="h-5 w-5 text-[#6558f5]" />,
      text: "Teachers can easily see all students and class data at one time.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        
        {/* Top Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#2f327d] sm:text-4xl">
            Our <span className="text-[#14ccb6]">Features</span>
          </h2>
          <p className="mt-4 text-sm text-gray-400">
            This very extraordinary feature, can make learning activities more efficient
          </p>
        </div>

        {/* Content Body */}
        <div className="flex flex-col items-center justify-between gap-16 lg:flex-row">
          
          {/* Left Side: Classroom UI Mockup */}
          <div className="relative w-full max-w-xl lg:w-1/2">
            
            {/* Background Decorative Shapes */}
            <div className="absolute -top-10 left-6 h-24 w-24 rounded-full bg-[#14ccb6] -z-10" />
            <div className="absolute -top-4 left-24 h-5 w-5 rounded-full bg-[#29b2e1] -z-10" />
            <div className="absolute -bottom-8 right-24 h-24 w-24 rounded-full bg-[#6558f5] -z-10" />
            <div className="absolute bottom-4 left-1/2 h-4 w-4 rounded-full bg-[#e8597c] -z-10" />

            {/* Main Window Browser Frame */}
            <div className="relative w-full rounded-3xl bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100/80">
              
              {/* Browser Dots */}
              <div className="flex gap-1.5 mb-6">
                <span className="h-2.5 w-2.5 rounded-full bg-[#e8597c]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#f88c3d]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#14ccb6]" />
              </div>

              {/* Grid of Users Inside Mockup */}
              <div className="grid grid-cols-3 gap-3">
                
                {/* 1. Main Instructor Card (Spans 2 columns or rows dynamically depending on layout) */}
                <div className="relative col-span-2 row-span-2 h-[200px] rounded-2xl overflow-hidden bg-gray-100 shadow-sm">
                  <Image src="/assets/instructure.jpg" alt="Instructor" fill className="object-cover" />
                  <span className="absolute bottom-3 left-3 rounded bg-black/40 px-2 py-0.5 text-[10px] text-white backdrop-blur-sm">
                    Instructor: Every Howard
                  </span>
                </div>

                {/* 2. Student: Tamara Clarke */}
                <div className="relative h-[94px] rounded-2xl overflow-hidden bg-gray-100 shadow-sm">
                  <Image src="/assets/tamira.png" alt="Tamara" fill className="object-cover" />
                  <span className="absolute bottom-2 left-2 rounded bg-black/40 px-1.5 py-0.5 text-[8px] text-white">
                    Tamara Clarke
                  </span>
                </div>

                {/* 3. Student: Adam Levin */}
                <div className="relative h-[94px] rounded-2xl overflow-hidden bg-gray-100 shadow-sm">
                  <Image src="/assets/adam.png" alt="Adam" fill className="object-cover" />
                  <span className="absolute bottom-2 left-2 rounded bg-black/40 px-1.5 py-0.5 text-[8px] text-white">
                    Adam Levin
                  </span>
                </div>

                {/* 4. Student: Humbert Holland */}
                <div className="relative h-[94px] rounded-2xl overflow-hidden bg-gray-100 shadow-sm">
                  <Image src="/assets/humbert.png" alt="Humbert" fill className="object-cover" />
                  <span className="absolute bottom-2 left-2 rounded bg-black/40 px-1.5 py-0.5 text-[8px] text-white">
                    Humbert Holland
                  </span>
                </div>

                {/* 5. Student: Patricia Mendoza (Overlapping Slightly at the bottom right) */}
                <div className="relative h-[110px] rounded-2xl overflow-hidden bg-gray-100 shadow-lg border-2 border-white translate-y-4 -translate-x-2 z-10">
                  <Image src="/assets/patricia.png" alt="Patricia" fill className="object-cover" />
                  <span className="absolute bottom-2 left-2 rounded bg-black/40 px-1.5 py-0.5 text-[8px] text-white">
                    Patricia Mendoza
                  </span>
                </div>

              </div>

              {/* Action Buttons Overlay at Bottom */}
              <div className="mt-8 flex gap-3">
                <button className="rounded-full bg-[#4f70f6] px-6 py-2.5 text-xs font-semibold text-white shadow-md shadow-blue-500/20 hover:bg-blue-600 transition">
                  Present
                </button>
                <button className="flex items-center gap-1.5 rounded-full bg-[#e8597c] px-6 py-2.5 text-xs font-semibold text-white shadow-md shadow-pink-500/20 hover:bg-pink-600 transition">
                  <Phone className="h-3.5 w-3.5 fill-current" /> Call
                </button>
              </div>

            </div>
          </div>

          {/* Right Side: Feature Details */}
          <div className="w-full lg:w-1/2 lg:pl-8">
            <h3 className="text-2xl font-bold leading-tight text-[#2f327d] sm:text-3xl">
              A <span className="text-[#14ccb6]">user interface</span> designed <br />
              for the classroom
            </h3>

            {/* List Items */}
            <div className="mt-10 space-y-6">
              {featureList.map((item, index) => (
                <div key={index} className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-50">
                    {item.icon}
                  </div>
                  <p className="pt-2 text-sm leading-relaxed text-gray-500">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
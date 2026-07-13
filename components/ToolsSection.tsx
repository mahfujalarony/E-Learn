"use client";

import React from "react";
import Image from "next/image";

export default function ToolsSection() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-6xl flex flex-col items-center justify-between gap-12 lg:flex-row">
        
        {/* Left Side: Content */}
        <div className="w-full text-center lg:w-1/2 lg:text-left z-10">
          <h2 className="text-3xl font-bold leading-tight text-[#2f327d] sm:text-4xl lg:text-4xl">
            <span className="text-[#14ccb6]">Tools</span> For Teachers <br />
            And Learners
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-gray-400 mx-auto lg:mx-0">
            Class has a dynamic set of teaching tools built to be deployed and used during class. 
            Teachers can handout assignments in real-time for students to complete and submit.
          </p>
        </div>

        {/* Right Side: Image with Decorative Floating Elements */}
        <div className="relative flex w-full justify-center lg:w-1/2 lg:justify-end">
          <div className="relative h-[400px] w-[320px] sm:h-[480px] sm:w-[380px]">
            
            {/* 1. Background Red/Coral Circle */}
            <div className="absolute top-12 left-12 h-64 w-64 rounded-full bg-[#f88c3d]/20 -z-10 sm:h-72 sm:w-72" />

            {/* 2. Main Student Image */}
            <Image
              src="/assets/tools.png" // public ফোল্ডারে আপনার পিএনজি ইমেজটি রাখুন
              alt="Teacher and Learner Tools"
              fill
              className="object-contain object-bottom select-none z-10"
              priority
            />

            {/* 3. Floating Icon Left (Grid/Layout Icon) */}
            <div className="absolute top-20 -left-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white p-2.5 shadow-[0_8px_20px_rgba(0,0,0,0.06)] z-20 sm:-left-10">
              <div className="grid grid-cols-2 gap-1 w-full h-full">
                <div className="bg-[#4f70f6] rounded-sm" />
                <div className="bg-[#f88c3d] rounded-sm" />
                <div className="bg-[#f88c3d] rounded-sm" />
                <div className="bg-[#4f70f6] rounded-sm" />
              </div>
            </div>

            {/* 4. Floating Icon Right (Users/Classroom Icon) */}
            <div className="absolute top-36 -right-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white p-3 shadow-[0_8px_20px_rgba(0,0,0,0.06)] z-20 sm:-right-10">
              <div className="flex flex-col items-center justify-center gap-1 w-full h-full border border-dashed border-[#4f70f6] rounded-md text-[#4f70f6]">
                <span className="text-[10px] font-bold">:::</span>
              </div>
            </div>

            {/* 5. Decorative Dots (Top Green & Bottom Purple/Orange) */}
            <span className="absolute top-4 right-12 h-3 w-3 rounded-full bg-[#14ccb6]" />
            <span className="absolute bottom-24 -left-10 h-4 w-4 rounded-full bg-[#f88c3d]" />
            <span className="absolute bottom-12 -right-6 h-3.5 w-3.5 rounded-full bg-[#6558f5]" />

            {/* Background Light Dot Grid Effect (Optional CSS simulation) */}
            <div className="absolute inset-0 opacity-20 -z-20 bg-[radial-gradient(#9ca3af_1.5px,transparent_1.5px)] [background-size:16px_16px]" />

          </div>
        </div>

      </div>
    </section>
  );
}
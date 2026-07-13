"use client";

import React from "react";
import Image from "next/image";
import { Check, X, Send } from "lucide-react";

export default function AssessmentsSection() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-6xl flex flex-col-reverse items-center justify-between gap-16 lg:flex-row">
        
        {/* Left Side: Interactive Quiz Card Mockup */}
        <div className="relative flex w-full justify-center lg:w-1/2 lg:justify-start">
          <div className="relative h-[380px] w-[300px] sm:h-[420px] sm:w-[340px]">
            
            {/* 1. Large Background Blue Circle */}
            <div className="absolute -top-6 -left-6 h-28 w-28 rounded-full bg-[#6558f5] -z-10 opacity-90" />

            {/* 2. Main White Quiz Box */}
            <div className="h-full w-full rounded-3xl bg-white p-6 shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-gray-50 flex flex-col justify-between">
              <div>
                {/* Question Badge */}
                <span className="inline-block rounded-full bg-[#6558f5]/10 px-4 py-1.5 text-xs font-semibold text-[#6558f5]">
                  Question 1
                </span>
                
                {/* Question Text */}
                <h3 className="mt-5 text-lg font-bold text-[#2f327d] leading-snug">
                  True or false? This play takes place in Italy
                </h3>
              </div>

              {/* Inside Image (Italy/Venice Landscape) */}
              <div className="relative mt-4 h-[180px] w-full overflow-hidden rounded-2xl shadow-sm">
                <Image
                  src="/italy-quiz.jpg" // public ফোল্ডারে কুইজের ইমেজটি রাখুন
                  alt="Quiz Location"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* 3. Floating Success Badge (Bottom Right Overlay) */}
            <div className="absolute -bottom-4 -right-6 flex items-center gap-3 rounded-2xl bg-white p-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-gray-50 z-20 w-[200px] sm:-right-10">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#14ccb6]/10 text-[#14ccb6]">
                <Send className="h-4 w-4 fill-current rotate-45" />
              </div>
              <div>
                <p className="text-[11px] font-medium text-[#14ccb6] leading-tight">
                  Your answer was sent successfully
                </p>
              </div>
            </div>

            {/* 4. Floating Cross Button (Top Right) */}
            <div className="absolute -top-4 right-12 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#e8597c] shadow-md border border-gray-50 z-20">
              <X className="h-4 w-4 stroke-[3]" />
            </div>

            {/* 5. Floating Check Button (Top Right Outer) */}
            <div className="absolute top-6 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#14ccb6] shadow-md border border-gray-50 z-20">
              <Check className="h-4 w-4 stroke-[3]" />
            </div>

            {/* 6. Tiny Decorative Colored Dots */}
            <span className="absolute top-12 -left-12 h-3.5 w-3.5 rounded-full bg-[#f88c3d]" />
            <span className="absolute top-1/2 -right-10 h-3 w-3 rounded-full bg-[#e8597c]" />
            <span className="absolute bottom-6 -left-6 h-3.5 w-3.5 rounded-full bg-[#14ccb6]" />

          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full text-center lg:w-1/2 lg:text-left">
          <h2 className="text-3xl font-bold leading-tight text-[#2f327d] sm:text-4xl lg:text-4xl">
            Assessments, <br />
            <span className="text-[#14ccb6]">Quizzes</span>, Tests
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-gray-400 mx-auto lg:mx-0">
            Easily launch live assignments, quizzes, and tests. Student results are automatically 
            entered in the online gradebook.
          </p>
        </div>

      </div>
    </section>
  );
}
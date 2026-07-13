"use client";

import React from "react";
import Image from "next/image";

export default function WhatIsTotc() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        
        {/* Header Content */}
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl text-[#2f327d]">
            What is <span className="text-[#14ccb6]">TOTC?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-sm leading-relaxed text-gray-500">
            TOTC is a platform that allows educators to create online classes whereby they can
            store the course materials online; manage assignments, quizzes and exams; monitor
            due dates; grade results and provide students with feedback all in one place.
          </p>
        </div>

        {/* Action Cards Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          
          {/* Card 1: FOR INSTRUCTORS */}
          <div className="relative group overflow-hidden rounded-3xl h-[340px] w-full shadow-md">
            {/* Background Image */}
            <Image
              src="/assets/wh1.jpg" // public ফোল্ডারে এই ইমেজটি রাখুন
              alt="For Instructors"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Dark Overlay with Blur Effect */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] flex flex-col items-center justify-center p-6 text-center">
              <h3 className="text-2xl font-bold tracking-wider text-white uppercase">
                FOR INSTRUCTORS
              </h3>
              <button 
                type="button"
                className="mt-6 rounded-full border border-white bg-transparent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white hover:text-black"
              >
                Start a class today
              </button>
            </div>
          </div>

          {/* Card 2: FOR STUDENTS */}
          <div className="relative group overflow-hidden rounded-3xl h-[340px] w-full shadow-md">
            {/* Background Image */}
            <Image
              src="/assets/wh2.png" // public ফোল্ডারে এই ইমেজটি রাখুন
              alt="For Students"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-6 text-center">
              <h3 className="text-2xl font-bold tracking-wider text-white uppercase">
                FOR STUDENTS
              </h3>
              <button 
                type="button"
                className="mt-6 rounded-full bg-[#29b2e1] px-8 py-3.5 text-sm font-medium text-white shadow-md transition-all hover:bg-[#229ec9]"
              >
                Enter access code
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
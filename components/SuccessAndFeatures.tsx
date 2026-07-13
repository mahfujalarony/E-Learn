"use client";

import React from "react";
import { FileText, Calendar, Users } from "lucide-react";

export default function SuccessAndFeatures() {
  // Success Stats Data
  const stats = [
    { value: "15K+", label: "Students" },
    { value: "75%", label: "Total success" },
    { value: "35", label: "Main questions" },
    { value: "26", label: "Chief experts" },
    { value: "16", label: "Years of experience" },
  ];

  // Features Data
  const features = [
    {
      title: "Online Billing, Invoicing, & Contracts",
      description: "Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts",
      icon: <FileText className="h-6 w-6 text-white" />,
      iconBg: "bg-[#4f70f6]", // Blue icon background
    },
    {
      title: "Easy Scheduling & Attendance Tracking",
      description: "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",
      icon: <Calendar className="h-6 w-6 text-white" />,
      iconBg: "bg-[#14ccb6]", // Teal/Green icon background
    },
    {
      title: "Customer Tracking",
      description: "Automate and track emails to individuals or groups. Skilline's built-in system helps organize your organization",
      icon: <Users className="h-6 w-6 text-white" />,
      iconBg: "bg-[#29b2e1]", // Sky Blue icon background
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* ================= 1. OUR SUCCESS SECTION ================= */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Success
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xs sm:text-sm leading-relaxed text-gray-500">
            Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec
            nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-5 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-4xl font-light text-[#29b2e1] sm:text-5xl md:text-6xl tracking-tight">
                {stat.value}
              </span>
              <span className="mt-2 text-sm font-medium text-gray-700 sm:text-base">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* ================= 2. FEATURES SECTION ================= */}
        <div className="mt-32 text-center">
          <h3 className="text-2xl font-bold sm:text-3xl text-[#2f327d]">
            All-In-One <span className="text-[#14ccb6]">Cloud Software.</span>
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-500">
            TOTC is one powerful online software suite that combines all the tools
            needed to run a successful school or office.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-24 grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center rounded-2xl bg-white p-8 pt-16 text-center shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-50 transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
            >
              {/* Floating Top Icon */}
              <div className={`absolute -top-8 flex h-16 w-16 items-center justify-center rounded-full shadow-md ${feature.iconBg}`}>
                {feature.icon}
              </div>

              {/* Title */}
              <h4 className="text-lg font-bold text-[#2f327d] leading-snug min-h-[56px] flex items-center justify-center px-2">
                {feature.title}
              </h4>

              {/* Description */}
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white p-4 sm:p-6 lg:p-8">
      <div className="flex w-full max-w-6xl flex-col items-center justify-between gap-8 lg:flex-row">
        
        {/* Left Side: Banner Image (Hidden on Mobile) */}
        <div className="relative hidden w-full overflow-hidden rounded-[2.5rem] lg:block lg:w-1/2">
          <div className="relative h-[500px] w-full">
            <Image
              src="/assets/login.jpg" // আপনার public ফোল্ডারে ইমেজটি রাখুন
              alt="Classroom"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay Text */}
            <div className="absolute bottom-12 left-10 right-10 text-white">
              <h2 className="text-3xl font-bold leading-tight">
                Lorem Ipsum is simply
              </h2>
              <p className="mt-2 text-sm opacity-90">
                Lorem Ipsum is simply
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Form (Visible on both Mobile & Desktop) */}
        <div className="w-full px-4 sm:px-8 md:max-w-md lg:w-1/2 lg:px-12">
          <div className="flex flex-col items-center">
            
            {/* Title */}
            <h1 className="text-center text-xl font-medium text-gray-800">
              Welcome to lorem..!
            </h1>

            {/* Toggle Switch (Login / Register) */}
            <div className="mt-6 flex w-full max-w-[280px] rounded-full bg-[#99d7d5] p-1.5">
              <button
                type="button"
                onClick={() => setActiveTab("login")}
                className={`w-1/2 rounded-full py-2 text-sm font-medium transition-all ${
                  activeTab === "login"
                    ? "bg-[#45b6b4] text-white shadow-sm"
                    : "text-white/80 hover:text-white"
                }`}
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab("register");
                  router.push("/register");
                }}
                className={`w-1/2 rounded-full py-2 text-sm font-medium transition-all ${
                  activeTab === "register"
                    ? "bg-[#45b6b4] text-white shadow-sm"
                    : "text-white/80 hover:text-white"
                }`}
              >
                Register
              </button>
            </div>

            {/* Description */}
            <p className="mt-6 text-center text-sm leading-relaxed text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>

            {/* Form */}
            <form className="mt-8 w-full space-y-5" onSubmit={(e) => e.preventDefault()}>
              
              {/* Username Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-800">
                  User name
                </label>
                <input
                  type="text"
                  placeholder="Enter your User name"
                  className="w-full rounded-full border border-[#99d7d5] px-6 py-3.5 text-sm text-gray-700 outline-none placeholder:text-gray-300 focus:border-[#45b6b4] focus:ring-1 focus:ring-[#45b6b4]"
                />
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-800">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your Password"
                    className="w-full rounded-full border border-[#99d7d5] px-6 py-3.5 pr-12 text-sm text-gray-700 outline-none placeholder:text-gray-300 focus:border-[#45b6b4] focus:ring-1 focus:ring-[#45b6b4]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-700 hover:text-gray-900"
                  >
                    {showPassword ? (
                      <Eye className="h-5 w-5" />
                    ) : (
                      <EyeOff className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember me & Forgot Password */}
              <div className="flex items-center justify-between pt-1 text-xs sm:text-sm">
                <label className="flex items-center gap-2 cursor-pointer text-gray-600 select-none">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-[#45b6b4] focus:ring-[#45b6b4]"
                  />
                  Rememebr me
                </label>
                <Link
                  href="/forgot-password"
                  className="text-gray-600 hover:underline"
                >
                  Forgot Password ?
                </Link>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto sm:min-w-[160px] rounded-full bg-[#45b6b4] px-8 py-3 font-medium text-white shadow-md hover:bg-[#399a98] transition-all"
                >
                  Login
                </button>
              </div>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

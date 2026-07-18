"use client";

import React from 'react';

export default function Footer() {
    return (
        <footer className="w-full bg-[#252641] text-white py-12 px-4 md:px-8 flex flex-col items-center justify-center">
            <div className="max-w-4xl w-full flex flex-col items-center text-center space-y-8">

                {/* Logo and Tagline Section */}
                <div className="flex items-center justify-center gap-6">
                    {/* TOTC Logo Component */}
                    <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 border-2 border-cyan-400 rotate-45 flex items-center justify-center rounded-lg">
                            <span className="text-white font-black text-xs tracking-tighter -rotate-45">
                                TOTC
                            </span>
                        </div>
                    </div>

                    {/* Vertical Divider */}
                    <div className="w-[1px] h-10 bg-gray-500 opacity-60"></div>

                    {/* Tagline */}
                    <div className="text-left font-medium text-sm tracking-wide text-slate-200">
                        Virtual Class <br /> for Zoom
                    </div>
                </div>

                {/* Newsletter Subscription Section */}
                <div className="w-full max-w-xl flex flex-col items-center space-y-4">
                    <h3 className="text-lg md:text-xl font-medium tracking-wide text-slate-300">
                        Subscribe to get our Newsletter
                    </h3>

                    {/* Input Form */}
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-3"
                    >
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full sm:max-w-xs bg-transparent border border-gray-500/60 rounded-full px-6 py-2.5 text-sm text-white placeholder-gray-500 outline-none focus:border-cyan-400/60 transition"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full sm:w-auto bg-[#49BBBD] hover:bg-[#3ca8aa] text-white font-medium text-sm px-8 py-3 rounded-full shadow-md transition-all active:scale-98"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Footer Links & Copyright */}
                <div className="w-full pt-8 flex flex-col items-center space-y-3">
                    {/* Links */}
                    <div className="flex items-center justify-center gap-4 text-xs md:text-sm text-slate-400 font-medium">
                        <a href="#" className="hover:text-white transition">Careers</a>
                        <span className="text-gray-600">|</span>
                        <a href="#" className="hover:text-white transition">Privacy Policy</a>
                        <span className="text-gray-600">|</span>
                        <a href="#" className="hover:text-white transition">Terms & Conditions</a>
                    </div>

                    {/* Copyright Text */}
                    <p className="text-xs text-slate-500 tracking-wide font-normal">
                        © 2021 Class Technologies Inc.
                    </p>
                </div>

            </div>
        </footer>
    );
}
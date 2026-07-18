'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface NavbarProps {
    // যদি স্ক্রল করলে কালার চেঞ্জ করতে চাও, তবে হোম পেজে এটি true পাঠাবে
    dynamicOnScroll?: boolean;
}

export default function Navbar({ dynamicOnScroll = false }: NavbarProps) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        // যদি dynamicOnScroll প্রপ্স true না থাকে, তবে স্ক্রল লিসেনার অ্যাড হবে না
        if (!dynamicOnScroll) return;

        const handleScroll = () => {
            if (window.scrollY > 600) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [dynamicOnScroll]);

    // ডাইনামিক থিম লজিক: 
    // dynamicOnScroll যদি true হয় এবং ইউজার উপরে থাকে, তবেই ডার্ক থিম (সিয়ান ব্যাকগ্রাউন্ড) হবে।
    // অন্য সব ক্ষেত্রে স্বাভাবিক হোয়াইট থিম।
    const isDarkTheme = dynamicOnScroll && !isScrolled;

    const backgroundColor = isDarkTheme
        ? 'bg-[#49bbbd]'
        : 'bg-white shadow-sm border-b border-gray-100';

    const textColor = isDarkTheme ? 'text-white' : 'text-slate-700';
    const navLinkColor = isDarkTheme ? 'text-white/80 hover:text-white' : 'text-gray-500 hover:text-slate-900';
    const logoBorderColor = isDarkTheme ? 'border-white' : 'border-cyan-400';
    const logoTextColor = isDarkTheme ? 'text-white' : 'text-slate-800';

    return (
        <header className={`w-full ${backgroundColor} ${textColor} sticky top-0 z-50 transition-all duration-300`}>
            <div className="max-w-6xl mx-auto h-20 flex items-center justify-between px-4 md:px-8">

                {/* Left Side: Logo */}
                <Link href="/" className="flex items-center gap-3 cursor-pointer">
                    <div className={`relative w-9 h-9 border-2 ${logoBorderColor} rotate-45 flex items-center justify-center rounded-lg transition-colors`}>
                        <span className={`${logoTextColor} font-black text-[11px] tracking-tighter -rotate-45 transition-colors`}>
                            TOTC
                        </span>
                    </div>
                </Link>

                {/* Center: Navigation Links */}
                <nav className={`hidden md:flex items-center gap-8 lg:gap-12 font-medium text-sm lg:text-base ${navLinkColor} transition-colors`}>
                    <Link href="/" className="transition">Home</Link>
                    <Link href="/courses" className="transition">Courses</Link>
                    <Link href="/careers" className="transition">Careers</Link>
                    <Link href="/blog" className="transition">Blog</Link>
                    <Link href="/about" className="transition">About Us</Link>
                </nav>

                {/* Right Side: User Profile */}
                <div className="hidden md:relative md:flex items-center">
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center gap-3 hover:opacity-90 transition focus:outline-none"
                    >
                        <div className={`relative w-10 h-10 rounded-full overflow-hidden bg-slate-100 border ${!isDarkTheme ? 'border-gray-200' : 'border-white/30'}`}>
                            <Image src="/assets/user.png" alt="Lina Profile" fill className="object-cover" />
                        </div>
                        <span className={`font-semibold text-sm lg:text-base flex items-center gap-1 ${!isDarkTheme ? 'text-slate-700' : 'text-white'}`}>
                            Lina
                            <svg className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''} ${!isDarkTheme ? 'text-slate-500' : 'text-white/80'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                            </svg>
                        </span>
                    </button>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                        <div className="absolute right-0 top-12 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50 text-slate-700">
                            <Link href="/profile" className="block px-4 py-2 text-sm hover:bg-slate-50" onClick={() => setIsDropdownOpen(false)}>My Profile</Link>
                            <Link href="/dashboard" className="block px-4 py-2 text-sm hover:bg-slate-50" onClick={() => setIsDropdownOpen(false)}>Dashboard</Link>
                            <hr className="my-1 border-gray-100" />
                            <button className="w-full text-left block px-4 py-2 text-sm text-rose-600 hover:bg-rose-50 font-medium">Logout</button>
                        </div>
                    )}
                </div>

                {/* Mobile Hamburger Menu Button */}
                <div className="flex md:hidden items-center">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`p-2 focus:outline-none ${!isDarkTheme ? 'text-slate-700' : 'text-white'}`}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

            </div>

            {/* Mobile Menu Panel */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 py-4 px-6 space-y-4 shadow-inner text-slate-700">
                    <nav className="flex flex-col gap-4 text-gray-500 font-medium text-sm">
                        <Link href="/" className="hover:text-slate-900 transition" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                        <Link href="/courses" className="hover:text-slate-900 transition" onClick={() => setIsMobileMenuOpen(false)}>Courses</Link>
                        <Link href="/careers" className="hover:text-slate-900 transition" onClick={() => setIsMobileMenuOpen(false)}>Careers</Link>
                        <Link href="/blog" className="hover:text-slate-900 transition" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
                        <Link href="/about" className="hover:text-slate-900 transition" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
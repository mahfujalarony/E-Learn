import React from 'react';
import Image from 'next/image';

export default function FeaturesPage() {
    return (
        <div className="w-full bg-white space-y-24 md:space-y-36 py-16 overflow-hidden">

            {/* ---------------- SECTION 1: Assessments, Quizzes, Tests ---------------- */}
            <section className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                {/* Left Side: Interactive Card Visuals */}
                <div className="relative flex justify-center items-center h-[450px] w-full max-w-[500px] mx-auto order-1 lg:order-1">
                    {/* Decorative Shapes */}
                    <div className="absolute top-8 left-4 w-16 h-16 bg-blue-600 rounded-full opacity-80 -z-10 blur-[2px]" />
                    <div className="absolute top-6 left-28 w-4 h-4 bg-orange-400 rounded-full opacity-70" />
                    <div className="absolute bottom-12 left-6 w-5 h-5 bg-emerald-400 rounded-full" />
                    <div className="absolute right-12 top-1/2 w-3 h-3 bg-pink-400 rounded-full" />

                    {/* Main Quiz Card */}
                    <div className="relative bg-white rounded-3xl p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-50/50 w-[85%] z-10">
                        <div className="inline-block bg-indigo-100 text-indigo-600 font-medium text-xs px-4 py-1.5 rounded-full mb-4">
                            Question 1
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 leading-snug mb-4">
                            True or false? This play takes place in Italy
                        </h3>
                        <div className="relative w-full h-44 rounded-2xl overflow-hidden shadow-inner">
                            <Image src="/assets/italy-venice.png" alt="Venice" fill className="object-cover" priority />
                        </div>
                    </div>

                    {/* Floating Success Alert */}
                    <div className="absolute bottom-6 right-0 bg-white rounded-2xl p-4 shadow-[0_15px_40px_rgba(0,0,0,0.12)] flex items-center gap-4 border border-emerald-50 max-w-[220px] z-20">
                        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                            <svg className="w-5 h-5 text-emerald-500 transform rotate-45 -translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </div>
                        <p className="text-emerald-500 font-semibold text-xs leading-tight">Your answer was sent successfully</p>
                    </div>

                    {/* Floating Floating Action Icons */}
                    <div className="absolute top-12 right-16 bg-white w-9 h-9 rounded-full shadow-md flex items-center justify-center border border-red-50 z-20">
                        <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
                    </div>
                    <div className="absolute top-24 right-6 bg-white w-9 h-9 rounded-full shadow-md flex items-center justify-center border border-emerald-50 z-20">
                        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="flex flex-col justify-center text-left max-w-lg mx-auto lg:mx-0 lg:pl-8 order-2 lg:order-2">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                        Assessments, <br /><span className="text-emerald-400">Quizzes</span>, Tests
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                        Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook.
                    </p>
                </div>
            </section>

            {/* ---------------- SECTION 2: Class Management Tools ---------------- */}
            <section className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                {/* Left Side: Content (Comes first on desktop due to layout swap) */}
                <div className="flex flex-col justify-center text-left max-w-lg mx-auto lg:mx-0 lg:pr-8 order-2 lg:order-1">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                        <span className="text-emerald-400">Class</span> <br />Management Tools <br /><span className="text-indigo-800">for Educators</span>
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                        Tools for educators to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.
                    </p>
                </div>

                {/* Right Side: Gradebook / Student Progress Visual */}
                <div className="relative flex justify-center items-center h-[450px] w-full max-w-[500px] mx-auto order-1 lg:order-2">
                    {/* Decorative Elements */}
                    <div className="absolute top-2 right-12 w-12 h-12 bg-sky-300 rounded-full opacity-60 -z-10 blur-[1px]" />
                    <div className="absolute bottom-16 left-2 w-10 h-6 flex flex-col justify-between opacity-40">
                        <div className="h-0.5 w-full bg-blue-400 rounded"></div>
                        <div className="h-0.5 w-3/4 bg-blue-400 rounded"></div>
                        <div className="h-0.5 w-1/2 bg-blue-400 rounded"></div>
                    </div>

                    {/* Main Gradebook Container */}
                    <div className="relative w-full bg-white rounded-3xl p-6 shadow-[0_20px_50px_rgba(14,165,233,0.08)] border border-sky-50/50 overflow-hidden z-10">
                        {/* Blue Header Bar */}
                        <div className="bg-sky-400 text-white p-3 -mx-6 -mt-6 mb-6 flex justify-between items-center px-6">
                            <span className="text-sm font-semibold tracking-wide">GradeBook</span>
                        </div>

                        {/* Progress Lines Setup */}
                        <div className="space-y-6 relative py-2">
                            {/* Row 1 */}
                            <div className="relative h-1 w-full bg-sky-400 rounded-full">
                                <div className="absolute -top-4 left-[20%] flex flex-col items-center">
                                    <div className="w-9 h-9 rounded-full border-2 border-white overflow-hidden shadow-sm bg-gray-200">
                                        <Image src="/assets/tamira.png" alt="Student" width={36} height={36} className="object-cover" />
                                    </div>
                                    <span className="bg-sky-100 text-sky-600 text-[10px] px-2 py-0.5 rounded-full mt-1 font-bold">10</span>
                                    <span className="text-[10px] text-gray-400 font-semibold">0</span>
                                </div>
                            </div>

                            {/* Row 2 */}
                            <div className="relative h-1 w-full bg-blue-500 rounded-full !mt-12">
                                <div className="absolute -top-4 left-[60%] flex flex-col items-center">
                                    <div className="w-9 h-9 rounded-full border-2 border-white overflow-hidden shadow-sm bg-gray-200">
                                        <Image src="/assets/humbert.png" alt="Student" width={36} height={36} className="object-cover" />
                                    </div>
                                    <span className="bg-blue-100 text-blue-600 text-[10px] px-2 py-0.5 rounded-full mt-1 font-bold">9</span>
                                    <span className="text-[10px] text-gray-400 font-semibold">8</span>
                                </div>
                            </div>

                            {/* Row 3 */}
                            <div className="relative h-1 w-full bg-emerald-400 rounded-full !mt-14">
                                <div className="absolute -top-4 left-[40%] flex flex-col items-center">
                                    <div className="w-9 h-9 rounded-full border-2 border-white overflow-hidden shadow-sm bg-gray-200">
                                        <Image src="/assets/adam.png" alt="Student" width={36} height={36} className="object-cover" />
                                    </div>
                                    <span className="bg-emerald-100 text-emerald-600 text-[10px] px-2 py-0.5 rounded-full mt-1 font-bold">8</span>
                                    <span className="text-[10px] text-gray-400 font-semibold">5</span>
                                </div>
                            </div>

                            {/* Row 4 */}
                            <div className="relative h-1 w-full bg-rose-500 rounded-full !mt-14">
                                <div className="absolute -top-4 left-[75%] flex flex-col items-center">
                                    <div className="w-9 h-9 rounded-full border-2 border-white overflow-hidden shadow-sm bg-gray-200">
                                        <Image src="/assets/patricia.png" alt="Student" width={36} height={36} className="object-cover" />
                                    </div>
                                    <span className="bg-rose-100 text-rose-600 text-[10px] px-2 py-0.5 rounded-full mt-1 font-bold">7</span>
                                    <span className="text-[10px] text-gray-400 font-semibold">5</span>
                                </div>
                            </div>
                        </div>

                        {/* Export Button */}
                        <div className="mt-8 flex justify-end">
                            <button className="bg-indigo-600 text-white text-xs font-semibold px-5 py-2 rounded-xl shadow-md shadow-indigo-200 hover:bg-indigo-700 transition">
                                Export
                            </button>
                        </div>
                    </div>

                    {/* Floating badge items */}
                    <div className="absolute -top-2 left-6 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center z-20 text-orange-400 text-lg">⭐</div>
                    <div className="absolute top-10 -right-2 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center z-20 text-sky-500">📘</div>
                </div>
            </section>

            {/* ---------------- SECTION 3: One-on-One Discussions ---------------- */}
            <section className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                {/* Left Side: Video Call/Chat Interface */}
                <div className="relative flex justify-center items-center h-[450px] w-full max-w-[500px] mx-auto order-1 lg:order-1">
                    {/* Decorative Shape */}
                    <div className="absolute top-12 right-12 w-14 h-14 border-4 border-sky-400 rounded-full opacity-60 -z-10" />
                    <div className="absolute bottom-24 right-20 w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-orange-400 border-b-[8px] border-b-transparent transform rotate-12" />

                    {/* Background Window Layer */}
                    <div className="absolute top-4 w-[85%] h-[260px] bg-slate-100 rounded-2xl shadow-inner border border-slate-200/40 opacity-70 scale-95 -translate-y-6 z-0" />

                    {/* Main Active Call Popup */}
                    <div className="relative w-[90%] bg-white rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100 z-10">
                        {/* Window Controls */}
                        <div className="flex gap-1.5 mb-4">
                            <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                        </div>

                        {/* Video Streams Grid */}
                        <div className="grid grid-cols-2 gap-3 mb-4">
                            {/* Stream 1 */}
                            <div className="relative h-32 bg-slate-100 rounded-xl overflow-hidden">
                                <Image src="/assets/instructure.jpg" alt="Teacher" fill className="object-cover" />
                            </div>
                            {/* Stream 2 */}
                            <div className="relative h-32 bg-slate-100 rounded-xl overflow-hidden">
                                <Image src="/assets/patricia.png" alt="Student" fill className="object-cover" />
                                <div className="absolute bottom-2 left-2 bg-black/40 text-white text-[10px] px-1.5 py-0.5 rounded backdrop-blur-sm">
                                    Patricia
                                </div>
                            </div>
                        </div>

                        {/* Control Bar */}
                        <div className="flex justify-between items-center pt-2 border-t border-slate-50">
                            <div className="flex flex-col">
                                <span className="text-xs font-bold text-slate-800">Private Discussion</span>
                                <span className="text-[9px] text-gray-400">Your video can't be seen by others</span>
                            </div>
                            <button className="bg-rose-500 text-white text-xs font-semibold px-4 py-2 rounded-xl hover:bg-rose-600 transition">
                                End Discussion
                            </button>
                        </div>
                    </div>

                    {/* Floating People Icon Badge */}
                    <div className="absolute top-[35%] left-0 bg-white w-12 h-12 rounded-2xl shadow-xl flex items-center justify-center border border-sky-50 z-20 text-sky-500">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" /></svg>
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="flex flex-col justify-center text-left max-w-lg mx-auto lg:mx-0 lg:pl-8 order-2 lg:order-2">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                        One-on-One <br /><span className="text-emerald-400">Discussions</span>
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                        Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.
                    </p>
                </div>
            </section>

            {/* ---------------- FOOTER BUTTON: See More Features ---------------- */}
            <div className="flex justify-center pt-8">
                <button className="border border-emerald-400 text-emerald-500 hover:bg-emerald-50 font-medium px-8 py-3 rounded-full transition-all text-sm tracking-wide shadow-sm">
                    See more features
                </button>
            </div>

        </div>
    );
}
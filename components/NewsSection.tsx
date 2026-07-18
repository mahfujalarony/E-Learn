import React from 'react';
import Image from 'next/image';

export default function NewsSection() {
    return (
        <section className="w-full bg-white py-16 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-950 mb-4">
                        Lastest News and Resources
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base">
                        See the developments that have occurred to TOTC in the world
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

                    {/* Left Side: Big Featured News Card */}
                    <div className="lg:col-span-5 flex flex-col">
                        <div className="relative w-full h-64 md:h-80 rounded-3xl overflow-hidden shadow-md mb-6">
                            <Image
                                src="/assets/laptop.png" // আপনার পাবলিক ফোল্ডারে থাকা সঠিক ইমেজ পাথ দিন
                                alt="Laptop with online class"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="flex flex-col items-start">
                            <span className="bg-cyan-400 text-white text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
                                NEWS
                            </span>
                            <h3 className="text-xl md:text-2xl font-bold text-slate-800 leading-snug mb-4 hover:text-indigo-950 cursor-pointer transition">
                                Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...
                            </p>
                            <a href="#" className="text-gray-400 text-sm font-semibold underline hover:text-indigo-950 transition">
                                Read more
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Small News Rows List */}
                    <div className="lg:col-span-7 space-y-8">

                        {/* Row 1 */}
                        <div className="flex flex-col sm:flex-row gap-6 items-start">
                            <div className="relative w-full sm:w-56 h-36 rounded-2xl overflow-hidden shrink-0 shadow-sm">
                                <Image src="/assets/news-sub1.png" alt="Child with tablet" fill className="object-cover" />
                                <span className="absolute bottom-3 right-3 bg-cyan-400 text-white text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                                    PRESS RELEASE
                                </span>
                            </div>
                            <div className="flex flex-col justify-center">
                                <h4 className="text-base md:text-lg font-bold text-slate-800 leading-snug mb-2 hover:text-indigo-950 cursor-pointer transition">
                                    Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand
                                </h4>
                                <p className="text-gray-400 text-xs md:text-sm leading-relaxed line-clamp-2">
                                    Class Technologies Inc., the company that created Class,...
                                </p>
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="flex flex-col sm:flex-row gap-6 items-start">
                            <div className="relative w-full sm:w-56 h-36 rounded-2xl overflow-hidden shrink-0 shadow-sm">
                                <Image src="/assets/news-sub2.png" alt="Person on Zoom" fill className="object-cover" />
                                <span className="absolute bottom-3 right-3 bg-cyan-400 text-white text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                                    NEWS
                                </span>
                            </div>
                            <div className="flex flex-col justify-center">
                                <h4 className="text-base md:text-lg font-bold text-slate-800 leading-snug mb-2 hover:text-indigo-950 cursor-pointer transition">
                                    Zoom's earliest investors are betting millions on a better Zoom for schools
                                </h4>
                                <p className="text-gray-400 text-xs md:text-sm leading-relaxed line-clamp-2">
                                    Zoom was never created to be a consumer product. Nonetheless, the...
                                </p>
                            </div>
                        </div>

                        {/* Row 3 */}
                        <div className="flex flex-col sm:flex-row gap-6 items-start">
                            <div className="relative w-full sm:w-56 h-36 rounded-2xl overflow-hidden shrink-0 shadow-sm">
                                <Image src="/assets/news-sub3.png" alt="Online class illustration" fill className="object-cover" />
                                <span className="absolute bottom-3 right-3 bg-cyan-400 text-white text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                                    NEWS
                                </span>
                            </div>
                            <div className="flex flex-col justify-center">
                                <h4 className="text-base md:text-lg font-bold text-slate-800 leading-snug mb-2 hover:text-indigo-950 cursor-pointer transition">
                                    Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms
                                </h4>
                                <p className="text-gray-400 text-xs md:text-sm leading-relaxed line-clamp-2">
                                    This year, investors have reaped big financial returns from betting on Zoom...
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
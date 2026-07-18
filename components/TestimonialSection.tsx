import React from 'react';
import Image from 'next/image';

export default function TestimonialSection() {
    return (
        <section className="w-full bg-white py-16 px-4 md:px-8 overflow-hidden">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                {/* Left Side: Content & Action Button */}
                <div className="flex flex-col justify-center text-left max-w-lg mx-auto lg:mx-0 lg:pr-8 order-2 lg:order-1">
                    {/* Subtitle with decorative line */}
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-[1px] bg-slate-400"></div>
                        <span className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-500">
                            Testimonial
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-indigo-950 mb-6">
                        What They Say?
                    </h2>

                    {/* Paragraphs */}
                    <div className="space-y-4 text-gray-500 text-sm md:text-base leading-relaxed mb-8">
                        <p>
                            TOTC has got more than 100k positive ratings from our users around the world.
                        </p>
                        <p>
                            Some of the students and teachers were greatly helped by the Skilline.
                        </p>
                        <p className="pt-2 font-medium">
                            Are you too? Please give your assessment
                        </p>
                    </div>

                    {/* Interactive Button */}
                    <button className="group flex items-center justify-between w-full max-w-[280px] border border-teal-400/60 rounded-full pl-6 pr-2 py-2 text-teal-500 font-medium text-sm transition-all hover:border-teal-500 hover:bg-teal-50/30">
                        <span>Write your assessment</span>
                        <div className="w-10 h-10 rounded-full border border-teal-400/60 flex items-center justify-center text-teal-500 group-hover:bg-teal-500 group-hover:text-white transition-all">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </button>
                </div>

                {/* Right Side: Image with Floating Review Card */}
                <div className="relative flex justify-center items-center h-[500px] w-full max-w-[550px] mx-auto order-1 lg:order-2">

                    {/* Main User Image Wrapper */}
                    <div className="relative w-[80%] h-[400px] rounded-3xl overflow-hidden shadow-md bg-sky-200 -translate-y-4">
                        <Image
                            src="/assets/testimonial-user.jpg" // আপনার পাবলিক ফোল্ডারে থাকা সঠিক ইমেজ পাথ দিন
                            alt="Happy student holding books"
                            fill
                            className="object-cover object-center"
                        />
                    </div>

                    {/* Next Slider Button (Right Side Arrow) */}
                    <button className="absolute right-2 top-[45%] bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-teal-400 hover:text-teal-500 hover:scale-105 transition z-20 border border-gray-50">
                        <svg className="w-5 h-5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Floating Testimonial Card (Bottom Right) */}
                    <div className="absolute bottom-2 -left-2 md:-left-6 right-6 bg-white rounded-2xl p-6 shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-slate-100 flex gap-4 z-10 max-w-[460px]">
                        {/* Left Orange Decorative Border Line */}
                        <div className="w-1 bg-orange-400 rounded-full shrink-0"></div>

                        <div className="flex-1 flex flex-col justify-between">
                            {/* Quote Text */}
                            <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-normal mb-6 pl-2 border-l border-slate-100">
                                "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking."
                            </p>

                            {/* Reviewer Details & Rating */}
                            <div className="flex justify-between items-end">
                                <div>
                                    <h4 className="font-bold text-slate-700 text-sm md:text-base">
                                        Gloria Rose
                                    </h4>
                                </div>

                                {/* Stars and Platform */}
                                <div className="flex flex-col items-end gap-1">
                                    <div className="flex gap-0.5 text-amber-400">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <span className="text-[10px] text-slate-400 font-medium tracking-wide">
                                        12 reviews at Yelp
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
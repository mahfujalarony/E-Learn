import React from 'react';
import Image from 'next/image';

export default function FeaturedArticleSection() {
    return (
        // এখানে w-full এবং bg-[#ebf5ff] পুরো স্ক্রিন জুড়ে থাকবে, কোনো সাদা অংশ থাকবে না
        <section className="w-full bg-[#ebf5ff] py-16 md:py-24 px-4 md:px-8 overflow-hidden">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                {/* Left Side: Text Content & CTA Button */}
                <div className="lg:col-span-6 flex flex-col justify-center text-left max-w-xl mx-auto lg:mx-0 lg:pr-6 order-2 lg:order-1">
                    {/* Author and Category info */}
                    <p className="text-sm text-slate-700 font-medium mb-4">
                        By Themadbrains in <span className="text-[#49BBBD] font-semibold cursor-pointer hover:underline">inspiration</span>
                    </p>

                    {/* Main Title Heading */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-indigo-950 leading-tight mb-6">
                        Why Swift UI Should Be on the Radar of Every Mobile Developer
                    </h2>

                    {/* Description Paragraph */}
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor
                    </p>

                    {/* Action Button */}
                    <button className="w-full sm:w-auto bg-[#49BBBD] hover:bg-[#3ca8aa] text-white font-semibold text-sm px-8 py-3.5 rounded-xl shadow-md shadow-cyan-100 transition-all active:scale-95 self-start">
                        Start learning now
                    </button>
                </div>

                {/* Right Side: Featured Laptop Image */}
                <div className="lg:col-span-6 w-full flex justify-center items-center order-1 lg:order-2">
                    <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-3xl overflow-hidden shadow-xl">
                        <Image
                            src="/assets/laptop.png" // আপনার public ফোল্ডারে থাকা সঠিক ইমেজ পাথ দিন
                            alt="Person using laptop during online session"
                            fill
                            className="object-cover object-center"
                            priority
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
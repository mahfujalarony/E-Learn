import React from 'react';
import Image from 'next/image';

interface BlogCardProps {
    imageSrc: string;
    title: string;
    authorName: string;
    authorImage: string;
    description: string;
    views: string;
}

const blogData: BlogCardProps[] = [
    {
        imageSrc: '/assets2/image copy.png',
        title: 'Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution',
        authorName: 'Lina',
        authorImage: '/assets/user.png',
        description: 'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...',
        views: '251,232',
    },
    {
        imageSrc: '/assets2/image copy 2.png',
        title: 'Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution',
        authorName: 'Lina',
        authorImage: '/assets/user.png',
        description: 'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...',
        views: '251,232',
    },
];

export default function RelatedBlogSection() {
    return (
        <section className="w-full bg-[#ebf5ff] py-16 px-4 md:px-8 overflow-hidden">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-wide">
                        Related Blog
                    </h2>
                    <a href="#" className="text-[#49BBBD] font-bold text-sm md:text-base hover:underline transition">
                        See all
                    </a>
                </div>

                {/* Blog Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    {blogData.map((blog, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl p-6 shadow-[0_15px_40px_rgba(0,0,0,0.03)] flex flex-col justify-between"
                        >
                            <div>
                                {/* Blog Image */}
                                <div className="relative w-full h-52 sm:h-60 rounded-2xl overflow-hidden mb-6">
                                    <Image
                                        src={blog.imageSrc}
                                        alt={blog.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Blog Title */}
                                <h3 className="text-lg md:text-xl font-bold text-slate-800 leading-snug mb-4 hover:text-indigo-950 cursor-pointer transition line-clamp-2">
                                    {blog.title}
                                </h3>

                                {/* Author Info */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="relative w-10 h-10 rounded-full overflow-hidden bg-slate-100">
                                        <Image
                                            src={blog.authorImage}
                                            alt={blog.authorName}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <span className="text-slate-700 font-semibold text-sm">
                                        {blog.authorName}
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                                    {blog.description}
                                </p>
                            </div>

                            {/* Card Footer: Read More & Views */}
                            <div className="flex justify-between items-center pt-4 border-t border-slate-50">
                                <a href="#" className="text-gray-400 text-sm font-semibold underline hover:text-indigo-950 transition">
                                    Read more
                                </a>

                                {/* Views Count */}
                                <div className="flex items-center gap-2 text-gray-400">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                    <span className="text-xs font-medium tracking-wide">
                                        {blog.views}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Pagination / Slider Buttons */}
                <div className="flex justify-end gap-3">
                    {/* Left Arrow Button */}
                    <button className="bg-white/60 hover:bg-white text-teal-400 p-3 rounded-lg shadow-sm hover:scale-105 transition border border-teal-100/30">
                        <svg className="w-5 h-5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    {/* Right Arrow Button */}
                    <button className="bg-[#49BBBD] hover:bg-[#3ca8aa] text-white p-3 rounded-lg shadow-md hover:scale-105 transition">
                        <svg className="w-5 h-5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

            </div>
        </section>
    );
}
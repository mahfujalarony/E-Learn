import React from 'react';
import Image from 'next/image';

interface BlogCategory {
    id: number;
    title: string;
    imageSrc: string;
}

export default function ReadingBlogList() {
    const categories: BlogCategory[] = [
        { id: 1, title: 'UX/UI', imageSrc: '/assets2/image.png' },
        { id: 2, title: 'React', imageSrc: '/assets2/js.png' },
        { id: 3, title: 'PHP', imageSrc: '/assets2/php.png' },
        { id: 4, title: 'JavaScript', imageSrc: '/assets2/js2.png' },
    ];

    return (
        <section className="w-full bg-white py-16 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">

                {/* Section Heading */}
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 tracking-wide">
                    Reading blog list
                </h2>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="relative w-full h-[220px] md:h-[240px] rounded-3xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition duration-300"
                        >
                            {/* Category Background Image */}
                            <Image
                                src={category.imageSrc} // আপনার public ফোল্ডারে সঠিক ইমেজ পাথগুলো দিয়ে দিন
                                alt={category.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />

                            {/* Centered Floating Glassmorphism Button/Box */}
                            <div className="absolute inset-x-0 bottom-6 flex justify-center px-6">
                                <div className="w-full max-w-[180px] bg-white/40 backdrop-blur-md border border-white/20 py-2.5 rounded-2xl flex items-center justify-center shadow-sm">
                                    <span className="text-slate-800 font-bold text-sm md:text-base tracking-wide">
                                        {category.title}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
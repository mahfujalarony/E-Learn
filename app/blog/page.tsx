import React from 'react'
import FeaturedArticleSection from './components/FeaturedArticleSection'
import ReadingBlogList from './components/ReadingBlogList'
import RelatedBlogSection from './components/BlogCardProps'
//import TrendingTopics from './components/TrendingTopics'
import Navbar from '@/components/ui/Navbar'

function page() {
    return (
        <div>
            <Navbar />
            <FeaturedArticleSection />
            <ReadingBlogList />
            <RelatedBlogSection />
        </div>
    )
}

export default page
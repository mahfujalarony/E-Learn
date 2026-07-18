import React from 'react'
import HeroSection from '@/components/Hero'
import SuccessAndFeatures from '@/components/SuccessAndFeatures'
import WhatIsTotc from '@/components/WhatIsTotc'
import ClassroomSection from '@/components/ClassroomSection'
import OurFeatures from '@/components/OurFeatures'
import ToolsSection from '@/components/ToolsSection'
import FeaturesPage from '@/components/Feature'
import TestimonialSection from '@/components/TestimonialSection'
import NewsSection from '@/components/NewsSection'
import Footer from '@/components/Footer'
import Navbar from '@/components/ui/Navbar'

function page() {
  return (
    <div>
      <Navbar dynamicOnScroll={true} />
      <HeroSection />
      <SuccessAndFeatures />
      <WhatIsTotc />
      <ClassroomSection />
      <OurFeatures />
      <ToolsSection />
      <FeaturesPage />
      <TestimonialSection />
      <NewsSection />
      <Footer />
    </div>
  )
}

export default page

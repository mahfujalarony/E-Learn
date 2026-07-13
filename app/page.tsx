import React from 'react'
import HeroSection from '@/components/Hero'
import SuccessAndFeatures from '@/components/SuccessAndFeatures'
import WhatIsTotc from '@/components/WhatIsTotc'
import ClassroomSection from '@/components/ClassroomSection'
import OurFeatures from '@/components/OurFeatures'
import ToolsSection from '@/components/ToolsSection'

function page() {
  return (
    <div>
      <HeroSection />
      <SuccessAndFeatures />
      <WhatIsTotc />
      <ClassroomSection />
      <OurFeatures />
      <ToolsSection />
    </div>
  )
}

export default page

import ImageSection from '@/components/AboutImageSection'
import AboutSection from '@/components/AboutSection'
import AboutSection2 from '@/components/AboutSection2'
import Banner from '@/components/BannerTwo'
import FunFact from '@/components/FunFact'
import React from 'react'

const About = () => {
  return (
    <div className="bg-black">
      <Banner title="About Us"/>
      <AboutSection/>
      <ImageSection/>
      <div className=" mt-44 bg-black">

      <FunFact/>
      </div>
      <AboutSection2/>
    </div>
  )
}

export default About

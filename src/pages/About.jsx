import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import AboutUs from '../components/AboutUs'
import WhyChoose from '../components/WhyChoose'
import OurTeam from '../components/OurTeam'

const About = () => {
  return (
    <>
      <BreadCrumb title={'About'}/>
      <AboutUs/>
      <WhyChoose/>
      <OurTeam/>
    </>
  )
}

export default About

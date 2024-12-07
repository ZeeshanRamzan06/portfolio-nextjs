'use client'
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Project from './Project/Project'
import Skills from './Skills/Skills'
import Customer from './Customer/CustomerReview'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import AOS from 'aos'
import "aos/dist/aos.css"
import Responsive from './Navbar/Responsive'
const Home = () => {

useEffect(()=>{
  const initAOS = async ()=>{
    await import ("aos");
    AOS.init({
      duration:1000,
      easing:"ease",
      once: true,
      anchorPlacement: 'top-bottom'

    })
  }
  initAOS();
},[])


  return (
    <div className='overflow-hidden'>
      <Responsive/>
      <Hero/>
      <About/>
      <Project/>
      <Skills/>
      <Customer/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
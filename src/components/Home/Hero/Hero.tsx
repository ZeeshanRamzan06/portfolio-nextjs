'use client'
import React from 'react'
import { BaseInfo } from '../../../Data/data'
import { FaDownload } from 'react-icons/fa'
import Image from 'next/image'
import { FaJsSquare, FaCode, FaReact, FaNodeJs } from "react-icons/fa"; 
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Software Engineer.',
        'MERN Stack Developer.',
        'Web Developer',
        'Blockchain Developer',
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='w-full pt-[20vh] h-full dark:bg-[#191D2B] bg-gray-200 overflow-hidden relative pb-20'>
        <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 ">
            <div className='order-2 lg:order-1'>
                <h1 data-aos="fade-left" className=' text-blue-700 text-2xl md:text-3xl lg-text-4xl mb-3 dark:text-gray-300 font-semibold'>
                    Hi,I'm {BaseInfo.name}
                </h1>
                <h1 data-aos="fade-right" data-aos-delay="100" className=' text-gray-700  text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold md:leading-[3rem]
                 lg:leading-[3.5rem] xl:leading-[4rem] dark:text-bg'>
                    <span ref={typedRef}></span>
                 </h1>
                 <p data-aos="fade-right" data-aos-delay="200" className='mt-6 text-gray-700 text-sm md:text-base dark:text-white text-opacity-60'>
                    {BaseInfo.description}
                 </p>
                 <a 
                  href={BaseInfo.myCv} 
                  download="My_CV.pdf" 
                  data-aos="zoom-in" 
                  data-aos-delay="300" 
                  className="inline-flex items-center px-4 py-2 text-white font-semibold text-sm md:text-lg 
             transition-all duration-200 rounded-lg mt-8 bg-blue-700 hover:bg-blue-900 space-x-2"
>
  <span>Download CV</span>
  <FaDownload />
</a>
            </div>
           <div className=" order-1 lg:order-2  relative flex justify-center items-center h-[400px]">
      {/* Profile Picture */}
      <div className="relative z-10 rounded-full border-[3.5px]
       border-blue-400 overflow-hidden w-[200px] h-[200px] 
      transition-transform duration-300 hover:scale-110">
        <Image
          src={BaseInfo.profilePic}
          alt={BaseInfo.name}
          width={200}
          height={200}
          className="object-cover"
        />
      </div>

      {/* Rotating Circle */}
      <div className="absolute w-[300px] h-[300px] rounded-full border-[2px] border-blue-400 animate-spin-slow flex items-center justify-center">
        {/* Icon 1 (Top) */}
        <div className="absolute top-0 left-[50%] transform -translate-x-1/2 -translate-y-[50%] bg-white w-12 h-12 rounded-full flex justify-center items-center shadow-md hover:animate-none hover:scale-125 cursor-pointer transition-all duration-300">
          <FaJsSquare className="text-blue-500 text-xl" />
        </div>
        {/* Icon 2 (Right) */}
        <div className="absolute right-0 top-[50%] transform -translate-y-1/2 translate-x-[50%] bg-white w-12 h-12 rounded-full flex justify-center items-center shadow-md hover:animate-none hover:scale-125 cursor-pointer transition-all duration-300">
          <FaReact className="text-blue-500 text-xl" />
        </div>
        {/* Icon 3 (Bottom) */}
        <div className="absolute bottom-0 left-[50%] transform -translate-x-1/2 translate-y-[50%] bg-white w-12 h-12 rounded-full flex justify-center items-center shadow-md hover:animate-none hover:scale-125 cursor-pointer transition-all duration-300">
          <FaNodeJs className="text-blue-500 text-xl" />
        </div>
        {/* Icon 4 (Left) */}
        <div className="absolute left-0 top-[50%] transform -translate-y-1/2 -translate-x-[50%] bg-white w-12 h-12 rounded-full flex justify-center items-center shadow-md hover:animate-none hover:scale-125 cursor-pointer transition-all duration-300">
          <FaCode className="text-blue-500 text-xl" />
        </div>
      </div>
    </div>
      

        </div>
        </div>
    </div>
  )
}

export default Hero
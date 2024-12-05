import React from 'react'
import { BaseInfo } from '../../../Data/data'
import { FaDownload } from 'react-icons/fa'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative'>
        <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div>
                <h1 className='text-2xl md:text-3xl lg-text-4xl mb-5 text-gray-300 font-semibold'>
                    Hi,I'm {BaseInfo.name}
                </h1>
                <h1 className='text-bg text-3xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold md:leading-[3rem]
                 lg:leading-[3.5rem] xl:leading-[4rem] text-white'>
                    {BaseInfo.position}
                 </h1>
                 <p className='mt-6 text-sm md:text-base text-white text-opacity-60'>
                    {BaseInfo.description}
                 </p>
                 <button className='md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg 
                 transition-all duration-200 rounded-lg mt-8 bg-blue-700 hover:bg-blue-900 flex items-center space-x-2'>
                    <span>Download CV </span>
                    <FaDownload/>
                 </button>
            </div>
            <div className="mx-auto hidden lg:block rounded-[50%] border-[3.5px] border-white overflow-x-hidden">
                <Image 
                src={BaseInfo.profilePic}
                alt={BaseInfo.name}
                width={450}
                height={450}
                />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Hero
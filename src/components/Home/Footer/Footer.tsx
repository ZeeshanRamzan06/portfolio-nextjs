import SectionHeading from '@/components/helper/SectionHeading'
import React from 'react'

const Footer = () => {
  return (
    <div className='pt-16 pb-16 bg-[#191D2B]'>
        <div className="flex items-center flex-wrap justify-center space-x-10 space-y-4 text-white font-bold">
            <div>Home.</div>
            <div>Projects.</div>
            <div>Review.</div>
            <div>Contact.</div>
        </div>
        <p className='text-white text-opacity-60 mt-10 text-center'> © 2024 ZeeshanTech. All rights reserved.</p>
    </div>
  )
}

export default Footer
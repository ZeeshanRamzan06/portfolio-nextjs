import { contactData } from '@/Data/data'
import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import { FaMapLocation } from 'react-icons/fa6'

const ContactInfo = () => {
  return (
    <div>
        <div className="flex items-center space-x-8">
            <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#4A62D6]
            flex items-center justify-center flex-col">
                <FaPhone className='w-4 h-4 md:w-7 md:h-7 text-white'/>
            </div>
            <div>
                <h1 className='text-lg md:text-xl text-white font-bold'>Phone</h1>
                <h1 className='text-base md:text-lg text-white text-opacity-70'>{contactData.phone}</h1>
            </div>
        </div>
        <div className="flex items-center space-x-8 mt-8 mb-8">
            <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#4A62D6]
            flex items-center justify-center flex-col">
                <FaEnvelope className='w-4 h-4 md:w-7 md:h-7 text-white'/>
            </div>
            <div>
                <h1 className='text-lg md:text-xl text-white font-bold'>Email</h1>
                <h1 className='text-base md:text-lg text-white text-opacity-70'>{contactData.email}</h1>
            </div>
        </div>
        <div className="flex items-center space-x-8">
            <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#4A62D6]
            flex items-center justify-center flex-col">
                <FaMapLocation className='w-4 h-4 md:w-7 md:h-7 text-white'/>
            </div>
            <div>
                <h1 className='text-lg md:text-xl text-white font-bold'>Address</h1>
                <h1 className='text-base md:text-lg text-white text-opacity-70'>{contactData.address}</h1>
            </div>
        </div>
    </div>
  )
}

export default ContactInfo
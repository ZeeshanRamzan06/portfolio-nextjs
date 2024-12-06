import React from 'react'
import ContactForm from './ContactForm'
import SectionHeading from '@/components/helper/SectionHeading'
import ContactInfo from './ContactInfo'

const Contact = () => {
  return (
    <div className='pt-16 pb-16 bg-[#191D2B]'>
        <SectionHeading>Contact Me</SectionHeading>
        <div className="grid grid-cols-1 xl:grid-cols-2 w-[90%] sm:w-[80%] mx-auto items-center gap-10">
        <div className="mt-20">
            <ContactForm/>
        </div>
        <div >
            <ContactInfo/>
        </div>
        </div>
    </div>
  )
}

export default Contact
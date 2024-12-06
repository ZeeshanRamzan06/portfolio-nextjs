import React from 'react'

const ContactForm = () => {
  return (
    <div className='bg-[#262d42] rounded-lg p-4 sm:p-10'>
        <h1 className='text-bg text-2xl md:text-3xl lg:text-[2.5    rem] font-bold'>
            Let's Work together!
        </h1>
        <p className='text-gray-200 mt-3 lg:text-base text-xs md:text-sm'>For any questions or inquiries about my Services, Please don't hesitate to reach out to me. I'd be happy to assist you.</p>
        <form action="" className='mt-8 block w-full overflow-hidden'>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <input type="text" placeholder='First Name'  className='flex-1 bg-[#454E56] text-white placeholder:text-white
                px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full'/>
                <input type="text" placeholder='Last Name'  className='flex-1 bg-[#454E56] text-white placeholder:text-white
                px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full'/>
            </div>
            <div className="flex flex-col mt-5 md:flex-row items-center justify-center gap-4">
                <input type="email" placeholder='Email address'  className='flex-1 bg-[#454E56] text-white placeholder:text-white
                px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full'/>
                <input type="text" placeholder='Phone Number'  className='flex-1 bg-[#454E56] text-white placeholder:text-white
                px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full'/>
            </div>
            <div className="mt-5">
            <input type="text" placeholder='Enter Subject'  className='flex-1 bg-[#454E56] text-white placeholder:text-white
                px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full'/>
            </div>
            <textarea className='flex-1 mt-5 bg-[#454E56] text-white placeholder:text-white
                px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 
                outline-none w-full'placeholder='Message' rows={5}></textarea>
                <div className="mt-5">
                    <button className='px-6 py-3.5 bg-[#191D2B] border-[#4A62D6] text-white hover:bg-[#4A62D6] transition-all
                    duration-150 rounded-full '>Submit Message</button>
                </div>
        </form>
    </div>
  )
}

export default ContactForm
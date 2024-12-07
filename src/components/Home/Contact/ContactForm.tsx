import React from 'react'

const ContactForm = () => {
  return (
    <div className='dark:bg-[#262d42] bg-gray-400 rounded-lg  p-4 sm:p-10'>
        <h1 className='dark:text-white text-gray-700 text-2xl md:text-3xl lg:text-[2.5rem] font-bold'>
            Let's Work together!
        </h1>
        <p className='dark:text-gray-200 text-gray-700 mt-3 lg:text-base text-xs md:text-sm'>For any questions or inquiries about my Services, Please don't hesitate to reach out to me. I'd be happy to assist you.</p>
        <form action="" className='mt-8 block w-full overflow-hidden'>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <input type="text" placeholder='First Name'  className='flex-1 dark:bg-[#454E56] bg-gray-300  dark:placeholder:text-white placeholder:text-gray-700
                px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full'/>
                <input type="text" placeholder='Last Name'  className='flex-1 dark:bg-[#454E56] bg-gray-300 dark:placeholder:text-white placeholder:text-gray-700
                px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full'/>
            </div>
            <div className="flex flex-col mt-5 md:flex-row items-center justify-center gap-4">
                <input type="email" placeholder='Email address'  className='flex-1 dark:bg-[#454E56] bg-gray-300 dark:placeholder:text-white placeholder:text-gray-700
                px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full'/>
                <input type="text" placeholder='Phone Number'  className='flex-1 dark:bg-[#454E56] bg-gray-300 dark:placeholder:text-white placeholder:text-gray-700
                px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full'/>
            </div>
            <div className="mt-5">
            <input type="text" placeholder='Enter Subject'  className='flex-1 dark:bg-[#454E56] bg-gray-300 dark:placeholder:text-white placeholder:text-gray-700
                px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full'/>
            </div>
            <textarea className='flex-1 mt-5 dark:bg-[#454E56] bg-gray-300 dark:placeholder:text-white placeholder:text-gray-700
                px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 
                outline-none w-full'placeholder='Message' rows={5}></textarea>
                <div className="mt-5">
                    <button className='px-6 py-3.5 dark:bg-[#191D2B] bg-blue-700 border-[#4A62D6] text-white hover:bg-[#4A62D6] transition-all
                    duration-150 rounded-full '>Submit Message</button>
                </div>
        </form>
    </div>
  )
}

export default ContactForm
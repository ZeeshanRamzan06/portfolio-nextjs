'use client'
import SectionHeading from '@/components/helper/SectionHeading'
import { aboutInfo } from '@/Data/data'
import React from 'react'
import { FaCheck } from 'react-icons/fa'

const About = () => {
  return (
    <div id='about' className='pt-16 pb-16 dark:bg-[#191D2B] bg-gray-200'>
        <SectionHeading>About me</SectionHeading>
        <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-col-2 xl:grid-cols-2 gap-8 items-center mt-20  ">
            <div data-aos ="fade-left" data-aos-anchor-placement ="top-center" >
                <h1 className=' text-[26px] sm:text-2xl md:text-4xl lg:text-5xl font-bold text-blue-700 dark:text-bg mb-5'>
                    {aboutInfo.title}
                </h1>
                <p className='text-base text-gray-500 dark:text-white'>
                    {aboutInfo.description}
                </p>
                <div className="mt-8">
                    <div className="flex items-center space-x-2 mb-6">
                        <div className="w-7 h-7 bg-blue-800 flex flex-col items-center justify-center">
                            <FaCheck className='text-white'/>
                        </div>
                        <p className='text-sm sm:text-base md:text-lg font-bold dark:text-gray-300 text-gray-700'>
                            Frontend Development
                        </p>
                    </div>
                    <div className="flex items-center space-x-2 mb-6">
                        <div className="w-7 h-7 bg-orange-800 flex flex-col items-center justify-center">
                            <FaCheck className='text-white'/>
                        </div>
                        <p className='text-sm sm:text-base md:text-lg font-bold dark:text-gray-300 text-gray-700'>
                            Backend Development
                        </p>
                    </div>
                    <div className="flex items-center space-x-2 mb-6">
                        <div className="w-7 h-7 bg-green-800 flex flex-col items-center justify-center">
                            <FaCheck className='text-white'/>
                        </div>
                        <p className='text-sm sm:text-base md:text-lg font-bold dark:text-gray-300 text-gray-700'>
                            Full Stack Development
                        </p>
                    </div>
                </div>
            </div>
                {/*stats content */}
                <div 
  data-aos="zoom-in" 
  data-aos-anchor-placement="top-center" 
  data-aos-delay="150"
  className="grid grid-cols-2 gap-8 md:gap-12 px-4 sm:px-8 md:px-12 lg:px-20 py-8 dark:bg-gray-900 bg-gray-300"
>
  {/* Box 1 */}
  <div className="rounded-lg border border-[#4A62D6] mx-auto p-5 md:p-10 w-full max-w-[220px] hover:scale-95 transition-transform duration-300">
    <p className="mt-3 font-bold text-xl dark:text-white text-blue-700 text-center">
      {aboutInfo.experience}
    </p>
    <p className="text-base sm:text-lg dark:text-gray-400 text-gray-700 text-center">
      Year of Experience
    </p>
  </div>

  {/* Box 2 */}
  <div className="rounded-lg border border-[#4A62D6] mx-auto p-5 md:p-10 w-full max-w-[220px] hover:scale-95 transition-transform duration-300">
    <p className="mt-3 font-bold text-xl dark:text-white text-blue-700 text-center">
      {aboutInfo.Linesofcode}
    </p>
    <p className="text-base sm:text-lg dark:text-gray-400 text-gray-700 text-center">
      Code lines number
    </p>
  </div>

  {/* Box 3 */}
  <div className="rounded-lg border border-[#4A62D6] mx-auto p-5 md:p-10 w-full max-w-[220px] hover:scale-95 transition-transform duration-300">
    <p className="mt-3 font-bold text-xl dark:text-white text-blue-700 text-center">
      {aboutInfo.project}
    </p>
    <p className="text-base sm:text-lg dark:text-gray-400 text-gray-700 text-center">
      Completed Projects
    </p>
  </div>

  {/* Box 4 */}
  <div className="rounded-lg border border-[#4A62D6] mx-auto p-5 md:p-10 w-full max-w-[220px] hover:scale-95 transition-transform duration-300">
    <p className="mt-3 font-bold text-xl dark:text-white text-blue-700 text-center">
      {aboutInfo.certificate}
    </p>
    <p className="text-base sm:text-lg dark:text-gray-400 text-gray-700 text-center">
    Completed Certificate
    </p>
  </div>
</div>


            
        </div>
  {/* Education and Experinece part  */}
        <div className="relative mt-[10rem] px-6">
      {/* Timeline container */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_4fr] gap-6">
        {/* Timeline Line */}
        <div className="hidden md:block relative">
          <div
            className="absolute left-1/2 h-full w-0.5 bg-blue-500"
            data-aos="fade-down"
          ></div>
        </div>

        {/* Content */}
        <div className="space-y-10">
          {/* Experience Section */}
          <div>
            <h2
              className="text-3xl font-bold text-blue-700 mb-6"
              data-aos="fade-right"
            >
              My Experience
            </h2>
            <div className="space-y-6">
              {/* Experience Item 1 */}
              <div
                className="relative flex flex-col gap-2 p-6 bg-white rounded-lg shadow-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-600"
                data-aos="fade-up"
              >
                <h3 className="font-bold text-xl text-blue-700 dark:text-white">
                  Full Stack Web Developer Intern
                </h3>
                <p className="text-gray-600 dark:text-gray-400">ITSOLERA</p>
                <p className="text-gray-500 dark:text-gray-500">
                  August 2024
                </p>
              </div>
              {/* Experience Item 2 */}
              <div
                className="relative flex flex-col gap-2 p-6 bg-white rounded-lg shadow-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-600"
                data-aos="fade-up"
              >
                <h3 className="font-bold text-xl text-blue-700 dark:text-white">
                  Web Developer Intern
                </h3>
                <p className="text-gray-600 dark:text-gray-400">BEHINDEV</p>
                <p className="text-gray-500 dark:text-gray-500">
                  January 2024
                </p>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h2
              className="text-3xl font-bold text-blue-700 mb-6"
              data-aos="fade-right"
            >
              My Education
            </h2>
            <div className="space-y-6">
              {/* Education Item */}
              <div
                className="relative flex flex-col gap-2 p-6 bg-white rounded-lg shadow-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-600"
                data-aos="fade-up"
              >
                <h3 className="font-bold text-xl text-blue-700 dark:text-white">
                  BS Software Engineering
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  The Islamia University of Bahawalpur
                </p>
                <p className="text-gray-500 dark:text-gray-500">
                  Sept 2020 - July 2024
                </p>
                <ul className="list-disc text-gray-600 dark:text-gray-400 ml-6 mt-2">
                  <li>
                    Actively engaged in sports such as cricket and badminton
                    for a healthy and active lifestyle.
                  </li>
                  <li>
                    Contributed as a member of the software engineering
                    community, participating in events and knowledge-sharing
                    initiatives.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    </div>
  )
}

export default About
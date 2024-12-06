import SectionHeading from '@/components/helper/SectionHeading'
import { skillsData } from '@/Data/data'
import React from 'react'
import SkillsCard from './SkillsCard'

const Skills = () => {
  return (
    <div className='pt-16 pb-16 bg-[#191D2B]'>
        <SectionHeading>My Skills</SectionHeading>
        <div className="mt-20 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
        lg:grid-col-4 xl:grid-cols-5 gap-4 items-center">
            {skillsData.map((skill)=>{
                return(
                    <div key={skill.id} className="">
                        <SkillsCard skill={skill}></SkillsCard>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Skills
import { Navlinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div className='fixed h-[12vh] z-[10] bg-blue-950 w-full'>
       <div className='flex item-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto'>
            <h1 className='text-4xl md:text-3xl lg:text-4xl font-bold text-center text-white mt-5' >Portfolio.</h1>
            <div className="flex items-center space-x-10">
              {
                Navlinks.map((navlink)=>{
                  return(
                    <Link key={navlink.id} href={navlink.url}> 
                    <p className='nav__link'>{navlink.label}</p>
                    </Link>
                  )
                })
              }
            </div>
       </div>
    </div>
  )
}

export default Nav
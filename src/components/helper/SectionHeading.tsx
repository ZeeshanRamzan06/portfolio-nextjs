import React ,{ReactNode} from 'react'


type Props = {
    children :ReactNode;
};

const SectionHeading = ({children} : Props) => {
  return (
    <h1 className='dark:bg-blue-800 bg-gray-400 w-fit text-center px-4 py-3 mx-auto dark:text-white text-gray-700 text-2xl sm:text-3xl 
    md:text-4xl uppercase '>
      {children}
    </h1>
  )
}

export default SectionHeading
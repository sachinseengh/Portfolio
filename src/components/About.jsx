import React from 'react'
import about from '../assets/about-500.png'
import { ABOUT_TEXT } from '../constants'

const About = () => {
  return (

    <div className='border-b border-neutral-300 mb-10 pb-10'>

        <h1 className='my-10 mb-20 text-center text-6xl'>About <span className='text-neutral-600'>Me</span></h1>

        <div className='flex flex-wrap'>
        
        <div className='flex items-center justify-center w-full lg:w-1/2 pb-10 '>
            <img src={about} alt="" className='rounded-3xl' />
        </div>
        <div className='flex justify-center items-center w-full lg:w-1/2 lg:pl-5 lg:pr-14 lg:my-5'>
            {ABOUT_TEXT}
        </div>
    </div>
    </div>
    
    
  )
}

export default About
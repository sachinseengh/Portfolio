import React from 'react'
import about from '../assets/about-500.png'
import { ABOUT_TEXT } from '../constants'

import { motion } from 'framer-motion'

const About = () => {
  return (

    <div className='border-b border-neutral-300 mb-10 pb-10'>

        <h1 className='my-10 mb-20 text-center text-6xl'>About <span className='text-neutral-600'>Me</span></h1>

        <div className='flex flex-wrap'>
        
        <motion.div

whileInView={{opacity:1,x:0}}
initial={{opacity:0,x:-100}}
transition={{duration:0.5}}

         className='flex items-center justify-center w-full lg:w-1/2 pb-10 '>
            <img src={about} alt="" className='rounded-3xl' />
        </motion.div>
        <motion.div
        
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:0.5}}
        className='flex justify-center items-center w-full lg:w-1/2 lg:pl-5 lg:pr-14 lg:my-5'>
            {ABOUT_TEXT}
        </motion.div>
    </div>
    </div>
    
    
  )
}

export default About








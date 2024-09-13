import React from 'react'
import profile from '../assets/profile-500.png'
import { HERO_CONTENT } from '../constants'

const Hero = () => {
  return (
    <div className='border-b border-neutral-600  '>
      <div className='flex flex-wrap '>
        <div className='w-full lg:w-1/2 lg:pl-10'>
        <div className='flex flex-col items-center lg:items-start'>

        <h1 className='pb-16 text-4xl tracking-tight font-thin text-6xl lg:mt-16 lg:text-8xl'>Sachin kr Singh</h1>
        <h2 className='pb-5 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>Backend Developer</h2>

        <h2 className='pb-10 font-thin'>{HERO_CONTENT}</h2>
        </div>
        
     
        </div>
        <div className='w-full lg:w-1/2 lg:p-20 lg:pt-0 lg:pr-0'>
        <div className='flex justify-center '>

        <img src={profile} alt="" className='rounded-3xl' />
        </div>
        
        
        </div>
      </div>
    </div>
  )
}

export default Hero
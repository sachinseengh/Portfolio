import React from 'react'
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const Technologies = () => {
  return (
    <div className='border-b border-neutral-600 pb-10'>
        <h1 className='text-5xl text-center pb-20'>Technologies</h1>
        <div className='flex flex-wrap  items-center justify-center flex-row gap-4'>
            <div className=' border-4 rounded-2xl border-neutral-800 p-1'>

            <RiJavascriptFill  className='text-7xl text-yellow-400'/>
            </div>

            <div className='border-4 rounded-2xl border-neutral-800 p-1'>

            <FaReact className='text-7xl text-cyan-400' />
            </div>

            <div className='border-4 rounded-2xl border-neutral-800 p-1'>

            <FaJava className='text-7xl text-red-400' />
            </div>

            <div className='border-4 rounded-2xl border-neutral-800 p-1'>

            <FaWordpress  className='text-7xl text-cyan-400' />
            </div>

            <div className='border-4 rounded-2xl border-neutral-800 p-1'>

            <SiSpringboot  className='text-7xl text-green-700' />
            </div>
            <div className='border-4 rounded-2xl border-neutral-800 p-1'>

            <RiTailwindCssFill   className='text-7xl text-cyan-400' />
            </div>
           
        </div>
    </div>
  )
}

export default Technologies
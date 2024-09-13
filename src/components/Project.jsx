import React from 'react'
import project from '../assets/projects/project-1.jpg'

const Project = () => {
  return (
    <div className='border-b border-neutral-600'>
        <h1 className='text-center text-5xl mb-10'>Projects</h1>
        <div className='mb-8 flex flex-wrap lg:justify-center'>
            <div className='w-full lg:w-1/4'>
            
            <img src={project} alt="" width={150} height={150} className='pb-5' />
            </div>
            <div className=' w-full max-w-xl lg:w-3/4'>
                    <p className='mb-2 font-semibold'>Senior Developer- <span className=''>Google</span></p>
                    <p className=' mb-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque est et maxime quibusdam minus eveniet, a molestiae qui praesentium facilis.</p>

                    <span className='mr-2 rounded bg-neutral-800 text-purple-700 py-1 px-1'>Java</span>
                     <span className='mr-2 rounded bg-neutral-800 text-purple-700 py-1 px-1'>Java</span>
                     <span className='mr-2 rounded bg-neutral-800 text-purple-700 py-1 px-1'>Java</span>
                     <span className='mr-2 rounded bg-neutral-800 text-purple-700 py-1 px-1'>Java</span>
                      <span className='mr-2 rounded bg-neutral-800 text-purple-700 py-1 px-1'>Java</span>
            </div>
        </div>
    </div>
  )
}

export default Project
import React from 'react'

const Experience = () => {
  return (
    <div className='mb-10 border-b border-neutral-700 pb-4'>
        <h1 className='text-center text-5xl my-10'>Experiences</h1>

        <div className='flex flex-wrap  items-center lg:justify-center'>
          <div className='w-full lg:w-1/4'>
          <p className='text-sm mb-2'>Experiene year 2002</p>
          </div>
          <div className='w-full max-w-xl lg:w-3/4'>
          
          <p className='mb-2 font-semibold'>Junior Developer- <span className=''>Google</span></p>
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

export default Experience
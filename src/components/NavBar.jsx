import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa6";


const NavBar = () => {
  return (
    <nav className='mb-5 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <h2 className='text-4xl'>SACHIN</h2>
        </div>

        <div className='m-8 flex items-center justify-center gap-3 text-3xl'>
       
        <FaLinkedin />
        <FaSquareGithub />
        <FaInstagram />
        <CgMail className='text-4xl'/>
        </div>
    </nav>
  )
}

export default NavBar
import React from 'react';
import { FaLinkedin, FaSquareGithub, FaInstagram } from 'react-icons/fa6';
import { CgMail } from 'react-icons/cg';
import { useTypewriter,Cursor } from 'react-simple-typewriter';
const NavBar = () => {


  const [text] = useTypewriter({
    words: ['SACHIN SINGH'],
    loop: 0,  // You can set it to true for infinite loops
    typeSpeed: 150,
    deleteSpeed: 150,
    delaySpeed: 1000,
  });



  return (
    <nav className='mb-5 flex items-center justify-between py-6'>
      
      <div className='flex flex-shrink-0 items-center'>
          {/* Uncomment the logo if needed */}
          {/* <img className='mx-2 w-10' src={logo} alt="Logo" /> */}
          <span className='text-4xl'>{text}</span>
          <span className='text-4xl text-red-600'><Cursor/></span>
         
        </div>

      <div className='m-8 flex items-center justify-center gap-5 text-3xl '>
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/sachin-seengh/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/sachinseengh"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaSquareGithub />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/sacccchhhhiiinn/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        {/* Email */}
        <a
          href="mailto:sachinseengh@gmail.com"
          aria-label="Email"
        >
          <CgMail className='text-4xl' />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
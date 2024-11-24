import React from 'react';
import { FaLinkedin, FaSquareGithub, FaInstagram } from 'react-icons/fa6';
import { CgMail } from 'react-icons/cg';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const NavBar = () => {

  const [text] = useTypewriter({
    words: ['<SACHIN/>'],
    loop: 0,  // You can set it to true for infinite loops
    typeSpeed: 150,
    deleteSpeed: 150,
    delaySpeed: 1000,
  });

  return (
    <nav className='mb-5 flex items-center justify-between py-6'>
      
      <div className='flex flex-shrink-0 items-center '>
        <span className='text-base md:text-2xl lg:text-4xl'>{text}</span>
        <span className='text-sm lg:text-4xl text-red-500'><Cursor/></span>
      </div>

      <div className='m-8  flex items-center justify-center gap-4 text-3xl'>
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/sachin-seengh/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-blue-400 transition-colors text-3xl" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/sachinseengh"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaSquareGithub className="text-white transition-colors text-transparent text-3xl " />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/sacccchhhhiiinn/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram className="text-purple-400 text-3xl" />
        </a>

        {/* Email */}
        <a
          href="mailto:sachinseengh@gmail.com"
          aria-label="Email"
          
        >
          <CgMail className="text-red-500  transition-colors text-4xl" />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;

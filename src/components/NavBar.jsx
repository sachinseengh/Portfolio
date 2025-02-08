import React from 'react';
import { FaLinkedin, FaSquareGithub, FaInstagram } from 'react-icons/fa6';
import { CgMail } from 'react-icons/cg';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const NavBar = () => {

  const [text] = useTypewriter({
    words: ['<SACHIN/>'],
    loop: 0,  // You can set it to true for infinite loops
    typeSpeed: 200,
    deleteSpeed: 200,
    delaySpeed: 1000,
  });

  return (
    <nav className='mb-5 flex items-center justify-between py-6 '>
      
      <div className='flex  items-center w-full '>
        <span className='text-xl md:text-2xl lg:text-4xl  '>{text}<span className='text-sm lg:text-4xl text-red-500'><Cursor/></span></span>
 
      </div>

      <div className='m-8  flex items-center justify-center lg:gap-4 gap-2 '>
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/sachin-seengh/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-blue-400 transition-colors text-xl lg:text-3xl " />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/sachinseengh"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaSquareGithub className="text-white transition-colors text-transparent lg:text-3xl text-xl" />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/sacccchhhhiiinn/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram className="text-purple-400 lg:text-3xl text-xl" />
        </a>

        {/* Email */}
        <a
          href="mailto:sachinseengh@gmail.com"
          aria-label="Email"
          
        >
          <CgMail className="text-red-500  transition-colors lg:text-4xl text-3xl  opacity-70" />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;

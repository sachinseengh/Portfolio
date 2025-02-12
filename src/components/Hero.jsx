import React from "react";
import profilePic from "../assets/profile-500.png";
import { HERO_CONTENT } from "../constants";
import cv from "../assets/SachinkumarSinghCV.pdf";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-700 pb-4 md:pl-10 lg:m-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-start lg:items-start">
            <motion.h1
              variants={container(0.4)}
              initial="hidden"
              animate="visible"
              className="pb-4 lg:pb-7 font-serif tracking-tight lg:mt-16 lg:text-6xl text-4xl   "
            >
              Sachin kr singh
            </motion.h1>

            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Aspiring Backend Developer
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.a
              variants={container(1.2)}
              initial="hidden"
              animate="visible"
              href={cv}
              download="Sachin_Kumar_Singh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 mb-4 text-white bg-blue-500 rounded-3xl hover:bg-blue-600 transition-colors bg-gradient-to-r from-purple-400 to-blue-700 "
            >
              Resume
            </motion.a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center items-center relative">
            {/* Glowing Circular Background */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-400 to-purple-700 blur-2xl opacity-85"
            ></motion.div>

            {/* Profile Image */}
            <motion.img
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              src={profilePic}
              alt="Profile pic"
              className="relative w-96 h-96 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

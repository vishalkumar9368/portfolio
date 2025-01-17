import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Profile from "../assets/profile.png";
import "./Hero.css";

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);

  const textArray = [
    "I'm a Frontend Developer.",
    "I'm a UI/UX and Graphic designer.",
    "I specialize in react.js and MERN Stack.",
    "I build modern web applications.",
    "Let's make something together!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % textArray.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full pt-32 pb-28 mt-10 px-6 text-white bg-black"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 h-full">
        {/* Left column (image) */}
        <div className="w-full md:w-1/3 flex justify-center items-center">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
            className="w-56 h-56
            md:h-64 md:w-64  
          rounded-full border-8  border-double border-t-0 border-r-0 
          shadow-lg shadow-[#dd2476]
    
             overflow-hidden bg-gradient-to-r from-[#ff512f] to-[#dd2476]   floating-image "
          >
            <img
              src={Profile}
              alt="Vishal Kumar"
              className="w-full h-full object-cover "
              style={{
                objectPosition: "10% 12%",
                filter: "brightness(1.050) contrast(1.1) grayscale(0.025)",
              }}
            />
          </motion.div>
        </div>

        {/* Right column (text) */}
        <div className="w-full md:w-2/3 flex flex-col text-center items-center justify-center gap-6 md:text-left p-5">
          {/* Heading */}
          <motion.h1
            initial={{
              opacity: 0,
              y: -50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
            className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff512f] to-[#dd2476] text-center"
          >
            <span className="text-white"> Hi, I'm </span> Vishal Kumar
          </motion.h1>
          {/* Changing text effect */}
          <motion.p
            key={textIndex}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -30,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="text-lg md:text-xl max-w-lg mx-auto loading-relaxed text-gray-200"
          >
            {textArray[textIndex]}
          </motion.p>
          {/* Call to action button */}
          <motion.a
            href="#about"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="sm:w-full md:w-2/3 px-8 py-3 mt-6 bg-gradient-to-r from-[#ff512f] to-[#dd2476] text-white rounded-full shadow-xl  hover:bg-pink-700 transition duration-300 text-center "
          >
            Learn More About Me
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

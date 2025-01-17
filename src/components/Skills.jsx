import React from "react";
import {
  FaBootstrap,
  FaCss3Alt,
  FaFigma,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaSass,
} from "react-icons/fa";
import {
  SiCanva,
  SiExpress,
  SiGit,
  SiInkscape,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-gradient-to-r from-[#ff512f] to-[#dd2476]"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-white">Skills</h2>
        {/* Flexbox with Wrap */}
        <div className="flex flex-wrap justify-center gap-10">
          {/* Frontend */}
          <div className="bg-white text-center p-8 rounded-xl shadow-2xl transform hover:scale-105 transition duration-500 lg:w-[30%]">
            <div className="text-5xl mb-4 text-blue-500">
              <FaReact />
            </div>
            <h3 className="text-2xl mb-4 text-gray-800">
              Frontend Development
            </h3>
            <div className="flex justify-center space-x-4 mb-4">
              <FaHtml5 className="text-orange-500 text-3xl" />
              <FaCss3Alt className="text-blue-500 text-3xl" />
              <FaJs className="text-yellow-500 text-3xl" />
              <SiTailwindcss className="text-teal-500 text-3xl" />
              <FaSass className="text-pink-500 text-3xl" />
              <FaBootstrap className="text-purple-600 text-3xl" />
            </div>
            <p className="text-lg text-gray-700">
              Expertise in React.js, HTML, CSS, JavaScript, and modern frontend
              frameworks to build interactive and responsive UIs.
            </p>
          </div>

          {/* Backend */}
          <div className="bg-white text-center p-8 rounded-xl shadow-2xl transform hover:scale-105 transition duration-500 lg:w-[30%]">
            <div className="text-5xl mb-4 text-green-600">
              <FaNodeJs />
            </div>
            <h3 className="text-2xl mb-4 text-gray-800">Backend Development</h3>
            <div className="flex justify-center space-x-4 mb-4">
              <SiMongodb className="text-green-500 text-3xl" />
              <SiExpress className="text-black text-3xl" />
              <SiGit className="text-orange-500 text-3xl" />

              <SiMysql className="text-blue-500 text-3xl" />
            </div>
            <p className="text-lg text-gray-700">
              Proficient in Node.js, Express.js, MongoDB, and RESTful APIs to
              build efficient backend systems and services.
            </p>
          </div>

          {/* UI/UX Design */}
          <div className="bg-white text-center p-8 rounded-xl shadow-2xl transform hover:scale-105 transition duration-500 lg:w-[30%]">
            <div className="text-5xl mb-4 text-purple-600">
              <FaFigma />
            </div>
            <h3 className="text-2xl mb-4 text-gray-800">UI/UX Design</h3>
            <div className="flex justify-center space-x-4 mb-4">
              <FaFigma className="text-purple-600 text-3xl" />
              <SiCanva className="text-blue-600 text-3xl" />
              <SiInkscape className="text-gray-800 text-3xl" />
            </div>
            <p className="text-lg text-gray-700">
              Skilled in Figma, design principles, and user-centered interfaces
              to create visually engaging user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

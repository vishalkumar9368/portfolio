import React from "react";
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-14 bg-black text-white
    "
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-200 mb-12">About Me</h2>
        <p className="text-md text-gray-300 leading-relaxed mb-16">
          I'm <span className="font-semibold text-pink-400">Vishal Kumar</span>,
          a Web Designer and Developer driven by a love for
          <span className="font-semibold">
            {" "}
            art, creativity, and technology
          </span>
          . Here’s what defines me:
        </p>

        {/* Highlighted Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
          <div className="flex items-center space-x-4">
            <div className=" bg-pink-600 w-12 h-12 flex items-center justify-center rounded-full text-2xl font-bold">
              🎨
            </div>
            <p className="text-gray-300 text-lg">
              An <span>artistic soul</span>, blending creativity and innovation
              in all I do.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className=" bg-blue-600 w-12 h-12 flex items-center justify-center rounded-full text-2xl font-bold">
              {" "}
              💻
            </div>
            <p className="text-gray-300 text-lg">
              Crafting <span>modern and functional</span> user interfaces with
              precision.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className=" bg-green-600 w-12 h-12 flex items-center justify-center rounded-full text-2xl font-bold">
              {" "}
              🖌️
            </div>
            <p className="text-gray-300 text-lg">
              Expertise in <span>UI/UX design</span>, merging visuals with
              functionality.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className=" bg-purple-600 w-12 h-12 flex items-center justify-center rounded-full text-2xl font-bold">
              {" "}
              🚀
            </div>
            <p className="text-gray-300 text-lg">
              Building <span>impactful web experiences</span> users truly enjoy.
            </p>
          </div>
        </div>
        {/* Call-to-action */}
        <div className="mt-20 flex justify-center items-center flex-wrap gap-7">
          <a
            href="#follow"
            className="px-8 py-3 mx-10text-white rounded-full shadow-lg bg-gradient-to-r from-[#ff512f] to-[#dd2476] 
            hover:opacity-95 text-md transition "
          >
            Let's Collaborate
          </a>
          <a
            href="https://drive.google.com/file/d/1LALBCchfXMvRxWlBq-ykZQ2Kx-CEhxcE/view?usp=drivesdk"
            className="px-8 py-3 mx-10 text-white rounded-full shadow-lg border-2 border-[#ff512f] hover:border-[#dd2476]
            hover:opacity-95 text-md transition inline"
          >
            Resume <FaDownload className="inline ml-3" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

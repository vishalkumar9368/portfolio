import React from "react";
import { ProjectCardData } from "./data/Data";
import { useRef } from "react";
import { div, section } from "framer-motion/client";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  // console.log(ProjectCardData);
  // create a reference to a element
  const scrollContainerRef = useRef(null);
  //  function to scroll rignt

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300 });
    }
  };
  //  function to scroll left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
      });
    }
  };
  return (
    <section id="projects" className="py-24 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-white">
          My Projects
        </h2>

        {/* scrollable Project slider */}

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto space-x-6 py-6 scroll-smooth hide-scrollbar"
          >
            {ProjectCardData.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
          {/* Prev and next icons */}
          <div className="flex justify-between mt-6">
            <button
              onClick={scrollLeft}
              className="bg-gradient-to-r from-[#ff512f] to-[#dd2476] 
               hover:opacity-95
              text-white h-10 w-10 py-6 px-6 rounded-full shadow-lg hover:bg-orange-30 flex items-center justify-center text-2xl"
            >
              &lt;
            </button>
            <button
              onClick={scrollRight}
              className="bg-gradient-to-r to-[#ff512f] from-[#dd2476] 
              
              hover:opacity-95
              text-white h-10 w-10 py-6 px-6 rounded-full shadow-lg hover:bg-orange-30 flex items-center justify-center text-2xl "
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

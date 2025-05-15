import React, { useState, useRef } from "react";
import { ProjectCardData } from "./data/Data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("Development");

  // Filtered projects based on selected category
  const filteredProjects = ProjectCardData.filter(
    (project) => project.category === selectedCategory
  );

  // Create a reference to an element
  const scrollContainerRef = useRef(null);

  // Function to scroll right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300 });
    }
  };

  // Function to scroll left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300 });
    }
  };

  return (
    <section id="projects" className="py-24 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-white">
          My Projects
        </h2>

        {/* Category selection buttons */}
        <div className="mb-6">
          <button
            onClick={() => setSelectedCategory("Development")}
            className={`px-6 py-3 mx-2 text-lg font-bold rounded-full transition-all duration-300 ${
              selectedCategory === "Development"
                ? "bg-gradient-to-r from-[#ff512f] to-[#dd2476] text-white"
                : "bg-gray-600 text-white"
            }`}
          >
            Development
          </button>
          <button
            onClick={() => setSelectedCategory("UI/UX")}
            className={`px-6 py-3 mx-2 text-lg font-bold rounded-full transition-all duration-300 ${
              selectedCategory === "UI/UX"
                ? "bg-gradient-to-r from-[#ff512f] to-[#dd2476] text-white"
                : "bg-gray-600 text-white"
            }`}
          >
            UI/UX Design
          </button>
        </div>

        {/* Scrollable Project slider */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto space-x-6 py-6 scroll-smooth hide-scrollbar"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

          {/* Prev and next icons */}
          <div className="flex justify-between mt-6">
            <button
              onClick={scrollLeft}
              className="bg-gradient-to-r from-[#ff512f] to-[#dd2476] hover:opacity-95 text-white h-10 w-10 py-6 px-6 rounded-full shadow-lg hover:bg-orange-30 flex items-center justify-center text-2xl"
            >
              &lt;
            </button>
            <button
              onClick={scrollRight}
              className="bg-gradient-to-r to-[#ff512f] from-[#dd2476] hover:opacity-95 text-white h-10 w-10 py-6 px-6 rounded-full shadow-lg hover:bg-orange-30 flex items-center justify-center text-2xl"
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

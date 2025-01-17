import { div } from "framer-motion/client";
import React from "react";
import { FaEye, FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  // we will first add colors for the particular tag- we will create a method that will return color accrding to the name of the tag

  const getTagColor = (tech) => {
    // rather then creating multiple if else i will create a switch statement

    switch (tech) {
      case "React":
        return "bg-blue-700";
      case "Node.js":
        return "bg-green-600";
      case "MongoDB":
        return "bg-green-800";
      case "Javascript":
        return "bg-yellow-400";
      case "HTML":
        return "bg-orange-500";
      case "CSS":
        return "bg-blue-500";
      case "Tailwind CSS":
        return "bg-yellow-500";
      case "Firebase":
        return "bg-orange-400";
      case "Figma":
        return "bg-fuchsia-500";
      case "UI/UX Design":
        return "bg-sky-500";
      case "Prototype":
        return "bg-teal-500";
      default:
        return "bg-gray-500";
    }
  };
  return (
    <div className="flex-none w-[280px] h-[380px] bg-[#ffffff] text-centre p-3 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
      <div className="mb-6 relative">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-[130px] object-cover rounded-lg"
        />
      </div>
      <h3 className="text-xl font-semibold mb-4 text-black ">{project.name}</h3>
      <p className="text-sm text-gray-600 mb-6">{project.description}</p>
      {/* Technology Stack with colorful tags */}
      <div
        className="flex justify-center items-center flex-wrap 
 mb-6 gap-2"
      >
        {project.tech.map((item, idx) => (
          <span
            key={idx}
            className={`text-white text-[10px] py-1 px-3 rounded-full ${getTagColor(
              item
            )} whitespace-nowrap`}
          >
            {item}
          </span>
        ))}
      </div>

      {/* Links below (Text Styled) */}
      <div className="flex justify-between mt-4 ">
        <a
          href={project.demoLink}
          className="inline-block text-blue-500 text-sm font-semibold hover:text-blue-700"
        >
          <FaEye className="inline-block mr-1 ml-1" /> View Project
        </a>
        {project.codeLink && (
          <a
            href={project.codeLink}
            className="inline-block text-gray-700 text-sm font-semibold hover:text-gray-900 mr-1"
          >
            <FaGithub className="inline-block mr-1 " /> View Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

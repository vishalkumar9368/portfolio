import React from "react";

import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white fixed w-full z-50 top-0 border-b-[1px] border-[#ff512f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold sm:text-lg">
            <a href="#hero">
              <span className="text-[#ff512f]">Vishal </span>Kumar
            </a>
          </div>

          {/* Dekstop Links */}
          <div className="hidden md:flex space-x-6">
            <a
              href="#about"
              className="hover:text-[#ff512f] transition duration-300 ease-in-out"
            >
              About
            </a>
            <a
              href="#skills"
              className="hover:text-[#ff512f]  transition duration-300 ease-in-out"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-[#ff512f]  transition duration-300 ease-in-out"
            >
              Projects
            </a>
            <a
              href="#follow"
              className="hover:text-[#ff512f]  transition duration-300 ease-in-out"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu icon- hidden for larger screens */}

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-[#ff512f]  focus:outline-none transition duration-300 ease-in-out"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 transition duration-300 ease-in-out ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 transition duration-300 ease-in-out ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile links - same as dekstop but different styling */}

      <div
        className={`md:hidden text-center overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <a
          href="#about"
          className="block px-4 py-4 hover:text-[#ff512f]  transition duration-300 ease-in-out"
          onClick={() => setIsOpen(false)}
        >
          About
        </a>
        <a
          href="#skills"
          className="block px-4 py-4 hover:text-[#ff512f]  transition duration-300 ease-in-out"
          onClick={() => setIsOpen(false)}
        >
          Skills
        </a>
        <a
          href="#projects"
          className="block px-4 py-4 hover:text-[#ff512f]  transition duration-300 ease-in-out"
          onClick={() => setIsOpen(false)}
        >
          Projects
        </a>
        <a
          href="#follow"
          className="block px-4 py-4 hover:text-[#ff512f] transition duration-300 ease-in-out"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

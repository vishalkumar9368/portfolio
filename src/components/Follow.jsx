import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Follow = () => {
  return (
    <section id="follow" className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Connect With Me</h2>
        <p className="text-lg text-gray-400 mb-12 px-4">
          Stay connected and follow my journey on these platforms or reach out
          directly via email.
        </p>
        <div className="flex justify-center space-x-10 mb-8">
          {/* Github */}
          <a
            href="https://github.com/VishalKumar1902"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-all duration-300 hover:rotate-6 "
          >
            <FaGithub className="text-4xl text-gray-300 hover:text-gray-400" />
          </a>
          {/* linkedin */}
          <a
            href="https://www.linkedin.com/in/vishal-kumar-b27bba291/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-all duration-300 hover:rotate-6 "
          >
            <FaLinkedin className="text-4xl text-blue-500 hover:text-blue-600" />
          </a>
          {/* Twitter */}
          {/* <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-all duration-300 hover:rotate-6 "
          >
            <FaTwitter
              className="text-4xl text-sky-400 
             hover:text-sky-600"
            />
          </a> */}
          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com/vishal_kmr._/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-all duration-300 hover:rotate-6 "
          >
            <FaInstagram className="text-4xl text-pink-500 hover:text-pink-600" />
          </a>
          {/* Facebook Icon */}
          <a
            href="https://www.facebook.com/Vishalkumar192000"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-all duration-300 hover:rotate-6 "
          >
            <FaFacebook className="text-4xl text-blue-500 hover:text-blue-600" />
          </a>
          {/* Email Icon */}
          <a
            href="mailto:vishalkumarnbd19@gmail.com"
            className="transform transition-all duration-300 hover:rotate-6 "
          >
            <FaEnvelope className="text-4xl text-red-500 hover:text-red-600" />
          </a>
        </div>

        <p className="text-lg text-gray-400 mt-12 px-4">
          Feel free to reach out to me anytime via email or connect on any of
          these platforms!
        </p>
      </div>
    </section>
  );
};

export default Follow;

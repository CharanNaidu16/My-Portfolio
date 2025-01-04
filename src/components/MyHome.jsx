import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import profileImg from "../assets/profile-pic (1).png";
import TextChange from "./TextChange";
import Resume from "../assets/Charan_B_resume (6).pdf";

const MyHome = () => {
  return (
    <div
      id="home"
      className="flex flex-col md:flex-row justify-center items-center gap-8 p-5 h-screen bg-gray-900"
    >
      <div className="flex flex-col items-center">
        <img
          className=" custom-500:max-w-[100px] mt-10 sm: max-w-[150px] md:max-w-[250px] lg:max-w-[350px] rounded-full border-4 border-gray-700 shadow-lg"
          src={profileImg}
          alt="profile"
        />

        <div className="flex space-x-6 mt-4">
          <a
            href="mailto:charanbabu540@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-200 hover:scale-110"
          >
            <FaEnvelope className="h-8 w-8 text-gray-300 hover:text-blue-400" />
          </a>
          <a
            href="https://linkedin.com/in/charan-b-727816281"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-200 hover:scale-110"
          >
            <FaLinkedin className="h-8 w-8 text-gray-300 hover:text-blue-400" />
          </a>
          <a
            href="https://github.com/CharanNaidu16"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-200 hover:scale-110"
          >
            <FaGithub className="h-8 w-8 text-gray-300 hover:text-blue-400" />
          </a>
        </div>
      </div>

      <div className=" flex flex-col items-center text-center md:text-left bg-gray-800 p-6 rounded-lg shadow-md w-full md:w-[60%] lg:w-[50%]">
        <h3 className="text-xl md:text-2xl lg:text-3xl text-gray-400">
          Hello, I'm
        </h3>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
          Charan B
        </h1>
        <h3 className="text-lg md:text-xl lg:text-2xl text-gray-300">
          <TextChange />
        </h3>

        <p className="max-w-prose text-sm md:text-base lg:text-lg mt-4 text-gray-200">
          I am a Computer Science graduate with a strong foundation in backend
          software development, specializing in creating efficient, scalable,
          and user-friendly applications. With expertise in Python and Django, I
          build dynamic, high-performance backend systems and APIs.
          Additionally, I am proficient in React, Redux, MongoDB, Tailwind CSS,
          Bootstrap, HTML, CSS, and JavaScript, allowing me to develop both
          frontend and backend solutions. Passionate about technology, I
          continuously stay updated with industry trends and best practices to
          deliver robust, performance-driven software.
        </p>

        <a href={Resume} download>
          <button className=" sm:mt-8 bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-blue-500">
            Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default MyHome;

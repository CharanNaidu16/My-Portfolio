import React from "react";
import { IoArrowForward } from "react-icons/io5";

const Experience = () => {
  return (
    <div
      id="experience"
      className="text-white flex flex-col items-center shadow-lg mx-0 md: bg-opacity-80 p-8 md:p-12 bg-gray-900"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Experience
      </h2>
      <div className="flex flex-col md:flex-row items-start justify-center w-full">
        {/* EIM Solutions */}
        <div className="flex flex-col items-start w-full md:w-3/4 lg:w-2/3 p-4 bg-gray-800 rounded-lg shadow-md mb-6">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">EIM Solutions</h3>
          <p className="text-md md:text-lg mb-4 text-gray-400">
            FEB 2024 - APR 2024
          </p>
          <h4 className="text-xl md:text-2xl font-semibold leading-normal mb-4">
            CBP Developer Intern
          </h4>
          <ul className="text-md md:text-lg leading-tight list-disc list-inside space-y-2">
            <li className="flex items-start gap-2">
              <IoArrowForward size={20} className="mt-1 text-blue-400" />
              Gained expertise in various database technologies including
              MongoDB, JSON, and NoSQL, effectively utilizing these tools to
              optimize development and deployment workflows, enhancing overall
              efficiency and performance.
            </li>
            <li className="flex items-start gap-2">
              <IoArrowForward size={20} className="mt-1 text-blue-400" />
              Contributed to the improvement of database management and data
              handling techniques for distributed environments, ensuring more
              efficient, reliable, and scalable systems while improving overall
              development practices.
            </li>
            <li className="flex items-start gap-2">
              <IoArrowForward size={20} className="mt-1 text-blue-400" />
              Engaged with various teams to integrate features and address
              technical challenges, enhancing teamwork and project execution.
            </li>
          </ul>
        </div>

        {/* Ethnotech Solutions */}
        <div className="flex flex-col items-start w-full md:w-3/4 lg:w-2/3 p-4 bg-gray-800 rounded-lg shadow-md mb-6">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            Ethnotech Solutions
          </h3>
          <p className="text-md md:text-lg mb-4 text-gray-400">
            AUG 2022 - DEC 2022
          </p>
          <h4 className="text-xl md:text-2xl font-semibold leading-normal mb-4">
            Software Developer Intern
          </h4>
          <ul className="text-md md:text-lg leading-tight list-disc list-inside space-y-2">
            <li className="flex items-start gap-2">
              <IoArrowForward size={20} className="mt-1 text-blue-400" />
              Gained hands-on experience in building both frontend and backend
              components of web applications using React.js for the frontend and
              Python for the backend, creating scalable, high-performance
              solutions.
            </li>
            <li className="flex items-start gap-2">
              <IoArrowForward size={20} className="mt-1 text-blue-400" />
              Actively contributed to the design and development of dynamic user
              interfaces, implementing responsive design principles and creating
              a seamless user experience that optimized both performance and
              usability.
            </li>
            <li className="flex items-start gap-2">
              <IoArrowForward size={20} className="mt-1 text-blue-400" />
              Engaged in database management with MongoDB, MySQL, and NoSQL
              technologies, optimizing data retrieval through efficient
              indexing, ensuring data integrity and security while maintaining
              scalability.
            </li>
            <li className="flex items-start gap-2">
              <IoArrowForward size={20} className="mt-1 text-blue-400" />
              Collaborated across cross-functional teams to integrate features
              and resolve technical challenges, streamlining workflows and
              improving overall project execution in an agile environment.
            </li>
            <li className="flex items-start gap-2">
              <IoArrowForward size={20} className="mt-1 text-blue-400" />
              Oversaw version control with Git, promoting collaboration through
              effective code reviews and integration workflows.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;

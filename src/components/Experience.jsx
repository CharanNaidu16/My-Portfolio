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
        <div className="flex flex-col items-start w-full md:w-3/4 lg:w-2/3 p-4 bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">Tru Herb</h3>
          <p className="text-md md:text-lg mb-4 text-gray-400">
            JUN 2024 - SEP 2024
          </p>
          <h4 className="text-xl md:text-2xl font-semibold leading-normal mb-4">
            Frontend Developer
          </h4>
          <ul className="text-md md:text-lg leading-tight list-disc list-inside space-y-2">
            <li className="flex items-start gap-2">
              <IoArrowForward size={20} className="mt-1 text-blue-400" />
              Developed frontend web applications using HTML, CSS, JavaScript,
              and React.js, focusing on responsive and user-friendly interfaces.
            </li>
            <li className="flex items-start gap-2">
              <IoArrowForward size={20} className="mt-1 text-blue-400" />
              Contributed to the design and development of engaging user
              interfaces, implementing dynamic components and responsive design
              principles.
            </li>
            <li className="flex items-start gap-2">
              <IoArrowForward size={20} className="mt-1 text-blue-400" />
              Collaborated with cross-functional teams to align project goals,
              enhancing the development process and ensuring high-quality
              deliverables.
            </li>
            <li className="flex items-start gap-2">
              <IoArrowForward size={20} className="mt-1 text-blue-400" />
              Managed and optimized database operations, ensuring efficient data
              retrieval and maintaining data integrity and security.
            </li>
            <li className="flex items-start gap-2">
              <IoArrowForward size={20} className="mt-1 text-blue-400" />
              Enhanced application performance using techniques such as lazy
              loading and code splitting, improving load times and user
              satisfaction.
            </li>
            <li className="flex items-start gap-2">
              <IoArrowForward size={20} className="mt-1 text-blue-400" />
              Conducted user testing sessions and gathered feedback to identify
              usability challenges, facilitating iterative enhancements.
            </li>
            <li className="flex items-start gap-2">
              <IoArrowForward size={20} className="mt-1 text-blue-400" />
              Oversaw version control with Git, promoting collaboration through
              effective code review practices and integration workflows.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;

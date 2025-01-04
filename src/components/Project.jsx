import React, { useState } from "react";

import img1 from "../assets/2nd photo.jpg";
import img2 from "../assets/finance tracker new.jpg";
import img3 from "../assets/Screenshot (15).png";

const images = [
  {
    name: "Discord Room",
    tools: "Django, Python, PostgreSQL",
    image: img3,
  },
  {
    name: "Finance Tracker",
    tools: "React, Tailwind, Redux",
    image: img2,
  },
  {
    name: "Diabetic Retinopathy using Deep Learning",
    tools: "Python, Deep Learning",
    image: img1,
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div id="projects" className="custom-500:mt-20 sm: w-full p-5 bg-gray-900">
      <h2 className="text-3xl font-bold text-white mb-4 text-center">
        Projects
      </h2>

      <div className=" hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group rounded-lg overflow-hidden"
          >
            <img
              src={image.image}
              alt={image.name}
              className="w-full h-64 object-cover transition-transform duration-300 rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              <div className="text-white text-center">
                <h3 className="text-xl font-bold">{image.name}</h3>
                <p>{image.tools}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="md:hidden relative w-full h-64 overflow-hidden">
        <div className="relative group rounded-lg overflow-hidden">
          <img
            src={images[currentIndex].image}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-300 rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-100 transition-opacity duration-300 ease-in-out">
            <div className="text-white text-center">
              <h3 className="text-xl font-bold">{images[currentIndex].name}</h3>
              <p>{images[currentIndex].tools}</p>
            </div>
          </div>
        </div>

        <button
          onClick={prevImage}
          aria-label="Previous project"
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
        >
          &#10094;
        </button>
        <button
          onClick={nextImage}
          aria-label="Next project"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
        >
          &#10095;
        </button>
      </div>

      <div className="mt-4 text-center">
        <a
          href="https://github.com/CharanNaidu16"
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          View All Projects
        </a>
      </div>
    </div>
  );
};

export default Projects;

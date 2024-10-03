import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ onProjectsClick, onOtherSectionClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
      setIsOpen(false); // Close sidebar after navigation
    }
  };

  const handleClick = (e, section) => {
    if (section.id === "projects") {
      onProjectsClick();
    } else {
      onOtherSectionClick();
      scrollToSection(e, section.id);
    }
    setIsOpen(false); // Close sidebar
  };

  const sections = [
    { name: "Home", id: "home" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Certificates", id: "certificates" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header className="bg-gray-900 text-white p-4 shadow-md fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <nav className="hidden md:flex space-x-6">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => handleClick(e, section)}
              className="hover:text-blue-400 transition-colors duration-200"
            >
              {section.name}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={toggleSidebar}>
            <FaBars size={24} />
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className="absolute inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-gray-800 text-white transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={toggleSidebar}>
            <FaTimes size={24} />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => handleClick(e, section)}
              className="hover:text-blue-400 transition-colors duration-200"
            >
              {section.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

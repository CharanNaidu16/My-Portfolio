import React, { useState } from "react";
import MyHome from "./components/MyHome";
import Skill from "./components/Skill";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Contacts from "./components/Contacts";
import Projects from "./components/Project";
import Navbar from "./components/Navbar";
import AllProjects from "./components/AllProjects";

const App = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const handleProjectClick = () => {
    setShowAllProjects(true);
  };

  const handleOtherSectionClick = () => {
    setShowAllProjects(false);
  };

  return (
    <div className="bg-gray-900 text-white">
      <Navbar
        onProjectsClick={handleProjectClick}
        onOtherSectionClick={handleOtherSectionClick}
      />
      <MyHome />
      {showAllProjects ? <AllProjects /> : <Projects />}
      <Skill />
      <Experience />
      <Certificates />
      <Contacts />
    </div>
  );
};

export default App;

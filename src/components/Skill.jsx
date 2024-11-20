import React from "react";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaDatabase,
  FaJava,
  FaGithub,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";
import {
  SiRedux,
  SiBootstrap,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";

const Skill = () => {
  return (
    <section
      id="skills"
      className="p-6 md:p-10 lg:p-24 bg-gray-900 bg-opacity-80 rounded-lg"
    >
      <h1 className="text-xl md:text-2xl lg:text-4xl text-white font-bold mb-4 text-center">
        Skills
      </h1>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
        {[
          { Icon: FaHtml5, name: "HTML5", color: "#E34F26" },
          { Icon: FaCss3, name: "CSS", color: "#1572B6" },
          { Icon: FaJs, name: "JavaScript", color: "#F7DF1E" },
          { Icon: FaReact, name: "React", color: "#61DAFB" },
          { Icon: SiRedux, name: "Redux", color: "#764ABC" },
          { Icon: SiBootstrap, name: "Bootstrap", color: "#563D7C" },
          { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
          { Icon: SiMysql, name: "MySQL", color: "#00758F" },
          { Icon: FaJava, name: "Java", color: "#007396" },
          { Icon: FaGithub, name: "GitHub", color: "#171515" },
          { Icon: FaGitAlt, name: "Git", color: "#F34F29" },
          { Icon: FaDatabase, name: "DBMS", color: "#F34F29" },
          { Icon: FaPython, name: "Python", color: "#306998" },
          { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#38B2AC" },
          { Icon: SiMysql, name: "SQL", color: "#00758F" },
          { Icon: FaDatabase, name: "OOPs", color: "#F34F29" },
          { Icon: FaDatabase, name: "DSA", color: "#00758F" },
        ].map(({ Icon, name, color }) => (
          <div
            key={name}
            className="flex flex-col items-center transition-transform transform hover:scale-110"
          >
            <span className="p-3 bg-gray-800 flex items-center rounded-full mb-2">
              <Icon color={color} size={50} aria-label={name} title={name} />
            </span>
            <span className="text-white text-center text-sm md:text-base">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;

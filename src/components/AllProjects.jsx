import React from "react";
import img1 from "../assets/2nd photo.jpg";
import FinanceImg from "../assets/finance tracker new.jpg";
import socialImg from "../assets/social.jpg";
import rockPaper from "../assets/rock.png";
import Todo from "../assets/ToDo.png";
import discord from "../assets/Screenshot (15).png";

const projects = [
  {
    name: "Discord Room",
    tools: "Django, Python, PostgreSQL, Html, Css",
    description: [
      "Developed a comprehensive Discord-inspired platform that allows users to create and manage public rooms, facilitating seamless communication and collaboration.",
      "Integrated real-time chat functionality, enabling instantaneous messaging between users within rooms, ensuring active interaction and engagement.",
      "Implemented secure user authentication to ensure only verified users can create or join rooms, with customizable access control for enhanced privacy and security",
    ],
    image: discord,
    link: "https://github.com/CharanNaidu16/Discord",
  },
  {
    name: "Finance Tracker",
    tools: "React, Tailwind, Redux",
    description: [
      "Developed a fully responsive finance tracker application using React and Tailwind CSS, enabling users to efficiently monitor and manage their income, expenses, and savings through an intuitive and user-friendly interface.",
      "Integrates with an API to convert currencies for easy financial management.",
      "Tracks financial news using another API to keep users informed about market trends.",
    ],
    image: FinanceImg,
    link: "https://github.com/CharanNaidu16/Finance-Tracker.git",
  },
  {
    name: "Post Master",
    tools: "React, Bootstrap, JS",
    description: [
      "Developed a dynamic social media application with React.js to deliver a responsive and interactive user interface.",
      "Allows users to create, delete, and interact with posts through likes and other reactions, enhancing engagement and usability within the app.",
      "Utilized Bootstrap for a visually appealing and responsive design, ensuring a consistent and attractive user experience across various devices and screen sizes.",
    ],
    image: socialImg,
    link: "https://github.com/CharanNaidu16/PostMaster.git",
  },
  {
    name: "Diabetic Retinopathy using Deep Learning",
    tools: "Python, ML",
    description: [
      "Uses deep learning to analyze retinal images.",
      "Detects early signs of diabetic retinopathy.",
      "Provides a user-friendly interface for doctors.",
    ],
    image: img1,
    link: "https://github.com/your-repo/deep-learning-project",
  },
  {
    name: "Rock-Paper-Scissors Game",
    tools: "Html ,CSS, JS",
    description: [
      "Players choose between Rock, Paper, or Scissors using buttons. The game captures their choice and generates a random selection for the computer.",
      "The outcome is determined based on the classic rules: Rock crushes Scissors, Scissors cut Paper, and Paper covers Rock. Results (win, lose, tie) are displayed to the user.",
      "The game is built using HTML, CSS, and JavaScript, ensuring a visually appealing layout that provides a smooth user experience.",
    ],
    image: rockPaper,
    link: "https://github.com/CharanNaidu16/Rock-Paper-Scissor-Game.git",
  },
  {
    name: "To Do App",
    tools: "React, JS, Bootstrap",
    description: [
      "Implements React state management to allow users to add, edit, and delete tasks with immediate visual feedback.",
      "Utilizes Bootstrap for a mobile-friendly interface, ensuring a seamless experience across all devices.",
      " Includes features for users to filter and sort tasks by categories or due dates, enhancing task management and organization.",
    ],
    image: Todo,
    link: "https://github.com/CharanNaidu16/ToDo--App-using-React.git",
  },
];

const AllProjects = () => {
  return (
    <div id="projects" className="p-5 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-4 shadow-lg">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold">{project.name}</h2>
            <p className="text-sm text-gray-400">{project.tools}</p>
            <ul className="mt-2 list-disc list-inside">
              {project.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg transition-transform duration-200 hover:scale-105"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;

import styles from "./Projects.module.css";
import socialMedia from "../../assets/social.jpg";
import Todo from "../../assets/91356b98-9f98-4d0d-9062-cb454359e6cc.jpg";

import ProjectCard from "../../coomon/ProjectCard";
import DiabetciImg from "../../assets/2nd photo.jpg";
const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectioTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={socialMedia}
          link="https://github.com/CharanNaidu16/PostMaster"
          h3="SocialMedia app"
          p="PostMaster is a dynamic social media app built with React, Redux, and Bootstrap. Utilizing HTML, CSS, and JavaScript for foundational elements, the app offers users a seamless experience to create, delete, and react to posts with likes and other reactions. The integration of Redux for state management ensures efficient data handling, while Bootstrap provides a responsive and visually appealing design across all devices."
        />
      </div>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Todo}
          link="https://github.com/CharanNaidu16/ToDo--App-using-React.git"
          h3="ToDo App"
          p="A React To-Do App utilizing Bootstrap provides an elegant, responsive design for task management. With Bootstrap’s styling for forms, buttons, and lists, users can easily add, complete, and remove tasks according to their need.
          The app was created using Html,CSS,JavaScript,Reactand Bootsrap."
        />
      </div>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={DiabetciImg}
          h3="Diabetic Retinopathy using Deep Learning"
          p="To develop a deep learning model for automated Diabetic Retinopathy(DR) detection from retinal images.The aim is to investigate the dataset using Convolutional Neural Networks (CNN). To assess the clinical implication of the developed deep learning model, including early detection and treatment of DR, reducing the workload of ophthalmologists, and improving patient outcomes."
        />
      </div>
    </section>
  );
};

export default Projects;

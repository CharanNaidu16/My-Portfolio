import styles from "./MainDisplay.module.css";
import heroImg from "../../assets/profile-pic (1).png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import gmailLight from "../../assets/email.png";
import gmailDark from "../../assets/logo.png";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/Charan_B_resume.pdf";
import { useTheme } from "../../coomon/ThemeContext";

const MainDisplay = () => {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const gmailIcon = theme === "light" ? gmailLight : gmailDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="main" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile Picture of Charan"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>Charan B</h1>
        <h2>Versatile Developer</h2>
        <span className={styles.iconContainer}>
          <a href="https://linkedin.com/in/charan-b-727816281" target="_blank">
            <img src={linkedinIcon} alt=" linkedin icon" />
          </a>
          <a href="mailto:charanbabu540@gmail.com" target="_blank">
            <img className={styles.mail} src={gmailIcon} alt=" gmail icon" />
          </a>

          <a href="https://github.com/CharanNaidu16" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
        </span>
        <p className={styles.description}>
          Motivated frontend developer and software engineer with a solid
          understanding of web development fundamentals. Experienced in building
          projects with HTML, CSS, and JavaScript,React and eager to gain
          hands-on experience with modern frameworks. Committed to delivering
          high-quality work and driven by a passion for technology and
          problem-solving. Looking forward to contributing to a collaborative
          team and growing professionally.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
};

export default MainDisplay;

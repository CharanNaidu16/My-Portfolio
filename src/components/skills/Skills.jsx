import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillList from "../../coomon/SkillList";
import { useTheme } from "../../coomon/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML5" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Redux" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
        <SkillList src={checkMarkIcon} skill="MongoDb" />
        <SkillList src={checkMarkIcon} skill="Data structures" />
        <SkillList src={checkMarkIcon} skill="Machine Learning" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="DBMS" />
        <SkillList src={checkMarkIcon} skill="MySQl" />
        <SkillList src={checkMarkIcon} skill="Java" />
        <SkillList src={checkMarkIcon} skill="Github" />
        <SkillList src={checkMarkIcon} skill="Git" />
      </div>
    </section>
  );
}

export default Skills;

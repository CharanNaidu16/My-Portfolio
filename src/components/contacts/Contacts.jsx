import styles from "./ContactStyles.module.css";
import { IoCallOutline } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <div className={styles.phone}>
        <h4>
          {" "}
          <IoCallOutline />
        </h4>
        <h4>9353124651</h4>
      </div>
      <a
        href="mailto:charanbabu540@gmail.com"
        target="_blank"
        className={styles.contactlink}
      >
        <h4>
          {" "}
          <CgMail />
        </h4>
        <h4>charanbabu540@gmail.com</h4>
      </a>
      <a
        href="https://linkedin.com/in/charan-b-727816281"
        target="_blank"
        className={styles.contactlink}
      >
        <h4>
          {" "}
          <FaLinkedin />
        </h4>
        <h4> linkedin.com/in/charan-b-727816281</h4>
      </a>
      <a
        href="https://github.com/CharanNaidu16"
        target="_balnk"
        className={styles.contactlink}
      >
        <h4>
          {" "}
          <FaGithub />
        </h4>
        <h4>github.com/CharanNaidu16</h4>
      </a>
    </section>
  );
}

export default Contact;

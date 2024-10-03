import { IoCallOutline } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contacts = () => {
  return (
    <section
      id="contact"
      className="p-6 md:p-10 lg:p-24 bg-gray-900 bg-opacity-80 rounded-lg flex flex-col items-center"
    >
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold mb-6 text-center">
        Contact
      </h1>
      <div className="flex items-center mb-4 text-center md:text-left">
        <h4 className="text-gray-400 mr-2">
          <IoCallOutline size={20} />
        </h4>
        <h4 className="text-white">9353124651</h4>
      </div>
      <a
        href="mailto:charanbabu540@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center mb-4 text-gray-400 hover:text-blue-400 transition duration-200"
      >
        <h4 className="mr-2">
          <CgMail size={20} />
        </h4>
        <h4 className="text-white">charanbabu540@gmail.com</h4>
      </a>
      <a
        href="https://linkedin.com/in/charan-b-727816281"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center mb-4 text-gray-400 hover:text-blue-400 transition duration-200"
      >
        <h4 className="mr-2">
          <FaLinkedin size={20} />
        </h4>
        <h4 className="text-white">linkedin.com/in/charan-b-727816281</h4>
      </a>
      <a
        href="https://github.com/CharanNaidu16"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-gray-400 hover:text-blue-400 transition duration-200"
      >
        <h4 className="mr-2">
          <FaGithub size={20} />
        </h4>
        <h4 className="text-white">github.com/CharanNaidu16</h4>
      </a>
    </section>
  );
};

export default Contacts;

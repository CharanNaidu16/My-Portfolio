import "./App.css";
import Certificates from "./components/certificates/Certificates";
import Contact from "./components/contacts/Contacts";
import MainDisplay from "./components/MainDisplay/MainDisplay";

import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <>
      <MainDisplay />
      <Projects />

      <Skills />
      <Certificates />
      <Contact />
    </>
  );
}

export default App;

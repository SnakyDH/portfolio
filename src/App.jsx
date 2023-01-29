//React
import { useState } from "react";
//Utils
import "./css/index.css";
//Components
import { Header } from "./Components/Header";
import { SectionMe } from "./Components/SectionMe";
import { SectionAwards } from "./Components/SectionAwards";
import { SectionSkills } from "./Components/SectionSkills";
import { SectionProjects } from "./Components/SectionProjects";
import { SectionContact } from "./Components/SectionContact";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <hr id="Home" className="invisible" />
      <SectionMe />
      <hr id="Projects" className="py-10 invisible" />
      <SectionProjects />
      <hr id="Awards" className="py-10 invisible" />
      <SectionAwards />
      <hr id="Skills" className="py-10 invisible" />
      <SectionSkills />
      <hr id="Contacts" className="py-10 invisible" />
      <SectionContact />
      <Footer></Footer>
    </>
  );
}

export default App;

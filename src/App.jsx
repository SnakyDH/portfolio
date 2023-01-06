//React
import { useState } from "react";
//Utils
import "./css/index.css";
//Components
import { Header } from "./Components/Header";
import { SectionMe } from "./Components/SectionMe";
import { SectionGoals } from "./Components/SectionGoals";
import { SectionSkills } from "./Components/SectionSkills";
import { SectionProjects } from "./Components/SectionProjects";
import { SectionContact } from "./Components/SectionContact";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <SectionMe />
      <SectionSkills />
      <SectionGoals />
      <SectionProjects />
      <SectionContact />
      <Footer></Footer>
    </>
  );
}

export default App;

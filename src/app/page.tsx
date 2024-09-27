import {Header} from "./components/Header";
import AboutMe from "./components/sections/AboutMe/AboutMe";
import Skills from "./components/sections/Skills/Skills";
import {Footer} from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <AboutMe />
      <Skills />
      <Footer />
    </>
  );
}

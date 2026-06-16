import Intro from "@/components/Intro";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import ContactMe from "@/components/ContactMe";

export const metadata = {
  title: 'Home - Deric Navino',
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <div id="home" className="min-h-screen flex items-center justify-center">
        <Intro />
      </div>
      <div id="about" className="min-h-screen flex items-start justify-center pt-24">
        <AboutMe />
      </div>
      <div id="projects" className="min-h-screen flex items-start justify-center pt-24">
        <Projects />
      </div>
      <div id="skills" className="min-h-screen flex items-start justify-center pt-24">
        <Skills />
      </div>
      <div id="contact" className="min-h-screen flex items-start justify-center">
        <ContactMe />
      </div>
    </div>
  );
}

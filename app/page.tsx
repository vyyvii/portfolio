import Image from "next/image";
import Hero from "../components/hero"
import About from "../components/about"
import Project from "../components/project"
import Contact from "../components/contact"
import { projects } from "../components/projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
      <Contact />
    </main>
  );
}

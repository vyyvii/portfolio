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
      <section className="relative min-h-[200vh]">
        <h2 className="mt-20 text-right text-5xl text-[var(--accent-blue)] font-black sticky top-8">
          PROJECTS
        </h2>
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </section>
      <Contact />
    </main>
  );
}

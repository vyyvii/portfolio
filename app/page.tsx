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

      <section id="project"
        className="lg:relative lg:min-h-[200vh]">
        <h2 className="
              mt-20 px-12
              lg:text-right text-3xl lg:text-4xl text-[var(--accent-blue)] font-black
              lg:sticky lg:top-8">
          What I've built
        </h2>
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </section>

      <Contact />
    </main>
  );
}

import Image from "next/image";
import Hero from "../components/hero"
import About from "../components/about"
import Project from "../components/project"
import Contact from "../components/contact"

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Project />
      <Project />
      <Project />
      <Contact />
    </main>
  );
}

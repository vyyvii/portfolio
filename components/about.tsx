export default function About() {
  return (
    <section id="about"
      className="px-12 py-45 relative min-h-[50vh]">
      <h2 id="aboutt"
        className="
          mt-20
          text-left text-3xl lg:text-4xl tracking-tighter 
          text-[var(--accent-blue)] font-black
          lg:sticky lg:top-8">
        Why I build
      </h2>

      <p className="
          text-3xl lg:text-5xl tracking-tighter
          text-[var(--foreground)] text-left font-black
          leading-tight max-w-3xl mx-auto mt-24">
        I build projects to understand what lies behind the abstraction.
      </p>

      <div className="
            max-w-4xl mx-auto mt-24
            tracking-tight text-sm lg:text-2xl">
        <p className="mt-12 leading-relaxed text-[var(--foreground-muted)] font-medium">
          Most of the time, it starts with an interesting question.
        </p>

        <p className=" mt-6 leading-relaxed text-[var(--foreground-muted)] font-medium">
          Can train delays be predicted?
          <br />
          How does a shell actually work?
          <br />
          Can we do a videogame based on nothing but just 0 & 1?
        </p>

        <p className=" mt-12 leading-relaxed text-[var(--foreground-muted)] font-medium">
          Building is how I explore those questions.
          Every project on this site began with an idea, a challenge,
          or a joke that went much further than expected.
        </p>
      </div>
    </section>
  );
}

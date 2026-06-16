export default function About() {
  return (
    <section id="about" className="px-12 py-45 relative min-h-[50vh]">
      <h2 id="aboutt" className="mt-20 text-left text-4xl text-[var(--accent-blue)] tracking-tighter font-black sticky top-8">
        Why I build
      </h2>

      <p className="text-5xl font-black tracking-tighter leading-tight text-[var(--foreground)] text-left max-w-3xl mx-auto mt-24 tracking-tight">
        I build projects to understand what lies behind the abstraction.
      </p>
      <div className="max-w-4xl mx-auto mt-24 tracking-tight">
        <p className="mt-12 text-2xl leading-relaxed text-[var(--foreground-muted)] font-medium">
          Most of the time, it starts with an interesting question.
        </p>

        <p className="mt-6 text-2xl leading-relaxed text-[var(--foreground-muted)] font-medium">
          Can train delays be predicted?
          <br />
          How does a shell actually work?
          <br />
          Can we do a videogame based on nothing but just 0 & 1?
        </p>

        <p className="mt-12 text-2xl leading-relaxed text-[var(--foreground-muted)] font-medium">
          Building is how I explore those questions.
          Every project on this site began with an idea, a challenge,
          or a joke that went much further than expected.
        </p>
      </div>
    </section>
  );
}

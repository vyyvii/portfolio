export default function About() {
  return (
    <section className="px-12 flex flex-col gap-4 font-black tracking-tighter">
      <h2 className="mt-20 text-right text-5xl text-[var(--accent-blue)]">
        ABOUT
      </h2>
      <br></br><br></br>
      <p className="text-center  text-xl text-[var(--foreground)] max-w-5xl mx-auto">
        I'm Victor, a computer science student driven by curiosity.<br></br><br></br>
        I build projects to understand how things work, whether it's predicting train delays with AI,<br></br>
        writing a shell from scratch, exploring cybersecurity, or creating simulations from simple rules.<br></br>
        For me, every project starts with a question and ends with a deeper understanding of the systems behind it.
      </p>
      <br></br><br></br>
      <h2 className="mt-20 text-right text-5xl text-[var(--accent-blue)] font-black">
        PROJECTS
      </h2>
    </section>
  );
}

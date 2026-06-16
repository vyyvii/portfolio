export default function Contact() {
  return (
    <section className="min-h-screen px-12 flex flex-col justify-center relative">
      <h2 className="text-right text-5xl text-[var(--accent-blue)] font-black tracking-tighter">
        CONTACT
      </h2>
      <div className="mt-24 max-w-4xl">
        <h3 className="text-7xl font-black leading-none tracking-tighter">
          Let's build
          <br/>
          something
          <br/>
          interesting.
        </h3>
        <div className="mt-16 flex gap-12 text-2xl font-black">
          <a
            href="mailto:v.defauchy@mailbox.org"
            className="text-[var(--accent-blue)] hover:underline"
          > Email </a>
          <a
            href="https://github.com/vyyvii"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent-blue)] hover:underline"
          > GitHub </a>
          <a
            href="https://linkedin.com/in/victor-defauchy-epitech-lyon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent-blue)] hover:underline"
          > LinkedIn </a>
          <a
            href="https://tryhackme.com/p/Vyvi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent-blue)] hover:underline"
          > TryHackMe </a>
          <a
            href="https://canva.link/victor-defauchy-cv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent-blue)] hover:underline"
          > CV </a>
        </div>
      </div>
    </section>
  );
}
export default function Contact() {
  return (
    <section id="contact"
            className="
              min-h-screen
              flex flex-col relative
              justify-center px-12">
      <div className="mt-24 max-w-4xl">
        <h3 className="
              text-5xl lg:text-7xl tracking-tighter font-black
              leading-none">
          Let's build
          <br />
          something
          <br />
          interesting.
        </h3>

        <div className="
              mt-16 flex flex-wrap gap-12
              text-2xl font-black">
          <a href="mailto:v.defauchy@mailbox.org"
            className="text-[var(--accent-blue)] hover:underline">
            Email
          </a>

          <a href="https://github.com/vyyvii"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent-blue)] hover:underline">
            GitHub
          </a>

          <a href="https://linkedin.com/in/victor-defauchy-epitech-lyon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent-blue)] hover:underline">
            LinkedIn
          </a>

          <a href="https://tryhackme.com/p/Vyvi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent-blue)] hover:underline">
            TryHackMe
          </a>

          <a href="https://canva.link/victor-defauchy-cv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent-blue)] hover:underline">
            CV
          </a>
        </div>

        <a href="#hero"
          className="
            absolute
            bottom-12 left-1/2 -translate-x-1/2
            text-sm font-medium text-[var(--foreground-muted)]
            transition-all
            hover:text-[var(--accent-blue)] hover:-translate-y-1">
          ↑ Up
        </a>
      </div>
    </section>
  );
}
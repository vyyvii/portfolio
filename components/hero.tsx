export default function Hero() {
  return (
    <section id="hero"
      className="
        min-h-screen flex flex-col lg:relative
        justify-center px-12 tracking-tighter">
      <p className="
          text-5xl text-[var(--foreground-muted)] font-black
          lg:sticky lg:top-8">
        Victor
      </p>

      <div className="mt-16 w-fit mx-auto">
        <h1 className="
              leading-none
              text-4xl lg:text-7xl font-black">
          <div className="lg:-translate-x-24 text-[var(--accent-blue)]">
            I build things
          </div>

          <div>
            to understand
          </div>

          <div className="lg:translate-x-24 text-[var(--accent-blue)]">
            how they work.
          </div>
        </h1>
      </div>

      <p className="
          mt-20 lg:text-right
          text-5xl text-[var(--foreground-muted)] font-black
          lg:sticky lg:top-8">
        Defauchy
      </p>

      <a href="#aboutt"
        className="
            absolute
            bottom-12 left-1/2 -translate-x-1/2
            text-sm font-medium text-[var(--foreground-muted)]
            transition-all
            hover:text-[var(--accent-blue)] hover:-translate-y-1">
        ↓ Discover
      </a>
    </section>
  );
}

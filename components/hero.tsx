export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-12 tracking-tighter">
      <p className="text-5xl text-[var(--foreground-muted)] font-black">
        Victor
      </p>

      <div className="mt-16 w-fit mx-auto">
        <h1 className="font-black leading-none text-7xl">
          <div className="-translate-x-24 text-[var(--accent-blue)]">
            I build things
          </div>
          <div>
            to understand
          </div>
          <div className="translate-x-24 text-[var(--accent-blue)]">
            how they work.
          </div>
        </h1>
      </div>

      <p className="mt-20 text-right text-5xl text-[var(--foreground-muted)] font-black">
        Defauchy
      </p>
    </section>
  );
}

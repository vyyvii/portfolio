import { Project as ProjectType } from "../components/projects";

export default function Project({ project }: { project: ProjectType } ) {
  const variants = [
    "translate-x-2 rotate-[0.2deg]",
    "translate-x-4 rotate-[0.4deg]",
    "translate-x-12 -rotate-[0.3deg]",
    "translate-x-16 rotate-[0.5deg]",
    "-translate-x-2 -rotate-[0.2deg]",
  ];
  const variant = variants[project.id % variants.length];

  return (
    <section className="px-12 py-12 tracking-tighter">
      <div className="max-w-4xl mx-auto">
        <div className={`flex flex-col gap-4 lg:${variant}`}>
          <h2 className="text-3xl lg:text-4xl font-black text-[var(--accent-blue)]">
            {project.title}
          </h2>

          <p className="text-md lg:text-xl text-[var(--foreground)] leading-relaxed">
            <strong className="text-[var(--foreground)]">
              {project.lead}
            </strong>
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: any) => (
              <span key={tag}
                className="
                  px-3 py-1
                  bg-[var(--accent-pink)] text-white
                  text-sm font-bold rounded-full">
                {tag}
              </span>
            ))}{
              project.link && (
                <a href={project.link}
                  target="_blank"
                  className="
                    px-3 py-1
                    bg-[var(--accent-pink)] text-[var(--accent-blue-light)]
                    text-xs lg:text-sm lg:font-bold rounded-full">
                  View project
                </a>
              )}
          </div>
        </div>
      </div>
    </section>
  );
}

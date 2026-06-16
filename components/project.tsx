import { Project as ProjectType } from "projects";

export default function Project({ project }: { project: ProjectType }) {
  return (
    <section className="px-12 py-12 tracking-tighter">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-black text-[var(--accent-blue)]">
            {project.title}
          </h2>
          <p className="text-xl text-[var(--foreground)] leading-relaxed">
            <strong>{project.lead}</strong> {project.description}
          </p>
          <div className="flex gap-2">
            {project.tags.map((tag: any) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[var(--accent-pink)] text-white text-sm font-bold rounded-full"
              >
                {tag}
              </span>
            ))}{
              project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  className="px-3 py-1 bg-[var(--accent-pink)] text-[var(--accent-blue-light)] text-sm font-bold rounded-full"
                > View project </a>)}
          </div>
        </div>
      </div>
    </section>
  );
}

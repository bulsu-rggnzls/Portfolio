import SectionHeading from "../SectionHeading";
import { ArrowUpRightIcon } from "../icons";

const projects = [
  {
    title: "Nexus Dashboard",
    featured: true,
    description:
      "A modern analytics dashboard built with Next.js and Tailwind CSS. Includes real-time data visualization and dark mode.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    gradient: "linear-gradient(135deg, #0f2547, #04101f)",
  },
  {
    title: "RemoteHub",
    featured: false,
    description:
      "A platform for remote workers to discover jobs, companies, and resources. Built with React and API integration.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Axios"],
    gradient: "linear-gradient(135deg, #123a3a, #04101f)",
  },
  {
    title: "Zenith Store",
    featured: false,
    description:
      "An e-commerce platform with a clean, minimal design and seamless shopping experience.",
    tags: ["Next.js", "Stripe", "Tailwind CSS", "Framer Motion"],
    gradient: "linear-gradient(135deg, #e2e8f0, #94a3b8)",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading
        number="01"
        title="Featured Projects"
        action={
          <a
            href="#projects"
            className="flex items-center gap-1 text-xs font-bold tracking-widest text-[color:var(--color-cyan)] uppercase hover:opacity-80"
          >
            View All Projects <ArrowUpRightIcon />
          </a>
        }
      />
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project, i) => (
          <article
            key={project.title}
            className={`group animate-fade-in-up delay-${i + 1} overflow-hidden rounded-lg transition-transform duration-300 hover:-translate-y-1`}
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--card-border)",
            }}
          >
            <div
              className="relative flex h-44 items-center justify-center"
              style={{ background: project.gradient }}
            >
              {project.featured && (
                <span className="absolute top-3 left-3 rounded bg-[color:var(--color-cyan)] px-2 py-0.5 text-[10px] font-bold tracking-widest text-slate-950 uppercase">
                  Featured
                </span>
              )}
              <span className="absolute top-3 right-3 text-[color:var(--color-cyan)] opacity-0 transition-opacity group-hover:opacity-100">
                <ArrowUpRightIcon />
              </span>
              <span className="text-2xl font-bold tracking-widest text-white/30">
                {project.title}
              </span>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold">{project.title}</h3>
              <p className="mt-2 text-xs text-[color:var(--text-muted)]">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded px-2 py-0.5 text-[10px] text-[color:var(--color-cyan)]"
                    style={{ border: "1px solid var(--color-cyan-glow)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

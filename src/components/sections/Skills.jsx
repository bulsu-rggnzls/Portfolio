import SectionHeading from "../SectionHeading";

const skills = [
  { name: "React", glyph: "⚛" },
  { name: "Next.js", glyph: "N" },
  { name: "TypeScript", glyph: "TS" },
  { name: "JavaScript", glyph: "JS" },
  { name: "Tailwind CSS", glyph: "~" },
  { name: "HTML5", glyph: "<>" },
  { name: "CSS3", glyph: "#" },
  { name: "Sass", glyph: "S" },
  { name: "Git", glyph: "⎇" },
  { name: "GitHub", glyph: "GH" },
  { name: "Vite", glyph: "V" },
  { name: "Figma", glyph: "F" },
];

const services = [
  {
    title: "Responsive Web Design",
    description:
      "Crafting responsive and accessible interfaces that work across all devices.",
  },
  {
    title: "Front-End Development",
    description:
      "Building fast and scalable web applications using modern technologies.",
  },
  {
    title: "Performance Optimization",
    description:
      "Ensuring optimal performance, clean code, and great user experience.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading number="02" title="Skills & Technologies" />
      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center gap-2 rounded-lg p-4 transition-transform duration-300 hover:-translate-y-1"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--card-border)",
              }}
            >
              <span className="text-2xl text-[color:var(--color-cyan)]">
                {skill.glyph}
              </span>
              <span className="text-center text-[10px] text-[color:var(--text-muted)]">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        <aside
          className="rounded-lg p-6"
          style={{
            background: "var(--card-bg)",
            border: "1px solid var(--card-border)",
          }}
        >
          <h3 className="mb-4 text-sm font-bold tracking-widest text-[color:var(--color-cyan)] uppercase">
            What I Do
          </h3>
          <ul className="space-y-5">
            {services.map((service) => (
              <li key={service.title} className="flex gap-3">
                <span className="mt-0.5 text-[color:var(--color-cyan)]">
                  ▸
                </span>
                <div>
                  <p className="text-sm font-bold">{service.title}</p>
                  <p className="mt-1 text-xs text-[color:var(--text-muted)]">
                    {service.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}

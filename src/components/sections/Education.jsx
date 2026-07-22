import SectionHeading from "../SectionHeading";
import { GraduationCapIcon, CertificateIcon } from "../icons";

const entries = [
  {
    period: "2018 - 2022",
    title: "Bachelor of Science in Information Technology",
    institution: "Pamantasan ng Lungsod ng Maynila",
    description:
      "Focused on software development, web technologies, and database systems.",
    Icon: GraduationCapIcon,
  },
  {
    period: "2023",
    title: "Meta Front-End Developer Professional Certificate",
    institution: "Coursera",
    description:
      "Comprehensive program covering HTML, CSS, JavaScript, React, and front-end best practices.",
    Icon: CertificateIcon,
  },
];

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading number="03" title="Education & Qualifications" />
      <div className="grid gap-6 md:grid-cols-2">
        {entries.map(({ period, title, institution, description, Icon }) => (
          <article
            key={title}
            className="flex gap-5 rounded-lg p-6"
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--card-border)",
            }}
          >
            <span
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg text-[color:var(--color-cyan)]"
              style={{ border: "1px solid var(--color-cyan-glow)" }}
            >
              <Icon />
            </span>
            <div>
              <p className="text-xs text-[color:var(--color-cyan)]">
                {period}
              </p>
              <h3 className="mt-1 text-sm font-bold">{title}</h3>
              <p className="mt-1 text-xs text-[color:var(--text-muted)]">
                {institution}
              </p>
              <p className="mt-3 text-xs text-[color:var(--text-muted)]">
                {description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

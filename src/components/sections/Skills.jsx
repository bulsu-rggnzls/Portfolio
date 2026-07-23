import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Heading from "../ui/Heading";
import Text from "../ui/Text";
import Card from "../ui/Card";

const techStack = [
  {
    label: "React",
    color: "text-sky-400",
    brandHex: "#38BDF8",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none" />
        <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="currentColor" fill="none" />
        <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="currentColor" fill="none" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="currentColor" fill="none" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    label: "Next.js",
    color: "text-slate-400",
    brandHex: "#94A3B8",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <text x="12" y="16" textAnchor="middle" fontSize="11" fontWeight="bold" fill="currentColor">N</text>
      </svg>
    ),
  },
  {
    label: "TypeScript",
    color: "text-blue-500",
    brandHex: "#3B82F6",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <text x="12" y="17" textAnchor="middle" fontSize="12" fontWeight="bold" fill="currentColor">TS</text>
      </svg>
    ),
  },
  {
    label: "JavaScript",
    color: "text-yellow-400",
    brandHex: "#FACC15",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <text x="12" y="17" textAnchor="middle" fontSize="14" fontWeight="bold" fill="currentColor">JS</text>
      </svg>
    ),
  },
  {
    label: "Tailwind CSS",
    color: "text-cyan-400",
    brandHex: "#22D3EE",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" aria-hidden="true">
        <path d="M12 3c-4 0-6.5 2-7.5 6 1.5-2 3.25-2.75 5.25-2.25 1.14.29 1.96 1.13 2.86 2.05C13.88 10.1 15.38 11.62 19 11.62c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.14-.29-1.96-1.13-2.86-2.05C13.88 4.9 12.38 3.38 12 3z" fill="currentColor" transform="scale(0.85) translate(1.8 1.8)" />
      </svg>
    ),
  },
  {
    label: "HTML5",
    color: "text-orange-500",
    brandHex: "#F97316",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" aria-hidden="true">
        <path d="M4.5 2l1.34 19.42L12 23l6.16-1.58L19.5 2h-15z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M16.5 8H9l.3 3.5h7L16 16l-4 1-4-1-.25-2.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    label: "CSS3",
    color: "text-sky-500",
    brandHex: "#0EA5E9",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" aria-hidden="true">
        <path d="M4.5 2l1.34 19.42L12 23l6.16-1.58L19.5 2h-15z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M16.5 8H9l.3 3.5h6.7L15.5 16l-3.5 1-3.5-1-.25-2.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    label: "Sass",
    color: "text-pink-400",
    brandHex: "#F472B6",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" aria-hidden="true">
        <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <text x="12" y="17" textAnchor="middle" fontSize="11" fontWeight="bold" fill="currentColor">S</text>
      </svg>
    ),
  },
  {
    label: "Git",
    color: "text-orange-600",
    brandHex: "#EA580C",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" aria-hidden="true">
        <path d="M2 12l10-10 10 10-10 10L2 12z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    color: "text-slate-400",
    brandHex: "#94A3B8",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: "Vite",
    color: "text-purple-400",
    brandHex: "#A78BFA",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" aria-hidden="true">
        <path d="M12 2L2 19.5h7L12 13l3 6.5h7L12 2z" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    label: "Figma",
    color: "text-emerald-400",
    brandHex: "#34D399",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" aria-hidden="true">
        <circle cx="12" cy="6" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="12" cy="18" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M8 6v6a4 4 0 008 0V6" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
];

const features = [
  {
    title: "Responsive Web Design",
    description: "Crafting responsive and accessible interfaces across all devices.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 shrink-0" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Front-End Development",
    description: "Building fast and scalable web applications using modern technologies.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 shrink-0" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "Performance Optimization",
    description: "Ensuring optimal performance, clean code, and great user experience.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 shrink-0" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
];

export default function Skills() {
  return (
    <Section id="skills">
      <div className="space-y-16">
        <SectionHeader
          title="Skills &amp; Technologies"
          description="Tools and technologies I use to bring ideas to life"
        />

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-10 lg:gap-12">
          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 gap-4 auto-rows-1fr">
            {techStack.map(({ label, color, svg, brandHex }) => (
              <Card
                key={label}
                group
                className="flex flex-col items-center justify-center gap-1.5 p-3 h-full hover:-translate-y-1 hover:bg-white/90 dark:hover:bg-slate-900/60 hover:shadow-[0_12px_32px_-8px_var(--brand-alpha)] hover:border-[var(--brand)]"
                style={{
                  "--brand": brandHex,
                  "--brand-alpha": `${brandHex}33`,
                }}
              >
                <div
                  className={`${color} transition-all duration-300 ease-out group-hover:scale-110`}
                >
                  {svg}
                </div>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-300 group-hover:text-slate-700 dark:group-hover:text-white tracking-wide text-center leading-tight">
                  {label}
                </span>
              </Card>
            ))}
          </div>

          <Card className="p-4 space-y-3">
            <Heading as="h3" size="h3">
              What I Do
            </Heading>
            {features.map(({ title, description, icon }) => (
              <div
                key={title}
                className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-colors duration-200"
              >
                <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-500 shrink-0 mt-0.5">
                  {icon}
                </div>
                <div className="space-y-0.5">
                  <Heading as="h4" size="h4">
                    {title}
                  </Heading>
                  <Text variant="muted" size="sm">
                    {description}
                  </Text>
                </div>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </Section>
  );
}

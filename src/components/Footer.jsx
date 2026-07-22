import { GitHubIcon, LinkedInIcon, TwitterIcon, MailIcon } from "./icons";

const columns = [
  {
    heading: "Navigation",
    links: [
      { label: "Home", href: "#home" },
      { label: "Projects", href: "#projects" },
      { label: "Skills", href: "#skills" },
      { label: "Education", href: "#education" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "My Resume", href: "/assets/Gonzales-Resume.pdf" },
      { label: "GitHub", href: "https://github.com/bulsu-rggnzls" },
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "Twitter", href: "https://twitter.com" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Use", href: "#" },
    ],
  },
];

const socials = [
  { href: "https://github.com/bulsu-rggnzls", label: "GitHub", Icon: GitHubIcon },
  { href: "https://linkedin.com", label: "LinkedIn", Icon: LinkedInIcon },
  { href: "https://twitter.com", label: "Twitter", Icon: TwitterIcon },
  { href: "mailto:argiegonzales.dev@gmail.com", label: "Email", Icon: MailIcon },
];

export default function Footer() {
  return (
    <footer
      className="mt-10"
      style={{ borderTop: "1px solid var(--card-border)" }}
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.6fr_1fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span
              className="flex h-9 w-9 items-center justify-center rounded font-bold text-[color:var(--color-cyan)]"
              style={{ border: "1px solid var(--color-cyan)" }}
            >
              AG
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-sm font-bold tracking-widest">
                Argie Gonzales
              </span>
              <span className="text-[10px] tracking-[0.3em] text-[color:var(--color-cyan)]">
                Front-End Developer
              </span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-xs text-[color:var(--text-muted)]">
            Building fast, beautiful, and user-centric web experiences.
          </p>
        </div>

        {columns.map((column) => (
          <div key={column.heading}>
            <h3 className="mb-3 text-xs font-bold tracking-widest text-[color:var(--color-cyan)] uppercase">
              {column.heading}
            </h3>
            <ul className="space-y-2">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-[color:var(--text-muted)] transition-colors hover:text-[color:var(--color-cyan)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="mb-3 text-xs font-bold tracking-widest text-[color:var(--color-cyan)] uppercase">
            Let&apos;s Connect
          </h3>
          <div className="flex gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded text-[color:var(--text-muted)] transition-colors hover:text-[color:var(--color-cyan)]"
                style={{ border: "1px solid var(--card-border)" }}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div
        className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-5 text-[10px] text-[color:var(--text-muted)] sm:flex-row"
        style={{ borderTop: "1px solid var(--card-border)" }}
      >
        <span>© 2024 Argie Gonzales. All rights reserved.</span>
        <span>Built with React and lots of coffee</span>
      </div>
    </footer>
  );
}

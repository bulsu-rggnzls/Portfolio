import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl transition-colors"
      style={{
        background: "var(--nav-bg)",
        borderBottom: "1px solid var(--card-border)",
      }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-3">
          <span
            className="flex h-9 w-9 items-center justify-center rounded font-bold text-[color:var(--color-cyan)]"
            style={{ border: "1px solid var(--color-cyan)" }}
          >
            AG
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-bold tracking-widest">
              ARGIE GONZALES
            </span>
            <span className="text-[10px] tracking-[0.3em] text-[color:var(--color-cyan)]">
              FRONT-END DEVELOPER
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-xs font-medium tracking-widest uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/assets/Gonzales-Resume.pdf"
            download
            className="rounded px-4 py-2 text-xs font-bold tracking-widest uppercase text-[color:var(--color-cyan)] transition-colors hover:bg-[color:var(--color-cyan-dim)]"
            style={{ border: "1px solid var(--color-cyan)" }}
          >
            Download CV
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

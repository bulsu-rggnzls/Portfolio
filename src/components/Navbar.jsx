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
      className="fixed top-4 inset-x-0 z-50 flex items-center justify-center px-6 pt-12 pb-8 backdrop-blur-xl transition-colors gap-12"
      style={{ background: "var(--nav-bg)" }}
    >
      <div className="flex gap-12">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="nav-link text-lg font-medium"
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="absolute right-8 top-1/2 -translate-y-1/2 pt-6">
        <ThemeToggle />
      </div>
    </nav>
  );
}

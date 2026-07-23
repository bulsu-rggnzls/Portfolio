import { useState } from "react";
import { Menu, X } from "lucide-react";
// import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 flex items-center justify-center px-4 sm:px-8 h-16 backdrop-blur-xl transition-colors"
      style={{ background: "var(--nav-bg, rgba(0,0,0,0.6))" }}
    >
      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-10 sm:gap-16 list-none m-0 p-0">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-sm font-semibold hover:text-teal-400 transition-colors whitespace-nowrap text-slate-900 dark:text-white"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="md:hidden absolute right-4 sm:right-8 flex items-center justify-center min-h-[44px] min-w-[44px] p-3 text-slate-900 dark:text-white touch-manipulation active:scale-[0.95]"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu overlay */}
      {open && (
        <div className="absolute top-16 left-0 right-0 bg-slate-900/95 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col items-center gap-6 py-8 list-none m-0 p-0">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center min-h-[44px] min-w-[44px] px-4 py-3 text-lg font-semibold text-white hover:text-teal-400 transition-colors touch-manipulation active:scale-[0.98]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

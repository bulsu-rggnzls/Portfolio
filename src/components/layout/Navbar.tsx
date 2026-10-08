import { useCallback, useState } from "react";
import { Menu, X } from "lucide-react";

import Button from "@/components/ui/Button";
import { NAV_LINKS } from "@/config/navigation";
import { useEscapeKey } from "@/hooks/useEscapeKey";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = useCallback(() => setOpen(false), []);

  useEscapeKey(open, closeMenu);

  return (
    <nav className="fixed top-0 inset-x-0 z-[var(--z-nav)] flex items-center justify-center px-4 sm:px-8 h-16 backdrop-blur-xl bg-canvas/70 transition-colors duration-200">
      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-10 sm:gap-16 list-none m-0 p-0">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-sm font-semibold text-ink hover:text-brand-ink transition-colors duration-200 whitespace-nowrap"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        className="md:hidden absolute right-4 sm:right-8 text-ink active:scale-[0.95]"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </Button>

      {/* Mobile menu overlay */}
      {open && (
        <div
          id="mobile-nav"
          className="absolute top-16 left-0 right-0 bg-panel/95 backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col items-center gap-6 py-8 list-none m-0 p-0">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center min-h-[44px] min-w-[44px] px-4 py-3 text-lg font-semibold text-ink hover:text-brand-ink transition-colors duration-200 touch-manipulation active:scale-[0.98]"
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

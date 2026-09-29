import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { cn } from "../../../utils/cn";
import WindowChrome from "../../../components/ui/WindowChrome";

function CodeLine({ num, children }) {
  return (
    <div className="flex">
      <span className="text-faint w-8 shrink-0 select-none text-right mr-3 text-xs sm:text-sm leading-relaxed">
        {String(num).padStart(2, " ")}
      </span>
      <span className="flex-1 text-xs sm:text-sm leading-relaxed whitespace-pre">
        {children}
      </span>
    </div>
  );
}

function AboutCode() {
  return (
    <div className="overflow-x-auto font-mono">
      <CodeLine num={1}><span className="text-muted">/**</span></CodeLine>
      <CodeLine num={2}><span className="text-muted"> * about.js — Client &amp; Business Services</span></CodeLine>
      <CodeLine num={3}><span className="text-muted"> * @argie/gonzales</span></CodeLine>
      <CodeLine num={4}><span className="text-muted"> */</span></CodeLine>
      <CodeLine num={5} />
      <CodeLine num={6}>
        <span className="text-glow">export</span>{" "}<span className="text-glow">default</span> {"{"}
      </CodeLine>
      <CodeLine num={7}>
        {"  "}<span className="text-accent">name</span>: <span className="text-amber-400">"Argie Gonzales"</span>,
      </CodeLine>
      <CodeLine num={8}>
        {"  "}<span className="text-accent">role</span>: <span className="text-amber-400">"Front-End Developer"</span>,
      </CodeLine>
      <CodeLine num={9}>
        {"  "}<span className="text-accent">location</span>: <span className="text-amber-400">"Bocaue, Bulacan"</span>,
      </CodeLine>
      <CodeLine num={10} />
      <CodeLine num={11}>
        {"  "}<span className="text-accent">services</span>: [
      </CodeLine>
      <CodeLine num={12}>
        {"    "}<span className="text-amber-400">"Modern Web Apps (React / Next.js)"</span>,
      </CodeLine>
      <CodeLine num={13}>
        {"    "}<span className="text-amber-400">"UI/UX Redesign &amp; Optimization"</span>,
      </CodeLine>
      <CodeLine num={14}>
        {"    "}<span className="text-amber-400">"Figma to Code Implementation"</span>,
      </CodeLine>
      <CodeLine num={15}>
        {"    "}<span className="text-amber-400">"Performance &amp; SEO Enhancements"</span>,
      </CodeLine>
      <CodeLine num={16}>{"  "}],</CodeLine>
      <CodeLine num={17} />
      <CodeLine num={18}>
        {"  "}<span className="text-accent">idealFor</span>: [
      </CodeLine>
      <CodeLine num={19}>
        {"    "}<span className="text-amber-400">"Startups building their MVP"</span>,
      </CodeLine>
      <CodeLine num={20}>
        {"    "}<span className="text-amber-400">"Businesses upgrading old sites"</span>,
      </CodeLine>
      <CodeLine num={21}>
        {"    "}<span className="text-amber-400">"Teams needing a front-end dev"</span>,
      </CodeLine>
      <CodeLine num={22}>{"  "}],</CodeLine>
      <CodeLine num={23} />
      <CodeLine num={24}>
        {"  "}<span className="text-accent">status</span>: <span className="text-amber-400">"Available for hire"</span>,
      </CodeLine>
      <CodeLine num={25}>{"}"};</CodeLine>
    </div>
  );
}

export default function DevConsoleModal({ isOpen, onClose }) {
  const [visible, setVisible] = useState(false);
  const [animate, setAnimate] = useState("");

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimate("in");
        });
      });
      return () => cancelAnimationFrame(raf);
    } else {
      setAnimate("out");
      const timer = setTimeout(() => {
        setVisible(false);
        setAnimate("");
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!visible) return;
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[var(--z-modal)] flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="About Argie Gonzales"
    >
      <div
        className={cn(
          "absolute inset-0 bg-canvas/60 backdrop-blur-sm transition-opacity duration-300",
          animate === "in" ? "opacity-100" : "opacity-0"
        )}
      />

      <div
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "relative w-full max-w-2xl bg-console border border-console-line rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden",
          animate === "in"
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4"
        )}
      >
        <WindowChrome
          title="about.js"
          tone="github"
          className="bg-console-bar border-console-line py-3 gap-2"
          titleClass="text-[11px] text-console-ink"
          right={
            <button
              onClick={onClose}
              aria-label="Close"
              className="text-console-ink hover:text-console-bright transition-colors duration-200 p-1"
            >
              <X size={16} />
            </button>
          }
        />

        <div className="p-4 sm:p-6 max-h-[70vh] overflow-y-auto">
          <AboutCode />
        </div>
      </div>
    </div>
  );
}

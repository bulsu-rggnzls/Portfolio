import { useState } from "react";
import { Download, Code2 } from "lucide-react";
import Section from "./Section";
import Heading from "../ui/Heading";
import Text from "../ui/Text";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import DevConsoleModal from "../ui/DevConsoleModal";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/gonzales463",
    label: "LinkedIn",
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "https://github.com/bulsu-rggnzls",
    label: "GitHub",
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/argie.gonzales.30/",
    label: "Facebook",
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export default function Hero() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <Section id="home" glow={false} containerClass="py-0 max-w-7xl">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 items-center">
        <div className="flex flex-col items-center md:items-start space-y-8 py-12">
          <Badge dot>Available for work</Badge>

          <div className="flex items-center gap-2">
            <Heading
              as="h1"
              size="h1"
              className="max-w-2xl lg:max-w-3xl"
            >
              ArgieGonzales
            </Heading>
            <div className="relative group/icon shrink-0">
              <button
                onClick={() => setShowAbout(true)}
                className="p-1.5 rounded-lg text-teal-400 bg-teal-500/10 hover:text-teal-300 hover:bg-teal-500/15 transition-all duration-200"
                aria-label="About me"
                title="About me"
              >
                <Code2 size={22} />
              </button>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                <div className="bg-slate-900 dark:bg-slate-800 text-white text-[10px] leading-relaxed font-mono px-3 py-2 rounded-lg shadow-xl whitespace-nowrap border border-white/10">
                  <div className="text-teal-400 text-[9px] mb-1 font-medium">about.js</div>
                  <div><span className="text-purple-400">const</span> me <span className="text-purple-400">=</span> {"{"}</div>
                  <div><span className="text-teal-400">name</span>: <span className="text-amber-400">"Argie"</span>,</div>
                  <div><span className="text-teal-400">role</span>: <span className="text-amber-400">"Front-End Dev"</span>,</div>
                  <div><span className="text-teal-400">location</span>: <span className="text-amber-400">"Bocaue, Bulacan"</span>,</div>
                  <div className="text-purple-400">{"}"};</div>
                </div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-900 dark:border-t-slate-800" />
              </div>
            </div>
          </div>

          <Text size="2xl" className="max-w-2xl">
            Front-end developer building fast, modern, and accessible web
            experiences.
          </Text>

          <div className="flex flex-wrap items-center gap-4 md:items-start">
            <Button
              as="a"
              href="/assets/Gonzales-Resume.pdf"
              download
              size="lg"
            >
              <Download size={20} />
              <span className="hidden sm:inline">Download Resume</span>
              <span className="sm:hidden" aria-hidden="true">
                Resume
              </span>
            </Button>

            {socialLinks.map(({ href, label, svg }) => (
              <Button
                key={label}
                as="a"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                variant="secondary"
                size="icon"
              >
                {svg}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center py-12">
          <div className="relative group">
            <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] rounded-full overflow-hidden shadow-2xl ring-4 ring-teal-400/30 hover:shadow-[0_0_80px_rgba(45,212,191,0.4)] transition-all duration-300 hover:scale-105">
              <img
                src="/assets/images/ArgieGonzales.jpg?v=1"
                alt="ArgieGonzales"
                className="w-full h-full object-cover object-top"
                loading="eager"
              />
            </div>
            <div className="absolute -top-14 left-1/2 -translate-x-1/2 whitespace-nowrap bg-slate-900/90 text-white text-sm px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
              Hey there! 👋
            </div>
          </div>
        </div>
      </div>

      <DevConsoleModal
        isOpen={showAbout}
        onClose={() => setShowAbout(false)}
      />
    </Section>
  );
}

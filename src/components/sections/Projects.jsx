import { useEffect, useState } from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Badge from "../ui/Badge";
import Heading from "../ui/Heading";
import Text from "../ui/Text";
import Card from "../ui/Card";
import { ExternalLink, Briefcase, ZoomIn, X } from "lucide-react";

const githubIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);



const techStack = [
  "React",
  "Vite",
  "Tailwind CSS",
  "Zustand",
  "React Hook Form",
  "Zod",
];

export default function Projects() {
  const [previewOpen, setPreviewOpen] = useState(false);

  useEffect(() => {
    if (!previewOpen) return;
    function handleKey(e) {
      if (e.key === "Escape") setPreviewOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = overflow;
    };
  }, [previewOpen]);

  return (
    <Section id="projects" glow={false} containerClass="max-w-4xl">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="space-y-12">
        <div className="text-center space-y-6">
          <SectionHeader
            title="Projects"
            description="A collection of web applications and tools I've built."
          />
        </div>

        <Card
          group
          className="p-6 sm:p-8 hover:border-teal-400/40 dark:hover:border-teal-400/40 hover:shadow-[0_16px_48px_-16px_rgba(45,212,191,0.35)] dark:hover:shadow-[0_16px_48px_-16px_rgba(45,212,191,0.35)]"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <Badge variant="status" dot size="sm">
                Live Demo Ready
              </Badge>
              <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                Featured Project
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <a
                href="https://application-tracker-dun.vercel.app/"
                target="_blank"
                rel="noreferrer"
                aria-label="Live preview"
                title="Live demo"
                className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-900/80 border border-black/5 dark:border-white/10 text-slate-500 dark:text-slate-300 hover:text-teal-400 dark:hover:text-teal-400 hover:border-teal-400/40 dark:hover:border-teal-400/40 transition-colors"
              >
                <ExternalLink size={18} />
              </a>
              <a
                href="https://github.com/bulsu-rggnzls/Application-Tracker"
                target="_blank"
                rel="noreferrer"
                aria-label="Source code"
                title="Source code"
                className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-900/80 border border-black/5 dark:border-white/10 text-slate-500 dark:text-slate-300 hover:text-teal-400 dark:hover:text-teal-400 hover:border-teal-400/40 dark:hover:border-teal-400/40 transition-colors"
              >
                {githubIcon}
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
            <div className="space-y-5">
              <Heading as="h3" size="h3" className="flex items-center gap-2.5 font-mono text-xl text-slate-900 dark:text-white">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-teal-500/10 text-teal-400 shrink-0">
                  <Briefcase size={17} />
                </span>
                Application Tracker
              </Heading>

              <Text variant="muted" size="sm" className="text-zinc-500 dark:text-zinc-400">
                A modern job application tracking platform designed to help
                developers manage job applications, interview pipelines, offer
                details, and salary analytics in one streamlined workflow.
              </Text>

              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-zinc-900/80 text-slate-500 dark:text-zinc-300 border border-zinc-300/70 dark:border-zinc-700/60 transition-colors duration-200 group-hover:border-teal-400/30 dark:group-hover:border-teal-400/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-slate-100 dark:bg-slate-950/80 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-teal-400/40 dark:group-hover:border-teal-400/40 group-hover:shadow-[0_10px_30px_-10px_rgba(45,212,191,0.35)] dark:group-hover:shadow-[0_10px_30px_-10px_rgba(45,212,191,0.35)]">
              <div className="flex items-center justify-between bg-slate-200/70 dark:bg-slate-900/90 border-b border-black/10 dark:border-white/10 px-4 py-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
                  application-tracker.vercel.app
                </span>
              </div>

              <div className="overflow-hidden border-t border-white/[0.08]">
              <button
                type="button"
                onClick={() => setPreviewOpen(true)}
                aria-label="Zoom into Application Tracker preview"
                className="group/img relative block w-full cursor-zoom-in"
              >
                <img
                  src="/assets/images/Application-Tracker.png"
                  alt="Application Tracker preview — click to zoom"
                  className="w-full h-56 sm:h-64 object-cover object-top brightness-[0.95] transition-all duration-500 ease-out group-hover:scale-[1.03] group-hover:brightness-100"
                  loading="lazy"
                />
                <span className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-mono text-slate-700 dark:text-slate-200 bg-white/90 dark:bg-slate-900/90 border border-black/10 dark:border-white/10 backdrop-blur-sm opacity-0 group-hover/img:opacity-100 transition-opacity duration-200">
                  <ZoomIn size={13} className="text-teal-500 dark:text-teal-400" />
                  Zoom
                </span>
              </button>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {previewOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          onClick={() => setPreviewOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Application Tracker full preview"
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]" />
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-slate-100 dark:bg-slate-950 shadow-2xl animate-[zoomIn_0.25s_ease-out]"
          >
            <div className="flex items-center justify-between bg-slate-200/70 dark:bg-slate-900/90 border-b border-black/10 dark:border-white/10 px-4 py-2.5">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
                application-tracker.vercel.app
              </span>
              <button
                onClick={() => setPreviewOpen(false)}
                aria-label="Close preview"
                className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300 hover:text-teal-400 dark:hover:text-teal-400 border border-black/5 dark:border-white/10 transition-colors"
              >
                <X size={16} />
              </button>
            </div>
            <div className="max-h-[75vh] overflow-y-auto">
              <img
                src="/assets/images/Application-Tracker.png"
                alt="Application Tracker full preview"
                className="w-full h-auto object-contain object-top"
              />
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
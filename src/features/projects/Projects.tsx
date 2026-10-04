import { useCallback, useEffect, useState, type ReactNode } from "react";
import {
  Briefcase,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  X,
  ZoomIn,
} from "lucide-react";

import Section from "@/components/layout/Section";
import SectionHeader from "@/components/layout/SectionHeader";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import WindowChrome from "@/components/ui/WindowChrome";
import { mobileTechStack, webTechStack } from "@/features/projects/data";
import { useEscapeKey } from "@/hooks/useEscapeKey";
import { useSnapCarousel } from "./useSnapCarousel";
import { cn } from "@/utils/cn";

const PROJECT_COUNT = 2;

type PreviewProject = "tracker" | "iphone";

const githubIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  liveHref: string;
  repoHref: string;
  chromeTitle: string;
  onZoom: () => void;
  previewClassName?: string;
  children?: ReactNode;
}

function ProjectCard({
  title,
  description,
  tech,
  liveHref,
  repoHref,
  chromeTitle,
  onZoom,
  previewClassName = "block",
  children,
}: ProjectCardProps) {
  return (
    <Card
      group
      className="min-w-full snap-start p-5 sm:p-8 rounded-2xl hover:border-accent/40 hover:shadow-halo"
    >
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8">
        <div className="flex items-center gap-3">
          <Badge variant="status" dot size="sm">
            Live Demo Ready
          </Badge>
          <span className="text-xs text-muted">Featured Project</span>
        </div>
        <div className="flex items-center gap-2">
          <Button
            as="a"
            variant="soft"
            size="icon-sm"
            href={liveHref}
            target="_blank"
            rel="noreferrer"
            aria-label="Live preview"
            title="Live demo"
          >
            <ExternalLink size={18} />
          </Button>
          <Button
            as="a"
            variant="soft"
            size="icon-sm"
            href={repoHref}
            target="_blank"
            rel="noreferrer"
            aria-label="Source code"
            title="Source code"
          >
            {githubIcon}
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
        <div className="space-y-5">
          <Heading as="h3" size="h3" className="flex items-center gap-2.5 text-xl">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent/10 text-accent shrink-0">
              <Briefcase size={17} />
            </span>
            {title}
          </Heading>
          <Text variant="muted" size="sm" className="text-ink-quiet leading-relaxed">
            {description}
          </Text>
          <div className="flex flex-wrap gap-2">
            {tech.map((item) => (
              <span
                key={item}
                className="px-2.5 py-1 rounded-md text-xs font-mono text-ink-quiet bg-panel-raised/50 border border-line-strong transition-colors duration-200 group-hover:border-accent/30"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative rounded-xl overflow-hidden border border-line bg-canvas/80 shadow-2xl transition-all duration-500 group-hover:-translate-y-1 group-hover:border-accent/40 group-hover:shadow-halo-sm">
          <WindowChrome title={chromeTitle} />
          <div className="relative overflow-hidden border-t border-line">
            <Button
              variant="soft"
              onClick={onZoom}
              aria-label={`Zoom into ${title} preview`}
              className={cn(
                "group/img relative block w-full cursor-zoom-in border-transparent bg-transparent p-0 text-left hover:border-transparent hover:bg-transparent hover:text-inherit",
                previewClassName
              )}
            >
              {children}
              <span className="absolute inset-0 bg-gradient-to-t from-canvas/40 to-transparent pointer-events-none" />
              <span className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-mono text-ink-body bg-panel/90 border border-line backdrop-blur-sm opacity-0 group-hover/img:opacity-100 transition-opacity duration-200">
                <ZoomIn size={13} className="text-accent" />
                Zoom
              </span>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default function Projects() {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewProject, setPreviewProject] = useState<PreviewProject>("tracker");
  const { scrollRef, current, total, scrollTo, prev, next } =
    useSnapCarousel(PROJECT_COUNT);

  const closePreview = useCallback(() => setPreviewOpen(false), []);

  function openPreview(project: PreviewProject) {
    setPreviewProject(project);
    setPreviewOpen(true);
  }

  useEscapeKey(previewOpen, closePreview);

  useEffect(() => {
    if (!previewOpen) return;

    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = overflow;
    };
  }, [previewOpen]);

  return (
    <Section id="projects" glow={false}>
      <div className="glow -top-40 -right-40 bg-accent/15" />
      <div className="glow -bottom-40 -left-40 bg-glow/15" />

      <SectionHeader
        title="Projects"
        description="A collection of web applications and tools I've built."
        className="space-y-3 mb-8"
      />

      <div className="relative">
        {current > 0 && (
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={prev}
            aria-label="Previous project"
            className="absolute -left-2 sm:-left-5 top-1/2 z-10 -translate-y-1/2 rounded-full border-line bg-panel-raised/80 shadow-lg backdrop-blur-md hover:border-accent/40 hover:text-accent"
          >
            <ChevronLeft size={20} />
          </Button>
        )}
        {current < total - 1 && (
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={next}
            aria-label="Next project"
            className="absolute -right-2 sm:-right-5 top-1/2 z-10 -translate-y-1/2 rounded-full border-line bg-panel-raised/80 shadow-lg backdrop-blur-md hover:border-accent/40 hover:text-accent"
          >
            <ChevronRight size={20} />
          </Button>
        )}

        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-always -mx-4 px-4 sm:-mx-8 sm:px-8 gap-8 pb-4 scrollbar-hide snap-smooth cursor-grab select-none"
        >
          {/* Application Tracker */}
          <ProjectCard
            title="Application Tracker"
            description="A modern job application tracking platform designed to help developers manage job applications, interview pipelines, offer details, and salary analytics in one streamlined workflow."
            tech={webTechStack}
            liveHref="https://application-tracker-dun.vercel.app/"
            repoHref="https://github.com/bulsu-rggnzls/Application-Tracker"
            chromeTitle="application-tracker.vercel.app"
            onZoom={() => openPreview("tracker")}
          >
            <img
              src="/assets/images/Application-Tracker.png"
              alt="Application Tracker preview — click to zoom"
              className="w-full h-56 sm:h-64 object-cover object-top brightness-[0.92] transition-all duration-500 ease-out group-hover:scale-[1.04] group-hover:brightness-100"
              loading="lazy"
            />
          </ProjectCard>

          {/* iStocked */}
          <ProjectCard
            title="iStocked"
            description="A mobile dashboard for phone sellers to track inventory, record sales, and monitor income, profits, and costs in one streamlined platform built with React Native."
            tech={mobileTechStack}
            liveHref="#"
            repoHref="https://github.com/bulsu-rggnzls/istocked"
            chromeTitle="iStocked"
            previewClassName="flex h-56 sm:h-64 gap-2 p-2"
            onZoom={() => openPreview("iphone")}
          >
            <img
              src="/assets/images/iphone1.png"
              alt="iStocked — main metrics"
              className="h-full w-1/2 object-cover object-top rounded-lg brightness-[0.92] transition-all duration-500 ease-out group-hover/img:scale-[1.03] group-hover/img:brightness-100"
              loading="lazy"
            />
            <img
              src="/assets/images/iphone2.png"
              alt="iStocked — device preview"
              className="h-full w-1/2 object-cover object-top rounded-lg brightness-[0.92] transition-all duration-500 ease-out group-hover/img:scale-[1.03] group-hover/img:brightness-100"
              loading="lazy"
            />
          </ProjectCard>
        </div>

        <div className="flex items-center justify-center gap-2 mt-6">
          {Array.from({ length: total }).map((_, i) => (
            <Button
              key={i}
              variant="soft"
              size="icon-sm"
              onClick={() => scrollTo(i)}
              aria-label={`Go to project ${i + 1}`}
              aria-current={current === i}
              className={cn(
                "h-2 w-2 rounded-full border-transparent bg-faint/70 p-0 hover:border-transparent hover:bg-faint",
                current === i && "w-6 bg-accent hover:bg-accent"
              )}
            />
          ))}
        </div>
      </div>

      {previewOpen && (
        <div
          className="fixed inset-0 z-[var(--z-modal)] flex items-center justify-center p-4 sm:p-8"
          onClick={closePreview}
          role="dialog"
          aria-modal="true"
          aria-label="Project full preview"
        >
          <div className="absolute inset-0 bg-canvas/70 backdrop-blur-sm animate-fade-in" />
          <div
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-5xl rounded-2xl overflow-hidden border border-line bg-canvas shadow-2xl animate-zoom-in"
          >
            <WindowChrome
              title={
                previewProject === "tracker"
                  ? "application-tracker.vercel.app"
                  : "iStocked"
              }
              right={
                <Button
                  variant="soft"
                  size="icon-sm"
                  onClick={closePreview}
                  aria-label="Close preview"
                  className="rounded-lg border-line bg-panel-raised text-ink-quiet hover:border-line hover:bg-panel-raised hover:text-accent"
                >
                  <X size={16} />
                </Button>
              }
            />
            <div className="max-h-[75vh] overflow-y-auto">
              {previewProject === "tracker" ? (
                <img
                  src="/assets/images/Application-Tracker.png"
                  alt="Application Tracker full preview"
                  className="w-full h-auto object-contain object-top"
                />
              ) : (
                <div className="flex gap-4 p-4">
                  <img
                    src="/assets/images/iphone1.png"
                    alt="iStocked — main metrics"
                    className="w-1/2 h-auto object-cover object-top rounded-xl"
                  />
                  <img
                    src="/assets/images/iphone2.png"
                    alt="iStocked — device preview"
                    className="w-1/2 h-auto object-cover object-top rounded-xl"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}

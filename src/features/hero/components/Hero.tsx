import { useState } from "react";
import { Code2, Download } from "lucide-react";

import Section from "@/components/layout/Section";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import DevConsoleModal from "@/features/hero/components/DevConsoleModal";
import { socialLinks } from "@/features/hero/data";

export default function Hero() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <Section id="home" glow={false} containerClass="py-0 max-w-7xl">
      <div className="glow -top-40 -left-40 bg-brand-ink/20" />
      <div className="glow -bottom-40 -right-40 bg-glow/20" />

      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 md:gap-12 items-center">
        <div className="flex flex-col items-center md:items-start space-y-6 md:space-y-8 pt-20 md:pt-12 pb-6 md:pb-12 text-center md:text-left">
          <Badge dot className="self-center md:self-start">
            Available for work
          </Badge>

          <div className="flex items-center justify-center md:justify-start gap-2 w-full">
            <Heading
              as="h1"
              size="h1"
              className="max-w-[10ch] md:max-w-2xl lg:max-w-3xl text-[clamp(3.3rem,15vw,8rem)] leading-[0.9] tracking-[-0.06em]"
            >
              Argie Gonzales
            </Heading>
            <div className="relative group/icon shrink-0 hidden sm:block">
              <Button
                variant="soft"
                size="icon-sm"
                onClick={() => setShowAbout(true)}
                aria-label="About me"
                title="About me"
                className="rounded-lg border-brand/20 bg-brand/10 text-brand-ink hover:border-brand/30 hover:bg-brand/15 hover:text-brand-ink"
              >
                <Code2 size={22} />
              </Button>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                <div className="bg-panel-raised text-ink text-[10px] leading-relaxed font-mono px-3 py-2 rounded-lg shadow-xl whitespace-nowrap border border-line">
                  <div className="text-brand-ink text-[9px] mb-1 font-medium">about.js</div>
                  <div>
                    <span className="text-glow">const</span> me{" "}
                    <span className="text-glow">=</span> {"{"}
                  </div>
                  <div>
                    <span className="text-brand-ink">name</span>:{" "}
                    <span className="text-amber-400">"Argie"</span>,
                  </div>
                  <div>
                    <span className="text-brand-ink">role</span>:{" "}
                    <span className="text-amber-400">"Front-End Dev"</span>,
                  </div>
                  <div>
                    <span className="text-brand-ink">location</span>:{" "}
                    <span className="text-amber-400">"Bocaue, Bulacan"</span>,
                  </div>
                  <div className="text-glow">{"}"};</div>
                </div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-panel-raised" />
              </div>
            </div>
          </div>

          <Text
            variant="muted"
            size="2xl"
            className="max-w-xl text-[clamp(1.5rem,5vw,3.25rem)] leading-[1.08] md:text-[clamp(2rem,3vw,3.25rem)]"
          >
            Front-end developer building fast, modern, and accessible web
            experiences.
          </Text>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:items-start w-full">
            <Button
              as="a"
              href="/assets/Gonzales-Resume.pdf"
              download
              size="lg"
              className="w-full sm:w-auto"
            >
              <Download size={18} />
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
                className="shrink-0"
              >
                {svg}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center pt-0 pb-8 md:py-12">
          <div className="relative group">
            <div className="w-[min(78vw,22rem)] h-[min(78vw,22rem)] sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] rounded-full overflow-hidden ring-1 ring-brand/30 border-2 border-panel-raised shadow-2xl shadow-brand/10 hover:shadow-halo-portrait transition-all duration-300 hover:scale-105">
              <img
                src="/assets/images/Argie Gonzales.jpg?v=1"
                alt="Argie Gonzales"
                className="w-full h-full object-cover object-top"
                loading="eager"
              />
            </div>
            <div className="absolute -top-14 left-1/2 -translate-x-1/2 whitespace-nowrap bg-panel/90 text-ink text-sm px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
              Hey there! 👋
            </div>
          </div>
        </div>
      </div>

      <DevConsoleModal isOpen={showAbout} onClose={() => setShowAbout(false)} />
    </Section>
  );
}

import { useState } from "react";
import { Download, Code2 } from "lucide-react";
import Section from "../../../components/layout/Section";
import Heading from "../../../components/ui/Heading";
import Text from "../../../components/ui/Text";
import Badge from "../../../components/ui/Badge";
import Button from "../../../components/ui/Button";
import DevConsoleModal from "./DevConsoleModal";
import { socialLinks } from "../data";

export default function Hero() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <Section id="home" glow={false} containerClass="py-0 max-w-7xl">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 md:gap-12 items-center">
        <div className="flex flex-col items-center md:items-start space-y-6 md:space-y-8 pt-20 md:pt-12 pb-6 md:pb-12 text-center md:text-left">
          <Badge dot className="self-center md:self-start">Available for work</Badge>

          <div className="flex items-center justify-center md:justify-start gap-2 w-full">
            <Heading
              as="h1"
              size="h1"
              className="max-w-[10ch] md:max-w-2xl lg:max-w-3xl text-slate-100 text-[clamp(3.3rem,15vw,8rem)] leading-[0.9] tracking-[-0.06em]"
            >
              Argie Gonzales
            </Heading>
            <div className="relative group/icon shrink-0 hidden sm:block">
              <button
                onClick={() => setShowAbout(true)}
                className="p-1.5 rounded-lg text-emerald-400 bg-emerald-500/10 hover:text-emerald-300 hover:bg-emerald-500/15 transition-all duration-200"
                aria-label="About me"
                title="About me"
              >
                <Code2 size={22} />
              </button>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                <div className="bg-slate-900 dark:bg-slate-800 text-white text-[10px] leading-relaxed font-mono px-3 py-2 rounded-lg shadow-xl whitespace-nowrap border border-white/10">
                  <div className="text-emerald-400 text-[9px] mb-1 font-medium">about.js</div>
                  <div><span className="text-purple-400">const</span> me <span className="text-purple-400">=</span> {"{"}</div>
                  <div><span className="text-emerald-400">name</span>: <span className="text-amber-400">"Argie"</span>,</div>
                  <div><span className="text-emerald-400">role</span>: <span className="text-amber-400">"Front-End Dev"</span>,</div>
                  <div><span className="text-emerald-400">location</span>: <span className="text-amber-400">"Bocaue, Bulacan"</span>,</div>
                  <div className="text-purple-400">{"}"};</div>
                </div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-900" />
              </div>
            </div>
          </div>

          <Text
            size="2xl"
            className="max-w-xl text-slate-400 text-[clamp(1.5rem,5vw,3.25rem)] leading-[1.08] md:text-[clamp(2rem,3vw,3.25rem)]"
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
            <div className="w-[min(78vw,22rem)] h-[min(78vw,22rem)] sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] rounded-full overflow-hidden ring-1 ring-emerald-500/30 border-2 border-slate-800 shadow-2xl shadow-emerald-500/10 hover:shadow-[0_0_80px_rgba(16,185,129,0.4)] transition-all duration-300 hover:scale-105">
              <img
                src="/assets/images/Argie Gonzales.jpg?v=1"
                alt="Argie Gonzales"
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

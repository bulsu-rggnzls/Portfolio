import Section from "../../../components/layout/Section";
import SectionHeader from "../../../components/layout/SectionHeader";
import Heading from "../../../components/ui/Heading";
import Text from "../../../components/ui/Text";
import Card from "../../../components/ui/Card";
import { techStack, features } from "../data";

export default function Skills() {
  return (
    <Section id="skills">
      <div className="space-y-16">
        <SectionHeader
          title="Skills &amp; Technologies"
          description="Tools and technologies I use to bring ideas to life"
        />

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-10 lg:gap-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4 auto-rows-1fr">
            {techStack.map(({ label, color, svg, brandHex }) => (
              <Card
                key={label}
                group
                className="flex flex-col items-center justify-center gap-1.5 p-3 h-full hover:-translate-y-1 hover:bg-white/90 dark:hover:bg-slate-900/60 hover:shadow-[0_12px_32px_-8px_var(--brand-alpha)] hover:border-[var(--brand)]"
                style={{
                  "--brand": brandHex,
                  "--brand-alpha": `${brandHex}33`,
                }}
              >
                <div
                  className={`${color} transition-all duration-300 ease-out group-hover:scale-110`}
                >
                  {svg}
                </div>
                <span className="text-[10px] sm:text-xs font-medium text-slate-500 dark:text-slate-300 group-hover:text-slate-700 dark:group-hover:text-white tracking-wide text-center leading-tight">
                  {label}
                </span>
              </Card>
            ))}
          </div>

          <Card className="p-4 space-y-3">
            <Heading as="h3" size="h3">
              What I Do
            </Heading>
            {features.map(({ title, description, icon }) => (
              <div
                key={title}
                className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-colors duration-200"
              >
                <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-teal-500/10 text-teal-500 shrink-0 mt-0.5">
                  {icon}
                </div>
                <div className="space-y-0.5 min-w-0">
                  <Heading as="h4" size="h4">
                    {title}
                  </Heading>
                  <Text variant="muted" size="sm" className="break-words">
                    {description}
                  </Text>
                </div>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </Section>
  );
}

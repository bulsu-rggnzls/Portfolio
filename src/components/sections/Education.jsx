import { GraduationCap, School } from "lucide-react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Heading from "../ui/Heading";
import Text from "../ui/Text";
import Card from "../ui/Card";
import Badge from "../ui/Badge";

const educationData = [
  {
    id: "college",
    icon: GraduationCap,
    date: "2022 - 2026",
    title: "BS Information Technology",
    tag: "Web and Mobile App Development",
    subtitle: "Bulacan State University - Main Campus",
    description:
      "Specialized in web and mobile application development, modern software engineering practices, and database management.",
  },
  {
    id: "highschool",
    icon: School,
    date: "2016 - 2022",
    title: "Science, Technology, Engineering and Mathematics",
    tag: "STEM",
    subtitle: "Lolomboy National High School",
    description:
      "Focused on advanced mathematics, basic programming, physics, and technological research fundamentals.",
  },
];

function EducationCard({ item }) {
  const Icon = item.icon;

  return (
    <Card className="flex-1 p-6 shadow-lg shadow-teal-500/5 hover:shadow-teal-500/15 hover:border-teal-400/50">
      <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-slate-900 dark:bg-black border border-teal-400/40 shadow-[0_0_16px_-4px_rgba(45,212,191,0.3)] mb-4">
        <Icon size={20} className="text-teal-400" />
      </div>

      <div className="mb-3">
        <span className="inline-block text-xs font-semibold tracking-wider px-3 py-1 rounded-full bg-slate-800 dark:bg-slate-900 text-teal-400 border border-teal-400/20">
          {item.date}
        </span>
      </div>

      <Heading as="h3" size="h3" className="text-lg mb-1">
        {item.title}
      </Heading>

      <Badge variant="tag" size="sm" className="font-semibold mb-2">
        {item.tag}
      </Badge>

      <Text variant="muted" size="sm" className="font-medium mt-1">
        {item.subtitle}
      </Text>

      <Text variant="default" size="sm" className="mt-2">
        {item.description}
      </Text>
    </Card>
  );
}

function TimelineDot() {
  return (
    <div className="relative z-10 w-4 h-4 shrink-0 rounded-full border-2 border-teal-400 bg-slate-900 dark:bg-black shadow-[0_0_10px_rgba(45,212,191,0.3)]" />
  );
}

function TimelineLine() {
  return (
    <div className="w-0.5 flex-1 bg-gradient-to-b from-teal-400/30 to-teal-400/10" />
  );
}

export default function Education() {
  return (
    <Section id="education" glow={false}>
      <div className="absolute top-40 right-0 w-96 h-96 bg-teal-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 left-0 w-96 h-96 bg-purple-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="space-y-14">
        <SectionHeader
          title="Education &amp; Qualifications"
          description="Academic background and formal training"
        />

        <div className="space-y-0">
          {educationData.map((item, i) => (
            <div
              key={item.id}
              className="flex items-start gap-5 pb-10 md:pb-14 last:pb-0 md:hidden"
            >
              <div className="flex flex-col items-center">
                <TimelineDot />
                {i < educationData.length - 1 && <TimelineLine />}
              </div>
              <EducationCard item={item} />
            </div>
          ))}
        </div>

        <div className="relative hidden md:block">
          <div className="absolute left-1/2 inset-y-8 w-0.5 -translate-x-1/2 bg-gradient-to-b from-teal-400/30 via-teal-400/20 to-teal-400/10" />

          {educationData.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={item.id} className="flex items-center gap-4 pb-14 last:pb-0">
                <div className="flex-1 flex justify-end">
                  {isLeft && (
                    <div className="relative">
                      <EducationCard item={item} />
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-6 h-0.5 bg-gradient-to-r from-teal-400/40 to-teal-400/20" />
                    </div>
                  )}
                </div>

                <div className="shrink-0 z-10">
                  <TimelineDot />
                </div>

                <div className="flex-1">
                  {!isLeft && (
                    <div className="relative">
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full w-6 h-0.5 bg-gradient-to-r from-teal-400/20 to-teal-400/40" />
                      <EducationCard item={item} />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

import { GraduationCap, School } from "lucide-react";

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
    side: "left",
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
    side: "right",
  },
];

function EducationCard({ item }) {
  const Icon = item.icon;
  const isLeft = item.side === "left";

  return (
    <div
      className={`relative w-full md:w-1/2 ${
        isLeft ? "md:pr-12" : "md:pl-12"
      }`}
    >
      {/* Connecting line from dot to card */}
      <div
        className={`hidden md:block absolute top-6 w-6 h-0.5 bg-teal-400/30 ${
          isLeft ? "right-0" : "left-0"
        }`}
      />

      <div
        className={`relative p-6 rounded-xl border border-teal-400/20 bg-white dark:bg-slate-800/50 shadow-lg shadow-teal-500/5 hover:shadow-teal-500/15 hover:border-teal-400/50 transition-all duration-300 ${
          isLeft ? "text-left" : "text-left md:text-right"
        }`}
      >
        {/* Icon badge - top-left of card */}
        <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-slate-900 dark:bg-black border border-teal-400/40 shadow-[0_0_16px_-4px_rgba(45,212,191,0.3)] mb-4">
          <Icon size={20} className="text-teal-400" />
        </div>

        {/* Date pill */}
        <div className="mb-3">
          <span
            className={`inline-block font-mono text-xs font-semibold tracking-wider px-3 py-1 rounded-full bg-slate-800 dark:bg-slate-900 text-teal-400 border border-teal-400/20 ${
              isLeft ? "" : "md:float-right"
            }`}
          >
            {item.date}
          </span>
        </div>

        {/* Title */}
        <h3 className={`font-bold text-slate-900 dark:text-white mb-1 clear-both ${isLeft ? "text-xl" : "text-lg"}`}>
          {item.title}
        </h3>

        {/* Tag / Track */}
        <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 border border-teal-400/20 mb-2">
          {item.tag}
        </span>

        {/* Subtitle */}
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
          {item.subtitle}
        </p>

        {/* Description */}
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <section
      id="education"
      className="min-h-screen flex items-center px-4 sm:px-8 relative overflow-hidden bg-gradient-to-br from-teal-500/[0.04] to-purple-500/[0.04] dark:from-teal-500/[0.06] dark:to-purple-500/[0.06]"
    >
      <div className="absolute top-40 right-0 w-96 h-96 bg-teal-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 left-0 w-96 h-96 bg-purple-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto w-full max-w-6xl py-20 space-y-14">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Education &amp; Qualifications
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base max-w-xl mx-auto">
            Academic background and formal training
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[22px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-400/60 via-teal-400/30 to-transparent" />

          <div className="space-y-12 md:space-y-20">
            {educationData.map((item) => {
              const isLeft = item.side === "left";

              return (
                <div
                  key={item.id}
                  className="relative flex flex-col md:flex-row items-start"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[13px] md:left-1/2 md:-translate-x-1/2 top-1.5 w-[18px] h-[18px] rounded-full border-2 border-teal-400 bg-slate-900 dark:bg-black z-10 shrink-0" />

                  {/* Card */}
                  {/* For left items: card first (left half). For right items: card second (right half) */}
                  {isLeft ? (
                    <>
                      <EducationCard item={item} />
                      <div className="hidden md:block md:w-1/2" />
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block md:w-1/2" />
                      <EducationCard item={item} />
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

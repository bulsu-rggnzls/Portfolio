import H1 from "../ui/H1";
import Paragraph from "../ui/Paragraph";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center px-4 sm:px-8 relative overflow-hidden bg-gradient-to-br from-teal-500/[0.03] to-purple-500/[0.03] dark:from-teal-500/[0.05] dark:to-purple-500/[0.05]"
    >
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="mx-auto w-full max-w-4xl text-center space-y-6 py-20">
        <H1 className="tracking-tight text-4xl sm:text-5xl lg:text-6xl">Projects</H1>
        <Paragraph className="text-xl sm:text-2xl text-slate-600 dark:text-white max-w-2xl mx-auto">
          Currently developing projects and building real-world applications. Check back soon for updates!
        </Paragraph>
        <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/40 bg-teal-500/10 px-5 py-2 text-sm font-medium text-teal-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500" />
          </span>
          In Progress
        </div>
      </div>
    </section>
  );
}

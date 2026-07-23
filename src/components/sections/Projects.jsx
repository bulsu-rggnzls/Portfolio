import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Badge from "../ui/Badge";

export default function Projects() {
  return (
    <Section id="projects" glow={false} containerClass="max-w-4xl">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center space-y-6">
        <SectionHeader
          title="Projects"
          titleSize="2xl"
          description="Currently developing projects and building real-world applications. Check back soon for updates!"
        />
        <div className="flex justify-center">
          <Badge dot>In Progress</Badge>
        </div>
      </div>
    </Section>
  );
}

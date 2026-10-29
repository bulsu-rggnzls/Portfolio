import Section from "@/components/layout/Section";
import SectionHeader from "@/components/layout/SectionHeader";
import GitHubContributions from "@/components/ui/GitHubContributions";

export default function GitHubActivity() {
  return (
    <Section id="activity">
      <div className="space-y-10 sm:space-y-12">
        <SectionHeader
          title="GitHub Activity"
          description="Consistent daily contributions, open-source commits, and active development across web and mobile repositories."
        />

        <GitHubContributions username="bulsu-rggnzls" />
      </div>
    </Section>
  );
}

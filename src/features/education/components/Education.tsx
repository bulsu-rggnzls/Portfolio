import Section from "@/components/layout/Section";
import SectionHeader from "@/components/layout/SectionHeader";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import { educationData, type EducationItem } from "@/features/education/data";

function EducationCard({ item }: { item: EducationItem }) {
  const Icon = item.icon;

  return (
    <Card className="flex-1 p-6 shadow-lg shadow-accent/5 hover:shadow-accent/15 hover:border-accent/50">
      <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-canvas border border-accent/40 shadow-halo-ring mb-4">
        <Icon size={20} className="text-accent" />
      </div>

      <div className="mb-3">
        <span className="inline-block text-xs font-semibold tracking-wider px-3 py-1 rounded-full bg-panel text-accent border border-accent/20">
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
    <div className="relative z-10 w-4 h-4 shrink-0 rounded-full border-2 border-accent bg-canvas shadow-halo-ring" />
  );
}

function TimelineLine() {
  return <div className="w-0.5 flex-1 bg-gradient-to-b from-accent/30 to-accent/10" />;
}

export default function Education() {
  return (
    <Section id="education" glow={false}>
      <div className="glow top-40 right-0 bg-accent/15" />
      <div className="glow -bottom-40 left-0 bg-glow/15" />

      <div className="space-y-14">
        <SectionHeader
          title="Education & Qualifications"
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
          <div className="absolute left-1/2 inset-y-8 w-0.5 -translate-x-1/2 bg-gradient-to-b from-accent/30 via-accent/20 to-accent/10" />

          {educationData.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={item.id} className="flex items-center gap-4 pb-14 last:pb-0">
                <div className="flex-1 flex justify-end">
                  {isLeft && (
                    <div className="relative">
                      <EducationCard item={item} />
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-6 h-0.5 bg-gradient-to-r from-accent/40 to-accent/20" />
                    </div>
                  )}
                </div>

                <div className="shrink-0 z-10">
                  <TimelineDot />
                </div>

                <div className="flex-1">
                  {!isLeft && (
                    <div className="relative">
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full w-6 h-0.5 bg-gradient-to-r from-accent/20 to-accent/40" />
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

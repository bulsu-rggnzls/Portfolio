import { useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { ExternalLink, GitCommit, Sparkles } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { cn } from "@/utils/cn";

export interface GitHubContributionsProps {
  username?: string;
  className?: string;
}

const YEARS = ["last", 2026, 2025, 2024, 2023] as const;
type YearOption = (typeof YEARS)[number];

// Authentic GitHub dark mode green palette matching the screenshot
const gitHubTheme = {
  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
};

export default function GitHubContributions({
  username = "bulsu-rggnzls",
  className,
}: GitHubContributionsProps) {
  const [selectedYear, setSelectedYear] = useState<YearOption>("last");

  return (
    <Card
      group
      className={cn(
        "p-5 sm:p-7 rounded-2xl border-line bg-panel/70 backdrop-blur-md shadow-xl hover:border-brand/30 transition-all duration-300",
        className
      )}
    >
      {/* Header with Title and Year Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-line mb-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 text-brand-ink">
            <GitCommit size={20} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-ink text-base sm:text-lg">
                GitHub Contributions
              </h3>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full bg-brand/10 text-brand-ink border border-brand/20">
                <Sparkles size={11} />
                Live Heatmap
              </span>
            </div>
            <p className="text-xs text-muted font-mono mt-0.5">
              @{username} on GitHub
            </p>
          </div>
        </div>

        {/* Year Selector Buttons (matching GitHub's 2026, 2025, 2024, 2023) */}
        <div className="flex items-center gap-1.5 self-start sm:self-auto bg-panel-raised/80 p-1 rounded-xl border border-line">
          {YEARS.map((year) => {
            const isSelected = selectedYear === year;
            const label = year === "last" ? "Last Year" : year.toString();
            return (
              <Button
                key={label}
                variant="ghost"
                size="sm"
                onClick={() => setSelectedYear(year)}
                className={cn(
                  "px-3 py-1 text-xs font-mono rounded-lg transition-all duration-150 h-auto",
                  isSelected
                    ? "bg-brand text-canvas font-semibold shadow-sm hover:bg-brand hover:text-canvas"
                    : "text-ink-quiet hover:text-ink hover:bg-panel-raised"
                )}
              >
                {label}
              </Button>
            );
          })}
        </div>
      </div>

      {/* Calendar Grid Container with weekday labels (Mon, Wed, Fri) and horizontal scroll on mobile */}
      <div className="overflow-x-auto pb-3 pt-1 scrollbar-hide flex justify-center items-center">
        <div className="min-w-[740px] flex justify-center text-ink-quiet [&_text]:fill-muted [&_.react-activity-calendar\\_\\_footer]:text-xs [&_.react-activity-calendar\\_\\_footer]:font-mono [&_.react-activity-calendar\\_\\_legend-colors]:gap-1">
          <GitHubCalendar
            username={username}
            year={selectedYear}
            colorScheme="dark"
            theme={gitHubTheme}
            blockSize={12}
            blockMargin={4}
            blockRadius={2}
            fontSize={12}
            showWeekdayLabels
            labels={{
              totalCount: `{{count}} contributions in ${
                selectedYear === "last" ? "the last year" : selectedYear
              }`,
            }}
          />
        </div>
      </div>

      {/* Card Footer */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-line mt-4 text-xs font-mono text-muted">
        <span>Consistent open-source activity & code commits</span>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-brand-ink hover:text-brand hover:underline transition-colors"
        >
          <span>View GitHub Profile</span>
          <ExternalLink size={13} />
        </a>
      </div>
    </Card>
  );
}

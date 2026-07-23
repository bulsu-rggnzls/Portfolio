import Heading from "../ui/Heading";
import Text from "../ui/Text";
import { cn } from "../../lib/utils";

export default function SectionHeader({
  title,
  description,
  className,
  titleSize = "h2",
  ...props
}) {
  return (
    <div className={cn("text-center space-y-3", className)} {...props}>
      <Heading as="h2" size={titleSize}>
        {title}
      </Heading>
      {description && (
        <Text variant="muted" size="lg" className="max-w-xl mx-auto">
          {description}
        </Text>
      )}
    </div>
  );
}

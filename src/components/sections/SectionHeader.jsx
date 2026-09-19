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
    <div className={cn("text-center", className)} {...props}>
      <Heading
        as="h2"
        size={titleSize}
        className="text-3xl sm:text-4xl font-bold text-slate-100 text-center tracking-tight"
      >
        {title}
      </Heading>
      {description && (
        <Text
          variant="muted"
          className="text-slate-400 text-center text-sm sm:text-base max-w-xl mx-auto mt-2 mb-12"
        >
          {description}
        </Text>
      )}
    </div>
  );
}

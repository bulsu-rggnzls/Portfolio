import Heading from "../ui/Heading";
import Text from "../ui/Text";
import { cn } from "../../utils/cn";

export default function SectionHeader({
  title,
  description,
  className,
  titleSize = "h2",
  ...props
}) {
  return (
    <div className={cn("text-center", className)} {...props}>
      <Heading as="h2" size={titleSize}>
        {title}
      </Heading>
      {description && (
        <Text
          variant="muted"
          className="text-center text-sm sm:text-base max-w-xl mx-auto mt-2 mb-12"
        >
          {description}
        </Text>
      )}
    </div>
  );
}

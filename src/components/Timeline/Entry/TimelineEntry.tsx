import { TimeLineEntryContent } from "./TimeLineEntryContent";
import { TimeLineEntryIcon } from "./TimeLineEntryIcon";

interface TimelineEntryProps {
  children?: React.ReactChild | React.ReactChild[];
  title?: string;
  date: Date;
  Icon: any; //React.ElementType;
  color?: string;
  isDivider?: boolean;
}

export function TimelineEntry({
  children = null,
  title,
  date,
  Icon,
  color = "gray",
  isDivider = true,
}: TimelineEntryProps) {
  return (
    <div className="flex mb-12 md:mb-12">
      <TimeLineEntryIcon Icon={Icon} color={color} isDivider={isDivider} />
      <TimeLineEntryContent title={title} date={date}>
        {children}
      </TimeLineEntryContent>
    </div>
  );
}

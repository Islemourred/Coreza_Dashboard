import { Edit } from "react-feather";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { H4, P } from "../../../../AbstractElements";
import {  TimelineElement1Heading, TimelineElement1Paragraph} from "../../../../Constant";

const VerticalTimelineElement1 = () => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      animate={true}
      date="Jan 14"
      icon={<Edit />}
    >
      <H4 attrH4={{ className: "vertical-timeline-element-subtitle" }}>{TimelineElement1Heading}</H4>
      <P>{TimelineElement1Paragraph}</P>
    </VerticalTimelineElement>
  );
};

export default VerticalTimelineElement1;

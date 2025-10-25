import { Edit } from "react-feather";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { H4, P } from "../../../../AbstractElements";
import { FinalTesting, TimelineElement6Paragraph } from "../../../../Constant";

const VerticalTimelineElement6 = () => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date="Feb 26"
      animate={true}
      icon={<Edit />}
    >
      <H4 attrH4={{ className: "vertical-timeline-element-subtitle" }}>{FinalTesting}</H4>
      <P>{TimelineElement6Paragraph}</P>
    </VerticalTimelineElement>
  );
};

export default VerticalTimelineElement6;

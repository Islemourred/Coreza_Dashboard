import { VerticalTimeline } from "react-vertical-timeline-component";
import VerticalTimelineElement1 from "./VerticalTimelineElement1";
import VerticalTimelineElement2 from "./VerticalTimelineElement2";
import VerticalTimelineElement3 from "./VerticalTimelineElement3";
import VerticalTimelineElement4 from "./VerticalTimelineElement4";
import VerticalTimelineElement5 from "./VerticalTimelineElement5";
import VerticalTimelineElement6 from "./VerticalTimelineElement6";

const VerticalTimelineComp = () => {
  return (
    <VerticalTimeline layout={"1-column"}>
      <VerticalTimelineElement1 />
      <VerticalTimelineElement2 />
      <VerticalTimelineElement3 />
      <VerticalTimelineElement4 />
      <VerticalTimelineElement5 />
      <VerticalTimelineElement6 />
    </VerticalTimeline>
  );
};
export default VerticalTimelineComp;

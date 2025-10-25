import { Activity } from "react-feather";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { H4 } from "../../../../AbstractElements";
import { AudioError, CityName2 } from "../../../../Constant";

const VerticalTimelineElement4 = () => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2006 - 2008"
      animate={true}
      icon={<Activity />}
    >
      <H4 attrH4={{ className: "vertical-timeline-element-subtitle" }}>
        {CityName2}
      </H4>
      <audio controls preload="none">
        <source src="horse.ogg" type="audio/ogg" />
        {AudioError}
      </audio>
    </VerticalTimelineElement>
  );
};

export default VerticalTimelineElement4;

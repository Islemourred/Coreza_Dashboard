import React from "react";
import { Edit } from "react-feather";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { H4, P } from "../../../../AbstractElements";
import { CityName } from "../../../../Constant";

const VerticalTimelineElement1 = () => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      animate={true}
      date="2011 - present"
      icon={<Edit />}
    >
      <H4 attrH4={{ className: "vertical-timeline-element-subtitle" }}>{CityName}</H4>
      <P>Creative Direction, User Experience, Visual Design, Project Management,Team Leading</P>
    </VerticalTimelineElement>
  );
};

export default VerticalTimelineElement1;

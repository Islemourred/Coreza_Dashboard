import React from "react";
import { Edit } from "react-feather";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { H4, P } from "../../../../AbstractElements";
import { Certification, CertificationParaGraph } from "../../../../Constant";

const VerticalTimelineElement6 = () => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date="November 2023"
      animate={true}
      icon={<Edit />}
    >
      <H4 attrH4={{ className: "vertical-timeline-element-subtitle" }}>{Certification}</H4>
      <P>{CertificationParaGraph}</P>
    </VerticalTimelineElement>
  );
};

export default VerticalTimelineElement6;

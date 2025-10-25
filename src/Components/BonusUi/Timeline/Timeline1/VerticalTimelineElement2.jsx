import React from "react";
import { Video } from "react-feather";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { H4 } from "../../../../AbstractElements";
import { TimelineElement2Heading } from "../../../../Constant";

const VerticalTimelineElement2 = () => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="Jan 18"
      icon={<Video />}
    >
      <H4 attrH4={{ className: "vertical-timeline-element-subtitle" }}>{TimelineElement2Heading}</H4>
      <div className="embed-responsive embed-responsive-21by9 m-t-20 ratio ratio-21x9">
        <iframe
          className="w-100"
          src="https://www.youtube.com/embed/wpmHZspl4EM"
          allowFullScreen
          title="myFrame"
        ></iframe>
      </div>
    </VerticalTimelineElement>
  );
};

export default VerticalTimelineElement2;

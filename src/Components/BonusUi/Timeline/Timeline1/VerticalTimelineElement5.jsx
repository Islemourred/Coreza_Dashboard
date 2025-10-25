import React from "react";
import { Camera } from "react-feather";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { H4, Image } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Services";
import { TimelineElement5Heading } from "../../../../Constant";

const VerticalTimelineElement5 = () => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date="Feb 18"
      animate={true}
      icon={<Camera />}
    >
      <H4 attrH4={{ className: "vertical-timeline-element-subtitle" }}>{TimelineElement5Heading}</H4>
      <Image
        attrImage={{
          className: "img-fluid p-t-20",
          src: dynamicImage("banner/3.jpg"),
          alt: "timelineImg2",
        }}
      />
    </VerticalTimelineElement>
  );
};

export default VerticalTimelineElement5;

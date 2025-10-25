import { Camera } from "react-feather";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { H4, Image } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Services";
import { TimelineElement3Heading } from "../../../../Constant";

const VerticalTimelineElement3 = () => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="Jan 24"
      animate={true}
      icon={<Camera />}
    >
      <H4 attrH4={{ className: "vertical-timeline-element-subtitle" }}>{TimelineElement3Heading}</H4>
      <Image
        attrImage={{
          className: "img-fluid p-t-20",
          src: dynamicImage("banner/1.jpg"),
          alt: "timelineImg1",
        }}
      />
    </VerticalTimelineElement>
  );
};

export default VerticalTimelineElement3;
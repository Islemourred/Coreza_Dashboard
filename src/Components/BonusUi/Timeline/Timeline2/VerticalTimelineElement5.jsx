import { Camera } from "react-feather";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { H4, Image } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Services";
import { OnlineCourse } from "../../../../Constant";

const VerticalTimelineElement5 = () => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date="April 2020"
      animate={true}
      icon={<Camera />}
    >
      <H4 attrH4={{ className: "vertical-timeline-element-subtitle" }}>{OnlineCourse}</H4>
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

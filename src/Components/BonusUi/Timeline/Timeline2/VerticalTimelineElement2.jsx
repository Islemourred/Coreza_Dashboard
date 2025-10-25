import { Video } from "react-feather";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { H4 } from "../../../../AbstractElements";
import { CityName2 } from "../../../../Constant";

const VerticalTimelineElement2 = () => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2010 - 2011"
      icon={<Video />}
    >
      <H4 attrH4={{ className: "vertical-timeline-element-subtitle" }}>{CityName2}</H4>
      <div className="embed-responsive embed-responsive-21by9 m-t-20 ratio ratio-21x9">
        <iframe
          src="https://www.youtube.com/embed/wpmHZspl4EM"
          className="w-100"
          allowFullScreen
          title="myFrame"
        ></iframe>
      </div>
    </VerticalTimelineElement>
  );
};

export default VerticalTimelineElement2;

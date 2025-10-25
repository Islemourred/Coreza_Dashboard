import { CardHeader } from "reactstrap";
import { Btn, H5 } from "../../../AbstractElements";
import { LatestPhotos } from "../../../Constant";

const PhotoSidebarHeader = ({toggleClick}) => {
  return (
    <CardHeader>
      <H5 attrH5={{ className: "m-0" }}>
        <Btn
          attrBtn={{
            className: " btn-link p-0",
            color: "transperant",
            onClick: toggleClick,
          }}
        >
          {LatestPhotos}
        </Btn>
      </H5>
    </CardHeader>
  );
};

export default PhotoSidebarHeader;

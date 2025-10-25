import { CardHeader } from "reactstrap";
import { RecentactivityHeading } from "../../../../Constant";
import { H4 } from "../../../../AbstractElements";

const RecentActivityCardHeader = () => {
  return (
    <CardHeader className=" pb-0">
      <div className="d-flex">
        <div className="flex-grow-1">
          <H4>{RecentactivityHeading}</H4>
        </div>
      </div>
    </CardHeader>
  );
};

export default RecentActivityCardHeader;

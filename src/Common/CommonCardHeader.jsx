import { CardHeader } from "reactstrap";
import { H4 } from "../AbstractElements";

const CommonCardHeader = ({ header, FeatherIcon }) => {
  return (
    <CardHeader className=" pb-0">
      <div className="d-flex">
        <div className="flex-grow-1">
          <H4>{header}</H4>
        </div>
      {FeatherIcon && (
        <div className="text-end">
          <FeatherIcon className="text-muted" />
        </div>
      )}
      </div>
    </CardHeader>
  );
};

export default CommonCardHeader;

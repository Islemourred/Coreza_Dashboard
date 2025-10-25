import { CardHeader } from "reactstrap";
import { H4, P } from "../../../../AbstractElements";
import { OurTotalUsers } from "../../../../Constant";

const UserCardHeader = () => {
  return (
    <CardHeader className="pb-0">
      <div className="d-flex justify-content-between">
        <div className="flex-grow-1">
          <P attrPara={{ className: "square-after f-w-600 header-text-primary" }}>{OurTotalUsers}
            <i className="fa fa-circle"></i>
          </P>
          <H4>96.564%</H4>
        </div>
      </div>
    </CardHeader>
  );
};

export default UserCardHeader;
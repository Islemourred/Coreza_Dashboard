import { CardHeader } from "reactstrap";
import { H4 } from "../../../../AbstractElements";
import { UsageInBrowser } from "../../../../Constant";

const UserBrowserCardHeader = () => {
  return (
    <CardHeader>
      <div className="d-flex">
        <div className="flex-grow-1">
          <H4>{UsageInBrowser}</H4>
        </div>
      </div>
    </CardHeader>
  );
};

export default UserBrowserCardHeader;

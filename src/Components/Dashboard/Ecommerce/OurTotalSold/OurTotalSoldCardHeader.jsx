import { CardHeader } from "reactstrap";
import { Ourtotalsold } from "../../../../Constant";

const OurTotalSoldCardHeader = () => {
  return (
    <CardHeader className="pb-0">
      <div className="d-flex justify-content-between">
        <div className="flex-grow-1">
          <p className="square-after f-w-600">
            {Ourtotalsold}
            <i className="fa fa-circle"> </i>
          </p>
        </div>
      </div>
    </CardHeader>
  );
};

export default OurTotalSoldCardHeader;

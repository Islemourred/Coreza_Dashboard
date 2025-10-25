import { CardHeader } from "reactstrap";
import { SaleDetails } from "../../../../Constant";
import { H4 } from "../../../../AbstractElements";

const SaledetailsCardHeading = () => {
  return (
    <CardHeader className="pb-0">
      <div className="d-flex">
        <div className="flex-grow-1">
          <H4>{SaleDetails}</H4>
        </div>
      </div>
    </CardHeader>
  );
};

export default SaledetailsCardHeading;

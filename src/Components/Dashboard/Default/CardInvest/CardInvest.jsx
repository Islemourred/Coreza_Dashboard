import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import { H4,P,} from "../../../../AbstractElements";

const CardInvest = () => {
  return (
    <Card className="total-investment">
      <CardHeader className="pb-0">
        <div className="d-flex justify-content-between">
          <div className="flex-grow-1">
            <P attrPara={{ className: "square-after f-w-600 header-text-primary" }}>
              Total Investment <i className="fa fa-circle f-10"></i>{" "}
            </P>
            <H4>96.564%</H4>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <div className="progress sm-progress-bar">
          <div className="progress-colors" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
            <div className="bg-secondary progress-1"></div>
            <div className="bg-primary progress-2"></div>
          </div>
        </div>
        <div className="bottom-progress">
          <span className="badge round-badge-primary font-worksans">
            3.56% <i className="fa fa-caret-up"></i>
          </span>
          <span className="pull-right font-primary font-worksans f-w-700">75%</span>
        </div>
      </CardBody>
    </Card>
  );
};

export default CardInvest;

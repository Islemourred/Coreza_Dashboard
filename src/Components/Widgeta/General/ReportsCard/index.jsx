import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { H4, P } from "../../../../AbstractElements";
import { ReportsCardDatas } from "../../../../Data/Widgets";
import { Fragment } from "react";

const ReportsCard = () => {
  return (
    <Fragment>
      {ReportsCardDatas.map((data, index) => (
        <Col sm="6" lg="3" key={index}>
          <Card
            className={`o-hidden ${ data.cardClassName ? data.cardClassName : ""}`}>
            <CardHeader className="pb-0">
              <div className="d-flex">
                <div className="flex-grow-1">
                  <P attrPara={{ className: `square-after f-w-600 ${data.headingClassName}`,}}>{data.Heading}<i className="fa fa-circle"> </i></P>
                  <H4>{data.amount}</H4>
                </div>
                <div className="d-flex static-widget">{data.svgIcon}</div>
              </div>
            </CardHeader>
            <CardBody className="pt-0">
              <div className="progress-widget">
                <div className="progress sm-progress-bar progress-animate">
                  <div className={data.progressClass} role="progressbar" style={{ width: `${data.progressValue}%` }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    <span className="animate-circle"></span>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Fragment>
  );
};

export default ReportsCard;
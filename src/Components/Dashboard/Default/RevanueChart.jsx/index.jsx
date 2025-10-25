import { Card, CardHeader, Col } from "reactstrap";
import { H4, P, } from "../../../../AbstractElements";
import CardInvest from "../CardInvest/CardInvest";
import {OurTotalRevenue} from "../../../../Constant";
import RevenueChartCardBody from "./RevenueChartCardBody";

const Ravanuechart = () => {
  return (
    <Col md="6" xl="3" className="box-col-25">
      <Card className="total-revenue overflow-hidden">
        <CardHeader>
          <div className="d-flex justify-content-between">
            <div className="flex-grow-1">
              <P attrPara={{ className: "square-after f-w-600 header-text-primary" }}>{OurTotalRevenue}
              <i className="fa fa-circle"></i>
              </P>
              <H4>96.564%</H4>
            </div>
          </div>
        </CardHeader>
        <RevenueChartCardBody/>
      </Card>
      <CardInvest />
    </Col>
  );
};

export default Ravanuechart;
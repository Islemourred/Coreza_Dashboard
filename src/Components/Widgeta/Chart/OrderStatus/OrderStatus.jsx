import Charts from "react-apexcharts";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { H4 } from "../../../../AbstractElements";
import { ShoppingBag } from "react-feather";
import { OrderStatusHeading } from "../../../../Constant";
import { OrderStatusone, orderstatusfive, orderstatusfour, orderstatusthree, orderstatustwo } from "../../../../Data/Widgets/WidgetChartData";
const OrderStatus = () => {
  return (
    <Col lg="7" className="box-col-7">
      <Card className="order-chart">
        <CardHeader className="pb-0">
          <Row>
            <Col xs="9"><H4>{OrderStatusHeading}</H4></Col>
            <Col xs="3" className="text-end"><ShoppingBag className="text-muted" /></Col>
          </Row>
        </CardHeader>
        <CardBody>
          <div className="chart-container">
                <Charts options={OrderStatusone.option} series={OrderStatusone.series} type="bar" height={70}/>
                <Charts options={orderstatustwo.option} series={orderstatustwo.series} type="bar" height={70}/>
                <Charts options={orderstatusthree.option} series={orderstatusthree.series} type="bar" height={70}/>
                <Charts options={orderstatusfour.option} series={orderstatusfour.series} type="bar" height={70}/>
                <Charts options={orderstatusfive.option} series={orderstatusfive.series} type="bar" height={70}/>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OrderStatus;
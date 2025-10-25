import { Card, CardBody, Col } from "reactstrap";
import OrderStaticsCardHeader from "./OrderStaticsCardHeader";
import Chart from "react-apexcharts";
import { areachart } from "../ApexCharts/ApexChart";
import OrderStaticsCardFooter from "./OrderStaticsCardFooter";

const OrderStatics = () => {
  return (
    <Col xl="4" lg="6" md="12" className="box-col-28 xl-28">
      <Card className=" static-card">
        <OrderStaticsCardHeader />
        <CardBody className="pb-0 pt-0">
          <Chart id="chart-currently" options={areachart.option} series={areachart.series} type="area" height={320}></Chart>
        </CardBody>
        <OrderStaticsCardFooter />
      </Card>
    </Col>
  );
};

export default OrderStatics;
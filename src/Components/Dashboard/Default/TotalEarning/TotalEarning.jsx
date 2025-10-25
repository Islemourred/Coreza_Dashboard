import { Card, CardBody, Col } from "reactstrap";
import TotalEarningCardHeader from "./TotalEarningCardHeader";
import Chart from "react-apexcharts";
import { apexMixedCharts } from "../ChartsData/ApexChart";
import TotalEarningCardFooter from "./TotalEarningCardFooter";

const TotalEarning = () => {
  return (
    <Col xl="4" lg="6" className="box-col-30 xl-30">
      <Card className="our-earning">
        <TotalEarningCardHeader />
        <CardBody className="p-0">
          <Chart options={apexMixedCharts.options} series={apexMixedCharts.series} type="bar" height={270}/>
        </CardBody>
        <TotalEarningCardFooter />
      </Card>
    </Col>
  );
};

export default TotalEarning;
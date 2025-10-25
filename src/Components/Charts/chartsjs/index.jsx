import  { Fragment } from "react";
import { Container, Row } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import BarChartClass from "./BarChart";
import DoughnutChartClass from "./DoughnutChart";
import LineChartClass from "./LineChart";
import LineChart2Class from "./LineChart2";
import PolarChartClass from "./PolarChart";
import RadarChartClass from "./RadarChart";

const ChartJsContain = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Chart Js" parent="Charts" title="ChartJs" />
      <Container fluid={true}>
        <Row>
          <BarChartClass />
          <LineChartClass />
          <RadarChartClass />
          <LineChart2Class />
          <DoughnutChartClass />
          <PolarChartClass />
        </Row>
      </Container>
    </Fragment>
  );
};

export default ChartJsContain;

import React, { Fragment, useContext } from 'react';
import { Container, Row } from 'reactstrap';
import PieChartClass from './PieChart';
import GoogleContext from '../../../Helper/GoogleChart';
import { AreaChart, BarChart2, BasicBarChart, ComboChart, GanttChart, LineChart, MaterialDesign, PieChart, SliceVisibilityThreshold, StackingAreaChart, WordTree } from '../../../Constant';
import PieChart2Class from './PieChart2';
import PieChart3Class from './PieChart3';
import PieChart4Class from './PieChart4';
import PieChart5Class from './PieChart5';
import PieChart6Class from './PieChart6';
import ComboChartClass from './ComboChart';
import { Breadcrumbs } from '../../../AbstractElements';


const GoogleChartsContain = () => {

  const chartData = useContext(GoogleContext);

  return (
    <Fragment>
       <Breadcrumbs mainTitle="Google Charts" parent="Charts" title="Google Charts" />
      <Container fluid={true}>
        <Row>
          <PieChartClass data={chartData.googleChart.GooglePieChart1} title={PieChart} digit={'1'} />
          <PieChart2Class data={chartData.googleChart.GooglePieChart2} is3D={true} />
          <PieChart3Class data={chartData.googleChart.GoogleDonutChart} pieHole={0.4} />
          <PieChart4Class data={chartData.googleChart.GoogleRotatingPieChart1} pieStartAngle={100} pieSliceText={'label'} />
          <PieChart5Class data={chartData.googleChart.GoogleRotatingPieChart2} />
          <PieChartClass data={chartData.googleChart.GoogleSliceCharts} title={SliceVisibilityThreshold} />
          <PieChartClass data={chartData.googleChart.GoogleAreaChart} title={AreaChart} />
          <PieChartClass data={chartData.googleChart.GoogleStackingChart} title={StackingAreaChart} />
          <PieChartClass data={chartData.googleChart.GoogleBasicbarChart} title={BasicBarChart} />
          <PieChartClass data={chartData.googleChart.GoogleMaterialDesignChart} title={MaterialDesign} />
          <PieChart6Class data={chartData.googleChart.GoogleGhantChart} title={GanttChart} />
          <PieChartClass data={chartData.googleChart.GoogleLineChart} title={LineChart} colClass='col-sm-12' />
          <ComboChartClass data={chartData.googleChart.GoogleComboChart} title={ComboChart} />
          <PieChartClass data={chartData.googleChart.GoogleBarChart2} title={BarChart2} />
          <PieChartClass data={chartData.googleChart.GoogleTreeChart} title={WordTree} />
        </Row>
      </Container>
    </Fragment>
  );
};

export default GoogleChartsContain;
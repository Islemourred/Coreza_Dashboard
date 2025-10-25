import React, { Fragment, useContext } from 'react';
import { Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import ChartistContext from '../../../Helper/Chartist';
import AnimatedChartClass from './AnimatedChart';
import AnimatedDotedClass from './AnimatingDonutWithSvg';
import BipolarBarChartClass from './BipolarBarChart';
import BipolarLineClass from './BipolarLine';
import FilledHolesClass from './FilledHolesChart';
import HolesInDataClass from './HolesInData';
import HorizontalBarChartClass from './HorizontalBarChart';
import LineChartWithAreaClass from './LineChartWithArea';
import ResponsiveChartClass from './ResponsiveChart';
import SimpleLineChartClass from './SimpleLineChart';
import StackedBarChartClass from './StackedBarChart';
import SVGPathAnimationClass from './SVGPathAnimation';

const ChartistContain = () => {
  const chartData = useContext(ChartistContext);
  return (
    <Fragment>
       <Breadcrumbs mainTitle="  Chartist" parent="Charts" title="  Chartist" />
      <Container fluid={true}>
        <Row>
          <AnimatedChartClass chartData={chartData.chartistData} />
          <SVGPathAnimationClass chartData={chartData.chartistData} />
          <AnimatedDotedClass chartData={chartData.chartistData} />
          <BipolarLineClass chartData={chartData.chartistData} />
          <LineChartWithAreaClass chartData={chartData.chartistData} />
          <BipolarBarChartClass chartData={chartData.chartistData} />
          <StackedBarChartClass chartData={chartData.chartistData} />
          <HorizontalBarChartClass chartData={chartData.chartistData} />
          <ResponsiveChartClass chartData={chartData.chartistData} />
          <SimpleLineChartClass chartData={chartData.chartistData} />
          <HolesInDataClass chartData={chartData.chartistData} />
          <FilledHolesClass chartData={chartData.chartistData} />
        </Row>
      </Container>
    </Fragment>
  );
};

export default ChartistContain;
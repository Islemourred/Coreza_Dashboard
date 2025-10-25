import  { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import ApexLineChartClass from './ApexLineChart';
import AreaSpalineChartClass from './AreaSpalineChart';
import BarChartClass from './BarChart';
import BasicAreaChartClass from './BasicAreaChartClass';
import BubbleChartClass from './BubbleChart';
import CandlestickChartClass from './CandlestickChart';
import ColumnChartClass from './ColumnChart';
import DonutChartClass from './DonutChart';
import MixedChartClass from './MixedChart';
import PieChartClass from './PieChart';
import RadarChartClass from './RadarChart';
import RadialBarChartClass from './RadialBarChart';
import SteplineChartClass from './SteplineChart';

const ApexchartsContain = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Apex charts" parent="Charts" title="Apex charts" />
      <Container fluid={true}>
        <Row>
          <BasicAreaChartClass />
          <AreaSpalineChartClass />
          <BarChartClass />
          <ColumnChartClass />
          <BubbleChartClass />
          <SteplineChartClass />
          <ApexLineChartClass />
          <PieChartClass />
          <DonutChartClass />
          <MixedChartClass />
          <CandlestickChartClass />
          <RadarChartClass />
          <RadialBarChartClass />
        </Row>
      </Container>
    </Fragment>
  );
};

export default ApexchartsContain;
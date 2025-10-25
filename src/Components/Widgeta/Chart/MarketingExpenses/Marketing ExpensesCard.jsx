import Charts from 'react-apexcharts';
import { Card, Col, Row } from 'reactstrap';
import { MarketChart } from '../../../../Data/Widgets/WidgetChartData'
import CommonCardHeader from '../../../../Common/CommonCardHeader'
import { MarketingExpenses } from '../../../../Constant';

const MarketingExpensesCard = () => {
  return (
    <Col lg="7" md="12" className="box-col-7">
        <Card className="o-hidden">
        <CommonCardHeader header={MarketingExpenses} />
          <div className="bar-chart-widget">
            <div className="bottom-content card-body">
              <Row >
                <Col >
                  <div id="chart-widget4">
                  <Charts options={MarketChart.options} series={MarketChart.series} type="bar" height={390} />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Card>
      </Col>

  )
}

export default MarketingExpensesCard
import { Card, CardBody,  Col, Row } from 'reactstrap'
import { Turnover } from '../../../../Data/Widgets/WidgetChartData'
import Charts from 'react-apexcharts';
import CommonCardHeader from '../../../../Common/CommonCardHeader';
import { TurnoverHeading } from '../../../../Constant';
const TurnOver = () => {
  return (
   <Col lg="5" className="xl-50 box-col-5">
   <div className="small-chart-widget chart-widgets-small">
     <Card >
        <CommonCardHeader header={TurnoverHeading}  />
       <CardBody >
         <div className="chart-container">
           <Row >
             <Col xs="12" >
               <div id="chart-widget7">
               <Charts options={Turnover.option} series={Turnover.series} type="area" height={320} />
               </div>
             </Col>
           </Row>
         </div>
       </CardBody>
     </Card>
   </div>
 </Col>
  )
}

export default TurnOver
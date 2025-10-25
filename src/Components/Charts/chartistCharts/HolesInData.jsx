import ChartistGraph from 'react-chartist';
import { Col, Card, CardBody } from 'reactstrap';
import { HolesInData } from '../../../Constant/index';
import HeadingCommon from '../../../Common/Component/HeadingCommon';

const HolesInDataClass = ({ chartData }) => {
  return (
      <Col xl="6" md="12" sm="12" className='box-col-12' >
        <Card>
          <HeadingCommon Heading={HolesInData} />
          <CardBody className='pt-0'>
            <ChartistGraph
              data={chartData.chart11Data}
              options={chartData.chart11Options}
              type={'Line'}
              className="ct-2 flot-chart-container" />
          </CardBody>
        </Card>
      </Col>
  );
};

export default HolesInDataClass;
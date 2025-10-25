import { PolarArea } from 'react-chartjs-2';
import { Col, Card, CardBody } from 'reactstrap';
import { PolarChart } from '../../../Constant/index';
import { polarData ,polarOption } from './chartsData';
import HeadingCommon from '../../../Common/Component/HeadingCommon';

const PolarChartClass = () => {
  return (
    <Col xl="6" md="12" className='box-col-12'  >
      <Card>
        <HeadingCommon Heading={PolarChart} />
        <CardBody className="chart-block-container pt-0">
          <PolarArea data={polarData} options={polarOption} width={734} height={335} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default PolarChartClass;
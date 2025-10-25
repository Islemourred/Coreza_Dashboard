import ChartistGraph from 'react-chartist';
import { Col, Card, CardBody } from 'reactstrap';
import { FilledHolesInData } from '../../../Constant/index';
import HeadingCommon from '../../../Common/Component/HeadingCommon';

const FilledHolesClass = ({ chartData }) => {
  return (
      <Col xl="6" md="12" sm="12" className='box-col-12' >
        <Card>
          <HeadingCommon Heading={FilledHolesInData} />
          <CardBody className='pt-0'>
            <ChartistGraph
              data={chartData.chart12Data}
              options={chartData.chart12Options}
              type={'Line'}
              className="ct-3 flot-chart-container" />
          </CardBody>
        </Card>
      </Col>
  );
};

export default FilledHolesClass;
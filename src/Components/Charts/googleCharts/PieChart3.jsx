import { Card, CardBody, Col } from "reactstrap";
import { DonutChart } from "../../../Constant/index";
import { Chart } from "react-google-charts";
import HeadingCommon from "../../../Common/Component/HeadingCommon";

const PieChart3Class = ({ data}) => {
  return (
      <Col sm="12" xl="6">
        <Card>
          <HeadingCommon CardHeaderClassName="pb-0" Heading={DonutChart} />
          <CardBody className="chart-block">
            <div className="chart-overflow" id="pie-chart1">
              <Chart
                width={data?.width}
                height={data?.height}
                chartType={data?.chartType}
                loader={<div>{"Loading Chart"}</div>}
                data={data?.data} // eslint-disable-next-line
                rootProps={data?.rootProps}
              />
            </div>
          </CardBody>
        </Card>
      </Col>
  );
};

export default PieChart3Class;

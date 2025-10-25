import { Card, CardBody,  Col } from "reactstrap";
import { GanttChart } from "../../../Constant/index";
import { Chart } from "react-google-charts";
import { PieChart6Data, PieChart6option } from "./ChartData";
import HeadingCommon from "../../../Common/Component/HeadingCommon";

const PieChart5Class = ({ data }) => {
  return (
      <Col sm="12">
        <Card>
          <HeadingCommon CardHeaderClassName="pb-0" Heading={GanttChart} H4span={2}/>
          <CardBody className="chart-block">
            <div className="chart-overflow" id="pie-chart1">
              <Chart
                width={data?.width}
                height={data?.height}
                chartType={data?.chartType}
                loader={<div>{"Loading Chart"}</div>}
                data={PieChart6Data}
                options={PieChart6option}
                rootProps={data?.rootProps}
              />
            </div>
          </CardBody>
        </Card>
      </Col>
  );
};

export default PieChart5Class;

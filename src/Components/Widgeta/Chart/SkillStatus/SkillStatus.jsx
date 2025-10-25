import Charts from "react-apexcharts";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { H4 } from "../../../../AbstractElements";
import { TrendingUp } from "react-feather";
import { Skill } from "../../../../Data/Widgets/WidgetChartData";
import { SkillStatusHeading } from "../../../../Constant";
const SkillStatus = () => {
  return (
    <Col lg="5" sm="12" className="box-col-5">
      <Card>
        <CardHeader className="pb-0">
          <Row>
            <Col xs="9" >
              <H4>{SkillStatusHeading}</H4>
            </Col>
            <Col xs="3" className="text-end">
              <TrendingUp className="text-muted" />
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
          <Charts options={Skill.options} series={Skill.series} type="radialBar" height={370}/>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SkillStatus;
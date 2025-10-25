import { CardFooter, Col, Row } from "reactstrap";
import { cardFooterData } from "../../../../Data/Widgets";
import { H5, H6 } from "../../../../AbstractElements";

const ManagerCardFooter = () => {
  return (
    <CardFooter>
      <Row>
        {cardFooterData.map((data, index) => (
          <Col sm="4" xs="4" key={index}>
            <H6 attrH6={{ className: "font-Montserrat" }}>{data.tittle}</H6>
            <H5>
              <span className="counter">{data.value}</span>
              {data.sub ? data.sub : ""}
            </H5>
          </Col>
        ))}
      </Row>
    </CardFooter>
  );
};

export default ManagerCardFooter;

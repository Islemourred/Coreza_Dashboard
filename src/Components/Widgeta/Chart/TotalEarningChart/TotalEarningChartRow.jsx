import { Col, Row } from "reactstrap";
import { H4 } from "../../../../AbstractElements";
import { Year, Month, Today } from "../../../../Constant";

const TotalEarningChartRow = () => {
  let datas = [
    { value: 12, Tittle: Year, spanNumber: 3659 },
    { value: 15, Tittle: Month, spanNumber: 698 },
    { value: 34, Tittle: Today, spanNumber: 9361 },
  ];
  return (
    <Row className="text-center">
      {datas.map((data, i) => (
        <Col key={i} xs="4" className=" b-r-light">
          <div>
            <span className="font-secondary f-w-600 f-16">
              {data.value}%<i className="icon-angle-up f-12 ms-1"></i>
            </span>
            <span className="text-muted block-bottom">{data.Tittle}</span>
            <H4 attrH4={{ className: "num m-0" }}>
              <span className="counter color-bottom">{data.spanNumber}</span>M
            </H4>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default TotalEarningChartRow;

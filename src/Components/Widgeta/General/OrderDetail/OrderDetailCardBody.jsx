import { Col, Row } from "reactstrap";
import { OrderDetaildatas } from "../../../../Data/Widgets";
import { H5, H6 } from "../../../../AbstractElements";

const OrderDetailCardBody = () => {
  
  return (
    <Row className="gy-4">
      {OrderDetaildatas.map((data, index) => (
        <Col key={index} md="6">
          <div className="widget-card">
            <div className="d-flex align-self-center">
              <div className={`widget-icon ${data.iconClass}`}>{data.icon}</div>
              <div className="flex-grow-1">
                <H6>{data.tittle}</H6>
                <H5>
                  {data.amount}
                  <span className={data.spanClassName}>
                    {data.downIcon ? (
                      data.downIcon
                    ) : (
                      <i className="icofont icofont-arrow-up me-1"></i>
                    )}
                  </span>
                  <span
                    className={`font-Montserrat ${data.spanClassName} f-w-700`}
                  >
                    {data.value}%
                  </span>
                </H5>
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default OrderDetailCardBody;
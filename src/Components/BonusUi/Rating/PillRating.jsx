import Rating from "react-rating";
import { Col, Card, CardBody } from "reactstrap";
import { PillRating } from "../../../Constant";
import HeadingCommon from "../../../Common/Component/HeadingCommon";

const PillRatingClass = () => {
  return (
      <Col xl="6" lg="12" md="6">
        <Card>
        <HeadingCommon Heading={PillRating} CardHeaderClassName="pb-0"/>
          <CardBody>
            <div className="rating-container">
              <Rating className="rating" emptySymbol={<span style={{ margin: "10px" }}>---</span>} fullSymbol={["A", "B", "C", "D", "E"].map((n) => (<span style={{ fontSize: "20px" }}>{n}</span> ))} onClick={(rate) => alert(rate)}></Rating>
            </div>
          </CardBody>
        </Card>
      </Col>
  );
};

export default PillRatingClass;
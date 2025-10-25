import { Card, CardBody, Col, Row } from "reactstrap";
import ScrollBar from "react-perfect-scrollbar";
import { P } from "../../../AbstractElements";
import { HorizontalScrollHeading, LongLorem, ScrollParagraph, ScrollParagraph2, ScrollParagraph3} from "../../../Constant";
import HeadingCommon from "../../../Common/Component/HeadingCommon";

const HorizontalScroll = () => {
  return (
    <Col md="6">
      <Card>
        <HeadingCommon CardHeaderClassName="pb-0" Heading={HorizontalScrollHeading}/>
        <CardBody>
          <ScrollBar className="horizontal-scroll scroll-demo ps-container ps-theme-default ps-active-x" option={{ suppressScrollY: true }}>
            <div className="horz-scroll-content">
              <Row>
                <Col sm="3"><P>{LongLorem}</P></Col>
                <Col sm="3"><P>{ScrollParagraph}</P></Col>
                <Col sm="3"><P>{ScrollParagraph2}</P></Col>
                <Col sm="3"><P>{ScrollParagraph3}</P></Col>
              </Row>
            </div>
          </ScrollBar>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HorizontalScroll;
import { Card, CardBody, Col } from "reactstrap";
import ScrollBar from "react-perfect-scrollbar";
import { P } from "../../../AbstractElements";
import HeadingCommon from "../../../Common/Component/HeadingCommon";
import {LongLorem,ScrollParagraph,ScrollParagraph2,ScrollParagraph3,ScrollParagraph4,VerticalScrollHeading,} from "../../../Constant";

const VerticalScroll = () => {
  return (
    <Col md="6">
      <Card>
        <HeadingCommon CardHeaderClassName="pb-0" Heading={VerticalScrollHeading}/>
        <CardBody>
          <ScrollBar className="vertical-scroll scroll-demo">
            <div>
              <P>{LongLorem}</P>
              <P>{ScrollParagraph}</P>
              <P>{ScrollParagraph2}</P>
              <P>{ScrollParagraph3}</P>
              <P>{ScrollParagraph4}</P>
            </div>
          </ScrollBar>
        </CardBody>
      </Card>
    </Col>
  );
};

export default VerticalScroll;
import  { Fragment } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Breadcrumbs} from '../../../AbstractElements';
import LargeShadows from './Large';
import NoShadows from './NoShadow';
import RegularShadows from './Regular';
import SmallShadows from './Small';
import HeadingCommon from "../../../Common/Component/HeadingCommon"
import { BoxShadowExamples, BoxShadowExamplesSpan } from '../../../Constant';
const Shadow = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Shadow" parent="Ui Kits" title="Box Shadow" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card className="box-shadow-title">
              <HeadingCommon Heading={BoxShadowExamples} CardHeaderClassName="pb-0" span={BoxShadowExamplesSpan}/>
              <CardBody className="row">
                <LargeShadows />
                <RegularShadows />
                <SmallShadows />
                <NoShadows />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Shadow;
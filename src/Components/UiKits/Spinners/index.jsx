import  { Fragment } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Breadcrumbs, H6, Spinner } from '../../../AbstractElements';
import { LoaderStyle } from '../../../Constant';
import HeadingCommon from '../../../Common/Component/HeadingCommon';
import DynamicSpinners from './DynamicSpinners';

const Spinners = () => {

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Spinners" parent="Ui Kits" title="Spinners" />
      <Container fluid={true}>
        <Row>
          <Col sn="12">
            <Card>
            <HeadingCommon Heading={LoaderStyle} CardHeaderClassName="pb-0" />
              <CardBody className="row">
                {/* This is just for reference so you cant take it as example of how to use  it */}
                <Col md="3">
                  <H6 attrH6={{ className: 'sub-title mb-0 text-center' }} >{'Loader 1'}</H6>
                  <div className="loader-box">
                    <Spinner attrSpinner={{ className: 'loader-1' }} />
                  </div>
                </Col>
                {/* As there is so many examples, so for repeated code we called it inside loop so we can utilize our code */}
                <DynamicSpinners/>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Spinners;
import { H4, Breadcrumbs } from '../../../../AbstractElements';
import FullColored from './FullColored';
import OutlineColor from './OutlineColor';
import SelectForm from './SelectForm';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import React, { Fragment } from 'react';

const FormSelectContain = () => {
    return (
      <Fragment>
        <Breadcrumbs mainTitle="Select2" parent="Form Widget" title="Select2" />
        <Container fluid={true}>
          <div className="select2-drpdwn">
            <Row >
              <Col md="12">
                <Card>
                  <CardHeader className="pb-0">
                    <H4 attrH4={{ className: 'card-title' }}>Select-2</H4>
                  </CardHeader>
                  <CardBody>
                    <SelectForm />
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card>
                  <CardHeader className=" pb-0">
                    <H4 attrH4={{ className: 'card-title' }}>Outline Color Variant</H4>
                  </CardHeader>
                  <CardBody>
                    <OutlineColor />
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card>
                  <CardHeader className=" pb-0">
                    <H4 attrH4={{ className: 'card-title' }}>Full Colored Variant</H4>
                  </CardHeader>
                  <CardBody>
                    <FullColored />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </Fragment>
    );
};
export default FormSelectContain;
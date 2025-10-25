import React, { Fragment } from 'react';
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { H6 } from '../../../../AbstractElements';
import { UploadCoverLetter, UploadRecommendations, UploadYourCV, UploadYourFiles } from '../../../../Constant';

const UploadFileClass = () => {
  return (
    <Fragment>
      <H6 className="mb-0">{UploadYourFiles}</H6>
      <Form className="theme-form">
        <Row>
          <Col>
            <FormGroup>
              <Label className="col-form-label pt-0">{UploadCoverLetter}:
                <span className="font-danger">*</span>
              </Label>
              <Input  type="file" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label className="col-form-label pt-0">{UploadYourCV}:
                <span className="font-danger">*</span>
              </Label>
              <Input  type="file" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup className="mb-0">
              <Label className="col-form-label pt-0">{UploadRecommendations}:</Label>
              <Input  type="file" />
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </Fragment>
  );
};

export default UploadFileClass;
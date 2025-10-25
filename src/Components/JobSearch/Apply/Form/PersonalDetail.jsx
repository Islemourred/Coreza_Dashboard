import { H6 } from '../../../../AbstractElements';
import { PersonalDetails, FullName, Email, Password, RepeatPassword, BirthDate, PhoneNumber } from '../../../../Constant';
import { Typeahead } from 'react-bootstrap-typeahead';
import React, { Fragment, useState } from 'react';
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

const PersonalDetail = () => {
  // eslint-disable-next-line
  const [multiple, setMultiple] = useState(false);
  return (
    <Fragment>
      <H6 attrH6={{ className: 'mb-0' }} >{PersonalDetails}</H6>
      <Form className="theme-form">
        <Row>
          <Col>
            <FormGroup>
              <Label htmlFor="exampleFormControlInput1">{FullName}:
                <span className="font-danger">*</span></Label>
              <Input  id="exampleFormControlInput1" type="email" placeholder="Enter your full name" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label htmlFor="exampleFormControlInput3">{Email}:
                <span className="font-danger">*</span></Label>
              <Input  id="exampleFormControlInput3" type="email" placeholder="Enter email" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label htmlFor="exampleFormControlpassword">{Password}:
                <span className="font-danger">*</span></Label>
              <Input  id="exampleFormControlpassword" type="password" placeholder="Enter password" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label htmlFor="exampleFormControlpassword1">{RepeatPassword}:
                <span className="font-danger">*</span></Label>
              <Input  id="exampleFormControlpassword1" type="password" placeholder="Repeat password" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm="4">
            <Label className="col-form-label pt-0">{BirthDate}</Label>
            <FormGroup>
              <Typeahead
                id="basic-typeahead"
                labelKey="name"
                multiple={multiple}
                options={['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']}
                placeholder="Choose a Month..."
              />
            </FormGroup>
          </Col>
          <Col sm="4">
            <div className="col-form-label m-2 d-sm-block d-none"></div>
            <FormGroup className="select-no-label">
              <Typeahead
                id="basic-typeahead"
                labelKey="name"
                multiple={multiple}
                options={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']}
                placeholder="date"
              />
            </FormGroup>
          </Col>
          <Col sm="4">
            <div className="col-form-label m-2 d-sm-block d-none"></div>
            <FormGroup className="select-no-label">
              <Typeahead
                id="basic-typeahead"
                labelKey="name"
                multiple={multiple}
                options={['1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022']}
                placeholder="Year"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label htmlFor="exampleFormControlInput4">{PhoneNumber}:</Label>
              <Input  id="exampleFormControlInput4" type="email" placeholder="Enter Phone no." />
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </Fragment>
  );
};
export default PersonalDetail;
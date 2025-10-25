import { H6 } from '../../../../AbstractElements';
import { YourEducation, CollegeName, Period, DegreeLevel, Specialization } from '../../../../Constant';
import React, { Fragment, useState } from 'react';
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import DatePicker from 'react-datepicker';
import { Typeahead } from 'react-bootstrap-typeahead';

const EducationClass = () => {
  // eslint-disable-next-line
  const [multiple, setMultiple] = useState(false);
  const [startDate, setStartDate] = useState(new Date(),);
  const [startDate1, setStartDate1] = useState(new Date(),);

  const handleChange = date => {
    setStartDate(date);
  };

  const handleChange1 = date => {
    setStartDate1(date);
  };

  return (
    <Fragment>
      <H6 attrH6={{ className: 'mb-0' }} >{YourEducation}</H6>
      <Form className="theme-form">
        <Row>
          <Col xl="6" className='xl-100'>
            <FormGroup>
              <Label htmlFor="exampleFormControlInput5">{CollegeName}:
                <span className="font-danger">*</span>
              </Label>
              <Input className="form-control" id="exampleFormControlInput5" type="email" placeholder="Enter college name" />
            </FormGroup>
          </Col>
          <Col xl="6" className='xl-100'>
            <Label className="col-form-label text-end pt-0">{Period}:
              <span className="font-danger">*</span>
            </Label>
            <Row>
              <Col sm="6">
                <FormGroup>
                  <DatePicker className="form-control" selected={startDate} onChange={handleChange} />
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <DatePicker className="form-control" selected={startDate1} onChange={handleChange1} />
                </FormGroup>
              </Col>
            </Row>
          </Col>
          <Col lg="6">
            <Label className="col-form-label pt-0">{DegreeLevel}:
              <span className="font-danger">*</span>
            </Label>
            <FormGroup>
              <Typeahead
                id="basic-typeahead"
                labelKey="name"
                multiple={multiple}
                options={['Student', 'Bachelor', 'Master', 'Associate']}
                placeholder="Degree"
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <Label htmlFor="exampleFormControlInput6">{Specialization}:
                <span className="font-danger">*</span>
              </Label>
              <Input className="form-control" id="exampleFormControlInput6" type="email" placeholder="Enter specialization" />
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </Fragment>
  );
};

export default EducationClass;
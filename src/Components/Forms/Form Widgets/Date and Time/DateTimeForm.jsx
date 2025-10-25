import DateTime2 from './DateTime2';
import React, { Fragment, useState } from 'react';
import DatePicker from 'react-datepicker';
import { Col, Form, InputGroup, Label, Row } from 'reactstrap';

const DateTimeForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const handleChange = date => {
    setStartDate(date);
  };
  return (
    <Fragment>
      <Form className="theme-form">
        <Row className="mb-3 g-3">
          <Label className="col-sm-3 col-form-label text-end">Default</Label>
          <Col xl="5" sm="7" lg="8">
            <InputGroup className="date" id="dt-minimum" data-target-input="nearest">
              <DatePicker
                className="form-control"
                selected={startDate}
                onChange={handleChange}
                dateFormat="MMMM d, yyyy"
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className="mb-3 g-3">
          <Label className="col-sm-3 col-form-label text-end">Minimum Setup</Label>
          <Col xl="5" sm="7" lg="8">
            <InputGroup className="date" id="dt-minimum" data-target-input="nearest">
              <DatePicker
                className="form-control"
                selected={startDate}
                showTimeSelect
                onChange={handleChange}
                dateFormat="MMMM d, yyyy h:mm aa"
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className="mb-3 g-3">
          <Label className="col-sm-3 col-form-label text-end">Using Locales</Label>
          <Col xl="5" sm="7" lg="8">
            <InputGroup className="date" id="dt-minimum" data-target-input="nearest">
              <DatePicker
                className="form-control datetimepicker-input"
                selected={startDate}
                showTimeSelect
                onChange={handleChange}
                dateFormat="MMMM d, yyyy h:mm aa"
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className="mb-3 g-3">
          <Label className="col-sm-3 col-form-label text-end">Time Only</Label>
          <Col xl="5" sm="7" lg="8">
            <InputGroup className="date" id="dt-minimum" data-target-input="nearest">
              <DatePicker
                className="form-control datetimepicker-input"
                selected={startDate}
                onChange={handleChange}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className="mb-3 g-3">
          <Label className="col-sm-3 col-form-label text-end">Date Only</Label>
          <Col xl="5" sm="7" lg="8">
            <InputGroup className="date" id="dt-minimum" data-target-input="nearest">
              <DatePicker
                className="form-control datetimepicker-input"
                selected={startDate}
                onChange={handleChange}
                dateFormat="MMMM d, yyyy h:mm aa"
              />
            </InputGroup>
          </Col>
        </Row>
        <DateTime2 />
      </Form>

    </Fragment>
  );
};
export default DateTimeForm;
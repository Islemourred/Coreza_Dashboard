import { SpecificDateRange, MinDate, MaxDate, DateRange } from '../../../../Constant';
import React, { Fragment, useState } from 'react';
import { Row, Col, FormGroup, Label } from 'reactstrap';
import DatePicker from 'react-datepicker';

const ChildDatepicker = () => {
  const [startDate, setstartDate] = useState(new Date());
  const endDate = new Date();
  const handleChange = date => {
    setstartDate(date);
  };
  const addDays = date => {
    setstartDate(date, 4);
  };
  return (
    <Fragment>
      <FormGroup className="row">
        <Label className="col-sm-3 col-form-label text-end">{SpecificDateRange}</Label>
        <Col xl="5" sm="9">
          <Row className="min-date">
            <Col md="12" className="mb-2">
              <DatePicker className="form-control"
                selected={startDate}
                onChange={handleChange}
                minDate={new Date()}
                maxDate={addDays}
                placeholderText="Select a date between today and 5 days in the future"
              />
            </Col>
            <Col md="12" className="mb-2">
              <Label className="col-sm-3 col-form-label">{MinDate}</Label>
              <DatePicker className="form-control"
                selected={startDate}
                onChange={handleChange}
                minDate={new Date()}
                placeholderText="Select a date after 5 days ago"
              />
            </Col>
            <Col md="12" className="mb-2">
              <Label className="col-sm-3 col-form-label">{MaxDate}</Label>
              <DatePicker className="form-control"
                selected={startDate}
                onChange={handleChange}
                maxDate={new Date()}
                placeholderText="Select a date after 5 days ago"
              />
            </Col>
            <Col md="12" className="date-range">
              <Label className="col-sm-3 col-form-label">{DateRange}</Label>
              <DatePicker className="form-control"
                selected={startDate}
                onChange={handleChange}
                selectsStart
                startDate={startDate}
                endDate={endDate}
              />
              <DatePicker className="form-control"
                selected={endDate}
                onChange={handleChange}
                selectsEnd
                endDate={endDate}
                minDate={startDate}
              />
            </Col>
          </Row>
        </Col>
      </FormGroup>
    </Fragment >
  );
};
export default ChildDatepicker;
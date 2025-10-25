import { SelectDateWithTime, CustomDateFormat, TodayButton, DisableDaysOfWeek, InlineVersion, DisableDatepicker, SelectTimeOnly, Default } from '../../../../Constant';
import ChildDatepicker from './ChildDatepicker';
import React, { Fragment, useState } from 'react';
import { Col, Form,  Label, Row } from 'reactstrap';
import DatePicker from 'react-datepicker';

const DatePickersData = () => {
  const [startDate, setstartDate] = useState(new Date());
  const handleChange = date => {
    setstartDate(date);
  };
  return (
    <Fragment>
      <Form className="theme-form">
        <Row className="mb-3">
          <Label className="col-sm-3 col-form-label text-end">{Default}</Label>
          <Col xl="5" sm="9">
            <div className="input-group">
              <DatePicker className="form-control" selected={startDate} onChange={handleChange} />
            </div>
          </Col>
        </Row>
        <Row className="mb-3">
          <Label className="col-sm-3 col-form-label text-end">{SelectDateWithTime}</Label>
          <Col xl="5" sm="9">
            <DatePicker className="form-control" showPopperArrow={false} selected={startDate} showTimeSelect dateFormat="Pp" />
          </Col>
        </Row>
        <Row className="mb-3">
          <Label className="col-sm-3 col-form-label text-end">{SelectTimeOnly}</Label>
          <Col xl="5" sm="9">
            <DatePicker className="form-control" selected={startDate} onChange={handleChange} showTimeSelect
              showTimeSelectOnly timeIntervals={15} timeCaption="Time" dateFormat="h:mm aa" />
          </Col>
        </Row>
        <Row className="mb-3">
          <Label className="col-sm-3 col-form-label text-end">{CustomDateFormat}</Label>
          <Col xl="5" sm="9">
            <DatePicker className="form-control" dateFormat="yyyy/MM/dd" selected={startDate} onChange={handleChange} />
          </Col>
        </Row>
        <Row className="mb-3">
          <Label className="col-sm-3 col-form-label text-end">{TodayButton}</Label>
          <Col xl="5" sm="9">
            <DatePicker className="form-control" todayButton="Vandaag" selected={startDate} onChange={handleChange} />
          </Col>
        </Row>
        <Row className="mb-3">
          <Label className="col-sm-3 col-form-label text-end">{DisableDaysOfWeek}</Label>
          <Col xl="5" sm="9">
            <DatePicker className="form-control" placeholderText="Click to select a date" />
          </Col>
        </Row>
        <ChildDatepicker />
        <Row className="mb-3">
          <Label className="col-sm-3 col-form-label text-end">{DisableDatepicker}</Label>
          <Col sm="3">
            <div className="datepicker-here" data-language="en">
              <DatePicker className="form-control"
                selected={startDate}
                onChange={handleChange}
                disabled
                placeholderText="This is disabled"
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Label className="col-sm-3 col-form-label text-end">{InlineVersion}</Label>
          <Col sm="3">
            <div className="datepicker-here" data-language="en">
              <DatePicker className="form-control"
                selected={startDate}
                onChange={handleChange}
                inline
              />
            </div>
          </Col>
        </Row>
      </Form>
    </Fragment>
  );
};
export default DatePickersData;
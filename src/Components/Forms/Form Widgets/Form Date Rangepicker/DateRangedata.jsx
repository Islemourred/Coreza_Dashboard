import { H6, P } from '../../../../AbstractElements';
import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import DatePicker from 'react-datepicker';
import { Col, FormGroup, Input } from 'reactstrap';

const DateRangedata = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  var date1 = new Date().getDate();
  var month = new Date().getMonth();
  var year = new Date().getFullYear();
  const startDate1 = date1 - 1 + '/' + month + '/' + year;
  const todayDate = date1 + '/' + month + '/' + year;
  const last7day = date1 - 7 + '/' + month + '/' + year;
  const last30day = date1 - 30 + '/' + month + '/' + year;
  useEffect(() => { }, [startDate1, todayDate, last7day]);
  const handleChange = date => {
    if (date === 'Today') {
      alert(`'Today's date is :' + ' =  ' + ${todayDate}`);
    } else if (date === 'Yesterday') {
      alert(`'Yesterday's Date was:' + ' =  ' + ${startDate1}`);
    } else if (date === 'Last 7 Days') {
      alert(`'Last 7 date' + ' =  ' + ${last7day}`);
    } else if (date === 'Last 30 Days') {
      alert(`'Last 30 Days' + ' =  ' + ${last30day}`);
    }
  };
  return (
    <Fragment>
      <Col xl="6">
        <div className="daterange-card">
          <H6 attrH6={{ className: 'sub-title' }}>Date Range Picker</H6>
          <P>The Date Range Picker use the current value of the input to initialize, and update the input if new dates are chosen.</P>
          <div className="theme-form">
            <FormGroup >
              <DatePicker
                className="form-control"
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => {
                  setDateRange(update);
                }}
                isClearable={true} />
            </FormGroup>
          </div>
        </div>
      </Col>
      <Col xl="6">
        <div className="daterange-card">
          <H6 attrH6={{ className: 'sub-title' }}>Predefined Ranges</H6>
          <P>This example shows the option to predefine date ranges that the user can choose from a list.</P>
          <div className="theme-form">
            <FormGroup >
              <Input type="select" className="form-control form-select" value={startDate1}
                onChange={(e) => handleChange(e.target.value)} placeholder="Select">
                <option >--Select--</option>
                <option value="Today">Today</option>
                <option value="Yesterday">Yesterday</option>
                <option value="Last 7 Days">Last 7 Days</option>
                <option value="Last 30 Days">Last 30 Days</option>
              </Input>

            </FormGroup>
          </div>
        </div>
      </Col>
    </Fragment>
  );
};
export default DateRangedata;
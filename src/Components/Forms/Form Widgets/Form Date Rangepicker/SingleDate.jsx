import { H6, P } from '../../../../AbstractElements';
import React, { useState } from 'react';
import { Fragment } from 'react';
import DatePicker from 'react-datepicker';
import { Col, FormGroup } from 'reactstrap';

const SingleDate = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [startDate1] = useState(new Date());
  const handleChange = date => {
    var today = new Date();
    var birthDate = new Date(date);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    alert(`'Your Age is =>'+''+${age}`);
  };
  return (
    <Fragment>
      <Col xl="6">
        <div className="daterange-card">
          <H6 attrH6={{ className: 'sub-title' }}>Single Date Picker</H6>
          <P>The Date Range Picker can be turned into a single date picker widget with only one calendar. In this example, dropdowns to select a month and year have also been enabled at the top of the calendar to quickly jump to different months.</P>
          <div className="theme-form">
            <FormGroup >
              <DatePicker
                className="form-control"
                selected={startDate1}
                onChange={handleChange}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
              />
            </FormGroup>
          </div>
        </div>
      </Col>
      <Col xl="6">
        <div className="daterange-card">
          <H6 attrH6={{ className: 'sub-title' }}>Input Initially Empty</H6>
          <P>If you're using a date range as a filter, you may want to attach a picker to an input but leave it empty by default. This example shows how to accomplish that using the <code>autoUpdateInput</code> setting, and the <code>apply</code> and <code>cancel</code> events.</P>
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
                isClearable={true}
                monthsShown={2}
              />
            </FormGroup>
          </div>
        </div>
      </Col>
    </Fragment>
  );
};
export default SingleDate;
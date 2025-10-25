import { useState } from "react";
import DatePicker from "react-datepicker";
import { Card, CardBody, Col } from "reactstrap";
const Calender = () => {
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (date) => {
    setStartDate(date);
  };

  return (
    <Col xxl="3" xl="6" md="6" className="xl-50 box-col-6">
      <Card>
        <CardBody className="cal-date-widget">
          <div className="cal-datepicker">
            <div className="datepicker-here" data-language="en">
              <DatePicker selected={startDate} onChange={handleChange} inline />
            </div>
          </div>
          <div />
        </CardBody>
      </Card>
    </Col>
  );
};

export default Calender;
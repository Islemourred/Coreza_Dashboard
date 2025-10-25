import React, { Fragment, useState } from 'react';
import { FormGroup, Label } from 'reactstrap';
import DatePicker from 'react-datepicker';

const MainDates = (props) => {
    const { StartingDate = '', EndingDate = '' } = props;
    const [startDate, setstartDate] = useState(new Date());
    const [endDate, setendDate] = useState(new Date());
    const handleStartDate = date => {
        setstartDate(date);
    };
    const handleEndDate = date => {
        setendDate(date);
    };
    return (
        <Fragment>
            {
                StartingDate ?
                    <FormGroup>
                        <Label>{StartingDate}</Label>
                        <DatePicker className="datepicker-here form-control" selected={startDate} onChange={handleStartDate} />
                    </FormGroup>
                    :
                    <FormGroup>
                        <Label>{EndingDate}</Label>
                        <DatePicker className="datepicker-here form-control" selected={endDate} endDate={endDate} onChange={handleEndDate} />
                    </FormGroup>
            }
        </Fragment>
    );
};
export default MainDates;
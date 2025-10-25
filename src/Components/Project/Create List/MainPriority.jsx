import React, { Fragment } from 'react';
import { Col, FormGroup, Input, Label } from 'reactstrap';
 import { Big, High, Low, Medium, Small, Urgent } from '../../../Constant';

const MainPriority = ({Priority,ProjectSize}) => {
 
    return (
        <Fragment>
            {
                Priority ?
                    <Col sm="4">
                        <FormGroup>
                            <Label>{Priority}</Label>
                            <Input type='select' className="form-control form-select"
                                name="progress_level" placeholder="Select Status" >
                                <option value="25">{Low}</option>
                                <option value="70">{Medium}</option>
                                <option value="50">{High}</option>
                                <option value="100">{Urgent}</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    :
                    <Col sm="4">
                        <FormGroup>
                            <Label>{ProjectSize}</Label>
                            <Input type='select' name="status" placeholder="Select Status" className="form-control form-select" >
                                <option>{Small}</option>
                                <option>{Medium}</option>
                                <option>{Big}</option>
                            </Input>
                        </FormGroup>
                    </Col>
            }


        </Fragment>
    );
};
export default MainPriority;
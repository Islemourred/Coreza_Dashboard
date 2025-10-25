import React, { Fragment } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import { FixPrice, Hourly } from '../../../Constant';

const MainType = ({ errors, register, ProjectRate, ProjectType }) => {

    return (
        <Fragment>
            {
                ProjectRate ?
                    <FormGroup>
                        <Label>{ProjectRate}</Label>
                        <input className="form-control" type="number" name="rate" placeholder="Enter project Rate"
                            {...register('rate', { required: true })} />
                        <span style={{ color: 'red' }}>{errors.rate && 'rate is required'} </span>
                    </FormGroup>
                    :
                    <FormGroup>
                        <Label>{ProjectType}</Label>
                        <Input type="select" name="status" placeholder="Select Status" className="form-control form-select" >
                            <option value="Hourly">{Hourly}</option>
                            <option value="Fix Price">{FixPrice} </option>
                        </Input>
                    </FormGroup>
            }
        </Fragment>
    );
};
export default MainType;
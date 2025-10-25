import React, { Fragment } from 'react';
import { Col, FormGroup, Label } from 'reactstrap';

const MainTitle = (props) => {
    const { ProjectTitle = '', register = '', errors = '', ClientName = '' } = props;
    return (
        <Fragment>
            {
                ProjectTitle ?
                    <Col>
                        <FormGroup className="mb-3">
                            <Label>{ProjectTitle}</Label>
                            <input className="form-control" type="text" name="title" placeholder="Project name *" {...register('title',{ required: true })} />
                            <span style={{ color: 'red' }}>{errors.title && 'Title is required'} </span>
                        </FormGroup>
                    </Col>
                    :
                    <Col>
                        <FormGroup>
                            <Label>{ClientName}</Label>
                            <input className="form-control" type="text" name="client_name" placeholder="Name client or company name" {...register('client_name',{ required: true })} />
                            <span style={{ color: 'red' }}>{errors.client_name && 'client_name is required'} </span>
                        </FormGroup>
                    </Col>
            }

        </Fragment>
    );
};
export default MainTitle;
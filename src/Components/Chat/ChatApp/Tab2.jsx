import React, { Fragment } from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import { P } from '../../../AbstractElements';
import { Active, ChataApp_p1, ChataApp_p2 } from '../../../Constant';

const Tab2 = () => {
    return (
        <Fragment>
            <div className="people-list"><div className="search">
                <Form className="theme-form"><FormGroup className='form-group'><Input className="form-control" type="text" placeholder="Write Status..." /><i className="fa fa-pencil"></i></FormGroup></Form></div>
            </div>
            <div className="status">
                <P attrPara={{ className: 'font-primary f-w-600' }}>{Active}</P> <hr /><P>{ChataApp_p1}&nbsp;
                    <i className="icofont icofont-emo-heart-eyes font-danger f-20 ms-1"></i>
                    <i className="icofont icofont-emo-heart-eyes font-danger f-20 m-l-5"></i> </P> <hr />
                <P attrPara={{ className: 'mb-0' }}>{ChataApp_p2}&nbsp;<i className="icofont icofont-emo-rolling-eyes font-info f-20"></i></P>
            </div>
        </Fragment>
    );
};
export default Tab2;
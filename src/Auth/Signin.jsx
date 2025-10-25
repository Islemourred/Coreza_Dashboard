import React, { Fragment, useState } from 'react';
import { Col, Container, Row, TabContent, TabPane } from 'reactstrap';
import NavAuth from '../Auth/Nav';
import { Link } from 'react-router-dom';
import LoginTab from '../Auth/Tabs/LoginTab';
import {  Image } from '../AbstractElements';
import imgg from '../assets/images/logo/logo2.png';

const LoginSample = () => {
    const [selected, setSelected] = useState('simpleLogin');

    const callbackNav = ((select) => {
        setSelected(select);
    });

    return (
        <Fragment>
            <Container fluid={true} className="p-0">
                <Row className='mx-0'>
                    <Col xs="12" className='px-0'>
                        <div className="login-card auth-login">
                            <div>
                                <Link className="logo" to={`${process.env.PUBLIC_URL}/dashboard/default`}>
                                    <Image attrImage={{ src: `${imgg}`, alt: '' }} />
                                </Link>
                            </div>
                            <div className="login-main1 login-tab1 login-main">
                                <NavAuth callbackNav={callbackNav} selected={selected} />
                                <TabContent activeTab={selected} className="content-login">
                                    <TabPane className="fade show" tabId={selected === 'simpleLogin' ? 'simpleLogin' : 'jwt'}>
                                        <LoginTab selected={selected} />
                                    </TabPane>
                                </TabContent >
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default LoginSample;
import {  useState } from 'react';
import { Col, Container, Row, TabContent, TabPane } from 'reactstrap';
import NavAuth from '../../../Auth/Nav';
import AuthTab from '../../../Auth/Tabs/AuthTab';
import { Image } from '../../../AbstractElements';
import { Link } from 'react-router-dom';
import LoginTab from '../../../Auth/Tabs/LoginTab';
 import imgg from '../../../assets/images/login/login_bg.jpg';
import { dynamicImage } from '../../../Services';

const LoginSample = () => {
    const [selected, setSelected] = useState('jwt');

    const callbackNav = ((select) => {
        setSelected(select);
    });

    return (
            <Container fluid={true} className="p-0">
                <Row className='mx-0'>
                    <Col xs="12" className='px-0'>
                        <div className="login-card auth-login" style={{
                            backgroundImage: `url(${imgg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'
                        }}>
                            <div>
                                <Link className="logo" to={`${process.env.PUBLIC_URL}/dashboard/default`}>
                                    <Image attrImage={{ className: 'img-fluid', src: dynamicImage('logo/logo2.png'), alt: '' }} />
                                </Link>
                            </div>
                            <div className="login-main1 login-tab1 login-main">
                                <NavAuth callbackNav={callbackNav} selected={selected} />
                                <TabContent activeTab={selected} className="content-login">
                                    <TabPane className="fade show" tabId={'jwt'}>
                                        <LoginTab selected={selected} />
                                    </TabPane>
                                    <TabPane className="fade show" tabId="auth0">
                                        <AuthTab />
                                    </TabPane>
                                </TabContent >
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
    );
};

export default LoginSample;
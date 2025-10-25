import { Link } from 'react-router-dom';
import { Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { Btn, H4, H6, P, Image } from '../../../AbstractElements';
import imgg from '../../../assets/images/login/login_bg.jpg';
import { CreateYourPassword, Done, EnterOTP, EnterYourMobileNumber, HavePassword, Href, NewPassword, OtpMsg, RememberPassword, Resend, ResetYourPassword, RetypePassword, Send, SignIn } from '../../../Constant';
import { dynamicImage } from '../../../Services';
const ForgetPwd = () => {
    return (
            <section>
                <Container className='p-0' fluid={true}>
                    <Row className="m-0">
                        <Col className="p-0">
                            <div className="login-card" style={{ backgroundImage: `url(${imgg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', display: 'block' }}>
                                <div>
                                    <Link className="logo" to={`${process.env.PUBLIC_URL}/dashboard/default`}>
                                        <Image attrImage={{ className: 'img-fluid', src: dynamicImage('logo/logo2.png'), alt: '' }} />
                                    </Link>
                                </div>
                                <div className="login-main">
                                    <Form className="theme-form login-form">
                                    <H4 attrH4={{ className: 'mb-3' }}>{ResetYourPassword}</H4>
                                        <FormGroup>
                                            <Label>{EnterYourMobileNumber}</Label>
                                            <Row className='gy-2'>
                                                <Col xl="4" sm="3">
                                                    <Input  type="text" defaultValue="+ 91" />
                                                </Col>
                                                <Col xl="8" sm="9">
                                                    <Input  type="tel" defaultValue="000-000-0000" />
                                                </Col>
                                            </Row>
                                        </FormGroup>
                                        <FormGroup className='text-end'>
                                            <Btn attrBtn={{ color: 'primary', type: 'submit' }} >{Send}</Btn>
                                        </FormGroup>
                                        <FormGroup>
                                            <span className="reset-password-link">{OtpMsg}
                                                <a className="btn-link text-danger ms-1" href={Href}>{Resend}</a>
                                            </span>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label>{EnterOTP}</Label>
                                            <Row>
                                                <Col>
                                                    <Input className="text-center opt-text" type="text" defaultValue="00" maxLength="2" />
                                                </Col>
                                                <Col>
                                                    <Input className="text-center opt-text" type="text" defaultValue="00" maxLength="2" />
                                                </Col>
                                                <Col>
                                                    <Input className="text-center opt-text" type="text" defaultValue="00" maxLength="2" />
                                                </Col>
                                            </Row>
                                        </FormGroup>
                                        <H6>{CreateYourPassword}</H6>
                                        <FormGroup className='position-relative pass-hide'>
                                            <Label>{NewPassword}</Label>
                                            <Input type="password" name="login[password]" required="" placeholder="*********" />
                                            <div className="show-hide">
                                                <span className="show"></span>
                                            </div>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label>{RetypePassword}</Label>
                                            <Input type="password" name="login[password]" required="" placeholder="*********" />
                                        </FormGroup>
                                        <FormGroup>
                                            <div className="checkbox">
                                                <Input id="checkbox1" type="checkbox" />
                                                <Label className="text-muted" for="checkbox1">
                                                    {RememberPassword}</Label>
                                            </div>
                                        </FormGroup>
                                        <FormGroup>
                                            <Btn attrBtn={{ color: 'primary', className: 'w-100', type: 'submit' }} >{Done}</Btn>
                                        </FormGroup>
                                        <P attrPara={{ className: 'text-center mt-4 mb-0' }}>{HavePassword}
                                            <Link className='ms-2' to={`${process.env.PUBLIC_URL}/login`}>
                                                {SignIn}
                                            </Link>
                                        </P>
                                    </Form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
    );
};
export default ForgetPwd;
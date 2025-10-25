import { Link } from 'react-router-dom';
import { Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { Btn, H4, P, Image } from '../../../AbstractElements';
import imgg from '../../../assets/images/login/login_bg.jpg';
import { CreateAccount, Done, NewPassword, RetypePassword, RememberPassword } from '../../../Constant';
import { dynamicImage } from '../../../Services';

const CreatePwd = () => {
    return (
            <section>
                <Container fluid={true} className="p-0">
                    <Row className="m-0">
                        <Col xl="12 p-0">
                            <div className="login-card" style={{ backgroundImage: `url(${imgg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div>
                                    <Link className="logo" to={`${process.env.PUBLIC_URL}/dashboard/default`}>
                                        <Image attrImage={{ className: 'img-fluid', src: dynamicImage('logo/logo2.png'), alt: '' }} />
                                    </Link>
                                </div>
                                <div className='login-main'>
                                    <Form className="theme-form login-form">
                                        <H4 attrH4={{ className: 'mb-3' }}>Reset Your Password</H4>
                                        <FormGroup className='position-realative form-group pass-hide'>
                                            <Label>{NewPassword}</Label>
                                            <Input  type="password" name="login[password]" required="" placeholder="*********" />
                                            <div className="show-hide">
                                                <span className="show"></span>
                                            </div>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label>{RetypePassword}</Label>
                                            <Input  type="password" name="login[password]" required="" placeholder="*********" />
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
                                        <P attrPara={{ className: 'text-center mt-4 mb-0' }}>Don't have account?
                                            <Link className="ps-2" to={`${process.env.PUBLIC_URL}/authentication/register-simpleimg`}>
                                                {CreateAccount}
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

export default CreatePwd;
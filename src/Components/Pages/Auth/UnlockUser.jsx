import { Link } from 'react-router-dom';
import { Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { Btn, H4, P, Image } from '../../../AbstractElements';
import imgg from '../../../assets/images/login/login_bg.jpg';
import { RememberPassword, SignIn, Unlock } from '../../../Constant';
import { Unlockuser } from '../../../Data/svgIcons';
const UnlockUser = () => {
    return (
            <section>
                <Container fluid={true} className="p-0">
                    <Row className="m-0">
                        <Col className="p-0">
                            <div className="login-card" style={{ backgroundImage: `url(${imgg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', display: 'block' }}>
                                <div>
                                    <Link className="logo" to={`${process.env.PUBLIC_URL}/dashboard/default`}>
                                        <Image attrImage={{ className: 'img-fluid', src: `${require('../../../assets/images/logo/logo2.png')}`, alt: '' }} />
                                    </Link>
                                </div>
                                <div className="login-main">
                                    <Form className="theme-form login-form">
                                        <H4>{Unlock}</H4>
                                        <Unlockuser />
                                        <FormGroup className='form-group position-relative'>
                                            <Label className="col-form-label">Enter your Password</Label>
                                            <Input className="form-control" type="password" name="login[password]" required="" placeholder="*********" />
                                            <div className="show-hide">
                                                <span className="show"> </span>
                                            </div>
                                        </FormGroup>
                                        <FormGroup>
                                            <div className="checkbox p-0">
                                                <Input id="checkbox1" type="checkbox" />
                                                <Label className="text-muted" for="checkbox1">
                                                    {RememberPassword}</Label>
                                            </div>
                                        </FormGroup>
                                        <FormGroup>
                                            <Btn attrBtn={{ color: 'primary', type: 'submit', className: 'w-100' }} >{Unlock}  </Btn>
                                        </FormGroup>
                                        <P attrPara={{ className: 'text-center mt-4 mb-0' }}>Already have an account?
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

export default UnlockUser;
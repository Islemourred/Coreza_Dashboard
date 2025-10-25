import { Col, Container, Row } from 'reactstrap';
import RegisterFrom from './RegisterFrom';
import imgg from '../../../assets/images/login/login_bg.jpg';
import { Image } from '../../../AbstractElements';
import { Link } from 'react-router-dom';
import {dynamicImage} from "../../../Services/index"
const RegisterSimple = () => {
    return (
            <section>
                <Container fluid={true} className="p-0">
                    <Row className="m-0">
                        <Col xs='12' className="p-0">
                            <div className="login-card img-fluid bg-img-cover" style={{
                                backgroundImage: `url(${imgg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', display: 'block'
                            }}>
                                <div>
                                    <Link className="logo" to={`${process.env.PUBLIC_URL}/dashboard/default`}>
                                        <Image attrImage={{ className: 'img-fluid', src: dynamicImage('logo/logo2.png'), alt: '' }} />
                                    </Link>
                                </div>
                                <RegisterFrom />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
    );
};

export default RegisterSimple;
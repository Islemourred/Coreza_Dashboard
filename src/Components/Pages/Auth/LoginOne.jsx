import { Col, Container, Row } from 'reactstrap';
import LoginForm from './LoginForm';
import imgg from '../../../assets/images/login/2.jpg';
import { Image } from '../../../AbstractElements';
import { Link } from 'react-router-dom';
import {dynamicImage} from "../../../Services/index"
const LoginOne = () => {
    return (
            <Container fluid={true}>
                <Row>
                    <Col xl="7" style={{ backgroundImage: `url(${imgg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', display: 'block' }} >
                    </Col>
                    <Col xl="5 p-0">
                        <div className="login-card">
                            <div>
                                <Link className="logo" to={`${process.env.PUBLIC_URL}/dashboard/default`}>
                                    <Image attrImage={{ className: 'img-fluid', src: dynamicImage('logo/logo2.png'), alt: '' }} />
                                </Link>
                            </div>
                            <LoginForm />
                        </div>
                    </Col>
                </Row>
            </Container>
    );
};

export default LoginOne;
import { Col, Container, Row } from 'reactstrap';
import LoginForm from './LoginForm';
import imgg from '../../../assets/images/login/login_bg.jpg';

const LoginSweetalert = () => {
    return (
            <section>
                <Container className="p-0" fluid={true}>
                    <Row className="mx-0">
                        <Col className="px-0" xl="12" style={{ backgroundImage: `url(${imgg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', display: 'block' }}>
                            <div className="login-card">
                                <LoginForm />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
    );
};

export default LoginSweetalert;
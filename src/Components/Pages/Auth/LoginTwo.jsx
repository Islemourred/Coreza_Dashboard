import { Col, Container, Row } from 'reactstrap';
import LoginForm from './LoginForm';
import imgg from '../../../assets/images/login/3.jpg';

const LoginTwo = () => {
    return (
            <Container fluid={true}>
                <Row>
                    <Col xl="5" style={{ backgroundImage: `url(${imgg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', display: 'block' }}>
                    </Col>
                    <Col xl="7 p-0" >
                        <div className="login-card">
                            <LoginForm />
                        </div>
                    </Col>
                </Row>
            </Container>
    );
};

export default LoginTwo;
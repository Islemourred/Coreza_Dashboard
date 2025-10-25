import { Col, Container, Row } from 'reactstrap';
import LoginForm from './LoginForm';
import imgg from '../../../assets/images/login/3.jpg';

const LoginTooltip = () => {
    return (
            <Container fluid={true} className="p-0">
                <Row className="mx-0">
                    <Col className="px-0"  xl="5" style={{ backgroundImage: `url(${imgg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', display: 'block' }}>
                    </Col>
                    <Col xl="7" className="px-0">
                        <div className="login-card">
                            <LoginForm />
                        </div>
                    </Col>
                </Row>
            </Container>
    );
};

export default LoginTooltip;
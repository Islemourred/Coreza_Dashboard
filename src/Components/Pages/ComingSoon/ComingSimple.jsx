import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import { H5, Image } from '../../../AbstractElements';
import { WE_ARE_COMING_SOON } from '../../../Constant';
import { dynamicImage } from '../../../Services';
import CountdownData from './countdownData';

const ComingSimple = () => {
    return (
            <div className="page-wrapper compact-wrapper" id="pageWrapper">
                <Container fluid={true} className="p-0">
                    <div className="comingsoon bg-commingsoon">
                        <div className="comingsoon-inner text-center">
                            <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}>
                                <Image attrImage={{ className: 'img-fluid', src: dynamicImage('logo/logo2.png'), alt: '' }} />
                            </Link>
                            <H5>{WE_ARE_COMING_SOON}</H5>
                            <div className="countdown" id="clockdiv">
                                <CountdownData />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
    );
};

export default ComingSimple;
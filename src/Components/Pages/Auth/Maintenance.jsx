import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import { H2, H4 } from '../../../AbstractElements';
import { BACK_TO_HOME_PAGE, MAINTENANCE } from '../../../Constant';
import { MaintenanceSvg } from '../../../Data/svgIcons';
const Maintenance = () => {
    return (
            <section>
                <div className="page-wrapper">
                    <div className="error-wrapper maintenance-bg">
                        <Container>
                            <MaintenanceSvg />
                            <div className="maintenance-heading">
                                <H2 attrH2={{ className: 'headline' }} >{MAINTENANCE}</H2>
                            </div>
                            <H4 attrH4={{ className: 'sub-content' }} >Our Site is Currently under Maintenance We will be back Shortly
                                <br />Thank You For Patience</H4>
                            <div>
                                <Link to={`${process.env.PUBLIC_URL}/dashboard/default`} className="btn btn-primary text-light">{BACK_TO_HOME_PAGE}
                                </Link>
                            </div>
                        </Container>
                    </div>
                </div>
            </section>
    );
};

export default Maintenance;
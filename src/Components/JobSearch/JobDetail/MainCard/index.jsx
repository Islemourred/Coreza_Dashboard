import { Card, Col, CardBody, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { H6, H4, P, UL, LI, Btn, Image } from '../../../../AbstractElements';
import JobDescription from './JobDescription';
import MainDataCard from './MainCards';
import { Href, SimilarJobs } from '../../../../Constant';
import { dynamicImage } from '../../../../Services';

const MainCard = () => {
  return (
      <Col xl="9" className="box-col-60 xl-60">
        <Card>
          <div className="job-search">
            <CardBody>
              <div className="d-sm-flex d-block align-items-start">
                <Image attrImage={{ className: 'img-40 img-fluid m-r-20', src: dynamicImage('job-search/1.jpg'), alt: '' }} />
                <div className="flex-grow-1">
                  <H6 attrH6={{ className: 'f-w-600' }} >
                    <a href={Href}>Product Designer (UI/UX Designer)</a>
                  </H6>
                  <P>Tivo - United States</P>
                  <UL attrUL={{ className: 'rating simple-list' }} >
                    <LI>
                      <i className="fa fa-star font-warning"></i>
                    </LI>
                    <LI>
                      <i className="fa fa-star font-warning"></i>
                    </LI>
                    <LI>
                      <i className="fa fa-star font-warning"></i>
                    </LI>
                    <LI>
                      <i className="fa fa-star font-warning"></i>
                    </LI>
                    <LI>
                      <i className="fa fa-star font-warning"></i>
                    </LI>
                  </UL>
                  <Link to={`${process.env.PUBLIC_URL}/app/jobSearch/job-apply`}>
                    <Btn attrBtn={{ className: 'btn btn-sm job-apply-btn', color: 'primary' }}>
                      Apply for this job</Btn>
                  </Link>
                </div>
              </div>
              <JobDescription />
            </CardBody>
          </div>
        </Card>
        <div className="header-faq">
          <H4 attrH4={{ className: 'mb-0 f-w-600' }}>{SimilarJobs}</H4>
        </div>
        <Row>
          <MainDataCard />
        </Row>
      </Col >
  );
};

export default MainCard;
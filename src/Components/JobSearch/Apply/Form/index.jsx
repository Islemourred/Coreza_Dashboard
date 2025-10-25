import { UIDesigner, CreativeTelecom, Submit, Cancel } from '../../../../Constant';
import { Btn, H6, P, Image, UL, LI } from '../../../../AbstractElements';
import PersonalDetail from './PersonalDetail';
import EducationClass from './Education';
import ExperienceClass from './Experience';
import UploadFileClass from './UploadFile';
import { Col, Card, CardBody,  CardFooter } from 'reactstrap';
import {dynamicImage} from "../../../../Services/index"
const JobApply = () => {
  return (
      <Col xl="9" className='xl-60 box-col-60'>
        <Card>
          <div className="job-search">
            <CardBody className="pb-0">
              <div className="d-sm-flex d-block align-items-start">
                <Image attrImage={{ className: 'img-40 img-fluid m-r-20', src: dynamicImage("job-search/1.jpg"), alt: '' }} />
                <div className="flex-grow-1">
                  <H6 attrH6={{ className: 'f-w-600' }} >
                    <a href="#javascript">{UIDesigner}</a>
                    <span className="pull-right">
                      <Btn attrBtn={{ color: 'primary' }} >
                        <span>
                          <i className="fa fa-check text-white">
                          </i>
                        </span>{' Save this job'}
                      </Btn>
                    </span>
                  </H6>
                  <P>{CreativeTelecom}</P>
                  <UL attrUL={{ className: 'simple-list rating' }}>
                    <LI><i className="fa fa-star font-warning"></i></LI>
                    <LI><i className="fa fa-star font-warning"></i></LI>
                    <LI><i className="fa fa-star font-warning"></i></LI>
                    <LI><i className="fa fa-star font-warning"></i></LI>
                    <LI><i className="fa fa-star-o font-warning"></i></LI>  
                  </UL>
                </div>
              </div>
              <div className="job-description">
                <PersonalDetail />
                <EducationClass />
                <ExperienceClass />
                <UploadFileClass />
              </div>
            </CardBody>
            <CardFooter>
              <Btn attrBtn={{ color: 'primary me-1' }} >{Submit}</Btn>
              <Btn attrBtn={{ color: 'light' }}>{Cancel}</Btn>
            </CardFooter>
          </div>
        </Card>
      </Col>
  );
};

export default JobApply;
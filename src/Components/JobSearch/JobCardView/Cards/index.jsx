import  {  useContext } from 'react';
import { Card, Col, Row, CardBody } from 'reactstrap';
import { H6, Image, LI, P, UL } from '../../../../AbstractElements';
import JobSearchContext from '../../../../Helper/JobSearch';
import CardsPagination from './CardsPagination';
import {dynamicImage} from "../../../../Services/index"
import { Link } from 'react-router-dom';
const CardsClass = () => {
  const { jobData } = useContext(JobSearchContext);
  return (
      <Col xxl="9" xl="8" className="box-col-8">
        <Row>
          {jobData &&
            jobData.map((item, i) => (
              <Col xl="6" className="box-col-6" key={i}>
                <Card
                  className={`${item.ribbion ? 'ribbon-vertical-left-wrapper' : ''
                    }`}
                >
                  {item.ribbion ? (
                    <div className="ribbon ribbon-bookmark ribbon-vertical-left ribbon-secondary">
                      <i className="icofont icofont-love"></i>
                    </div>
                  ) : (
                    ''
                  )}
                  <div className="job-search">
                    <CardBody>
                      <div className='d-sm-flex d-block align-items-start'>
                        <Image
                          attrImage={{
                            className: 'img-40 img-fluid m-r-20',
                            src: dynamicImage(item.logo),
                            alt: '',
                          }}
                        />
                        <div className="flex-grow-1">
                          <H6 attrH6={{className: 'f-w-600'}} >
                            <Link to={"/jobSearch/job-detail"}>{item.job_name}</Link>
                              <span className="pull-right">
                                {item.types}
                              </span>
                              <span className="badge badge-primary pull-right">{item.type}</span>
                          </H6>
                          <P>
                            {item.job_area}, {item.job_city}
                          </P>
                          <UL attrUL={{ className: 'rating simple-list ' }}>
                            <LI attrLI={{className:"d-inline-block"}}>
                              <i className="fa fa-star font-warning "></i>
                            </LI>
                            <LI attrLI={{className:"d-inline-block"}}>
                              <i className="fa fa-star font-warning"></i>
                            </LI>
                            <LI attrLI={{className:"d-inline-block"}}>
                              <i className="fa fa-star font-warning"></i>
                            </LI>
                            <LI attrLI={{className:"d-inline-block"}}>
                              <i className="fa fa-star font-warning"></i>
                            </LI>
                            <LI attrLI={{className:"d-inline-block"}}>
                              <i className="fa fa-star font-warning"></i>
                            </LI>
                          </UL>
                        </div>
                      </div>
                      <P attrPara={{className: 'mb-0'}}>{item.Job_description}</P>
                    </CardBody>
                  </div>
                </Card>
              </Col>
            ))}
        </Row>
      <CardsPagination/>
      </Col>

  );
};

export default CardsClass;
import {  useContext } from 'react';
import { Card, Col, CardBody } from 'reactstrap';
import JobSearchContext from '../../../Helper/JobSearch';
import { H6, Image, LI, P, UL } from '../../../AbstractElements';
import JobPagination from './JobPagination';
import { dynamicImage } from '../../../Services';
import { Href } from '../../../Constant';

const ListCard = () => {
  const { jobData } = useContext(JobSearchContext);
  return (
      <Col xl="9" className='xl-60 box-col-60'>
        {jobData &&
          jobData.slice(0, 8).map((data, id) => (
            <Card
            key={id}
            className={`${data.ribbion ? 'ribbon-vertical-left-wrapper' : ''
              }`}
          >
            {data.ribbion ? (
              <div className="ribbon ribbon-bookmark ribbon-vertical-left ribbon-secondary">
<i className="icofont icofont-globe-alt"></i>
              </div>
            ) : (
              ''
            )}
              <div className="job-search">
                <CardBody>
                  <div className="d-sm-flex align-items-start">
                    <Image
                      attrImage={{
                        className: 'img-40 img-fluid m-r-20',
                        src: dynamicImage(data.logo),
                        alt: '',
                      }}
                    />
                    <div className="flex-grow-1">
                      <H6 attrH6={{ className: 'f-w-600' }}>
                        <a href={Href}>{data.job_name}</a>
                        <span className="pull-right">
                          {data.types}
                          </span>
                          <span className="badge badge-primary pull-right">{data.type}</span>
                      </H6>
                      <P>
                        {data.job_area} <span>{data.job_city}</span>
                      </P>
                      <UL attrUL={{ className: 'simple-list rating' }}>
                        <LI><i className="fa fa-star font-warning"></i></LI>
                        <LI><i className="fa fa-star font-warning"></i></LI>
                        <LI><i className="fa fa-star font-warning"></i></LI>
                        <LI><i className="fa fa-star font-warning"></i></LI>
                        <LI><i className="fa fa-star-o font-warning"></i></LI>
                      </UL>
                    </div>
                  </div>
                  <P attrPara={{className: 'mb-0'}}>{data.Job_description}</P>
                </CardBody>
              </div>
            </Card>
          ))}
          <JobPagination />
      </Col>
  );
};

export default ListCard;

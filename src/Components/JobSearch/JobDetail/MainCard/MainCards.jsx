import React, { Fragment, useContext } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import JobSearchContext from '../../../../Helper/JobSearch';
import { H6, Image, P, UL, LI } from '../../../../AbstractElements';
import { Href, SeniorUXDesigner } from '../../../../Constant';
import { dynamicImage } from '../../../../Services';

const MainDataCard = () => {
  const { jobData } = useContext(JobSearchContext);
  return (
    <Fragment>
      {jobData.slice(0, 4).map((data, id) => (
          <Col xl="6" key={id} className='xl-100'>
            <Card>
              <div className="job-search">
                <CardBody>
                  <div className="d-sm-flex d-block align-items-start">
                    <Image attrImage={{
                      className: 'img-40 img-fluid m-r-20',
                      src: dynamicImage(data.logo), alt: ''
                    }} />
                    <div className="flex-grow-1">
                      <H6 attrH6={{ className: 'f-w-600' }}>
                        <a href={Href}>{data.job_name}</a>
                        {data.badgeType === 'primary' ? (
                          <span className="badge badge-primary pull-right">
                            {data.badgeValue}
                          </span>
                        ) : (
                          ''
                        )}
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
          </Col>
        )
      )}
      <Col xl="12">
        <Card>
          <div className="job-search">
            <CardBody>
              <div className="d-sm-flex d-block align-items-start">
                <Image attrImage={{
                  className: 'img-40 img-fluid m-r-20', src: dynamicImage("job-search/6.jpg"),
                  alt: ''
                }} />
                <div className="flex-grow-1">
                  <H6 attrH6={{ className: 'f-w-600' }}>
                    <a href="#javascript">{SeniorUXDesigner}</a>
                    <span className="pull-right">{'5 days ago'}</span>
                  </H6>
                  <P>{'Sutherland'}{' '}
                    <span>{'Lelystad, Netherlands'} </span>
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
              <P attrPara={{className: 'mb-0'}}> {'Woody equal ask saw sir weeks aware decay. Entrance prospect removing we packages strictly is no smallest he. For hopes may chief get hours day rooms. Oh no turned behind polite piqued enough at. Forbade few through inquiry blushes you. Cousin no itself eldest it in dinner latter missed no.'} </P>
            </CardBody>
          </div>
        </Card>
      </Col>
    </Fragment>
  );
};
export default MainDataCard;
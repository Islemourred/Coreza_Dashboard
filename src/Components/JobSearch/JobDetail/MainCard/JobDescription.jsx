import React, { Fragment } from 'react';
import { H6, P, UL, LI, Btn } from '../../../../AbstractElements';
import { AgencyExperience, Perks, Share } from '../../../../Constant';
import { onlyDescription, QualificationsData } from '../../../../Data/Jobsearch';

const JobDescription = () => {
  return (
    <Fragment>
      <div className="job-description">
        <H6>Job Description</H6>
        <P attrPara={{ className: 'text-start' }} >{onlyDescription}</P>
      </div>
      <div className="job-description">
        <H6>Qualifications </H6>
        <UL>
          {QualificationsData.map((item) => (
              <LI key={item.id}>
                <i className="fa fa-circle me-3"></i>
                {item.data}
              </LI>
            )
          )}
        </UL>
      </div>
      <div className="job-description">
        <H6>{AgencyExperience}</H6>
        <UL>
          <LI><i className="fa fa-circle me-3"></i>Experience working with Agile development teams</LI>
          <LI><i className="fa fa-circle me-3"></i>Experience with RITE method usability testing</LI>
          <LI><i className="fa fa-circle me-3"></i>Experience in visual and motion design; ability to translate UX design into high quality visuals</LI>
          <LI><i className="fa fa-circle me-3"></i>Mastery of Sketch & InVision</LI>
          <LI><i className="fa fa-circle me-3"></i>Knowledge of mobile or front-end web programming</LI>
        </UL>
      </div>
      <div className="job-description">
        <H6>{Perks}</H6>
        <UL>
          <LI><i className="fa fa-circle me-3"></i>Competitive pay</LI>
          <LI><i className="fa fa-circle me-3"></i>Competitive medical, dental, and vision insurance plans</LI>
          <LI><i className="fa fa-circle me-3"></i>Company-proviCompanyded 401(k) plan</LI>
          <LI><i className="fa fa-circle me-3"></i>Paid vacation and sick time</LI>
          <LI><i className="fa fa-circle me-3"></i>Free snacks and beverages</LI>
        </UL>
      </div>
      <div className="job-description">
        <Btn attrBtn={{ className: 'btn me-2', color: 'primary', type: 'button' }}>
          <span>
            <i className="fa fa-check" ></i>
          </span> Save this job
        </Btn>
        <Btn attrBtn={{ className: 'btn', color: 'primary', type: 'button' }} >
          <span>
            <i className="fa fa-share-alt"></i>
          </span> {Share}
        </Btn>
      </div>
    </Fragment>
  );
};

export default JobDescription;
import React, { Fragment, useState } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { Database, Grid, } from 'react-feather';
import { H5, H6, LI, P, UL, Image } from '../../AbstractElements';
import folder from '../../assets/images/folder.png';
import { SideButtons } from '../../Data/FileManager/index ';
import {  FREE, PlanSpace, PricingPlan, Selected, Storage, Storageused, TrialVersion } from '../../Constant';

const FileSideBar = () => {
  const [IsOpen, setIsOpen] = useState(false);
    const OnHandelClick = () => {
        setIsOpen(!IsOpen);
      };
  return (
    <Fragment>
      <Col xl="3" className="box-col-25">
        <div className="md-sidebar job-sidebar">
          <a className="btn btn-primary md-sidebar-toggle" href="#javascript" onClick={OnHandelClick}>File Filter</a>
          <div className={`md-sidebar-aside custom-scrollbar ${IsOpen ? 'open' : ''}`}>
            <div className="file-sidebar">
              <Card>
                <CardBody>
                  <UL attrUL={{ className: 'simple-list' }}>
                    {
                      SideButtons.map((item) => {
                        return (
                          <LI key={item.id}>
                            <div className={item.className}>{item.icon}{item.title}</div>
                          </LI>
                        );
                      })
                    }
                  </UL><hr style={{ opacity: 0.25 }} />
                  <UL attrUL={{ className: 'simple-list ' }}>
                    <LI>
                      <div className="btn btn-outline-primary"><Database />{Storage}</div>
                      <div className="m-t-15">
                        <div className="progress sm-progress-bar mb-1">
                          <div className="progress-bar bg-primary" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <H6>{Storageused}</H6>
                      </div>
                    </LI>
                  </UL>
                  <hr style={{ opacity: 0.25 }} />
                  <UL attrUL={{ className: 'simple-list' }}>
                    <LI> <div className="btn btn-outline-primary"><Grid />{PricingPlan}</div> </LI>
                    <LI>
                      <div className="pricing-plan">
                        <H6>{TrialVersion} </H6>
                        <H5>{FREE}</H5>
                        <P>{PlanSpace}</P>
                        <div className="btn btn-outline-primary btn-xs">{Selected}</div>
                        <Image attrImage={{ className: 'bg-img', src: `${folder}`, alt: '' }} />
                      </div>
                    </LI>
                  </UL>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </Col>
    </Fragment>
  );
};
export default FileSideBar;

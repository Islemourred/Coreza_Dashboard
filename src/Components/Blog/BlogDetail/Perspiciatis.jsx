import React, { Fragment } from 'react';
import { Card, Col, Row } from 'reactstrap';
import { H6, Image, LI, P, UL } from '../../../AbstractElements';
import { dynamicImage } from '../../../Services';

const Perspiciatis = () => {
  return (
    <Fragment>
      <Col xl="12" md="6">
        <Card>
          <Row className="blog-box blog-list">
            <Col xl="6 col-12">
              <div className="blog-wrraper">
                <Image attrImage={{ className: 'img-fluid sm-100-w p-0', src: dynamicImage("blog/blog-2.jpg"), alt: '' }} />
              </div>
            </Col>
            <Col xl="6 col-12">
              <div className="blog-details">
                <div className="blog-date">
                  <span>{'02'}</span> {'January 2023'}
                </div>
                <H6>{'Encounter every day.'} </H6>
                <div className="blog-bottom-content">
                  <UL attrUL={{ className: 'simple-list flex-row blog-social' }}>
                    <LI>{'by: Admin'}</LI>
                    <LI>{'0 Hits'}</LI>
                  </UL><hr />
                  <P attrPara={{ className: 'mt-0' }} >
                    {'A huge part of it is the incomparable beauty you can encounter every day.'}
                  </P>
                </div>
              </div>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col xl="12" md="6">
        <Card>
          <Row className="blog-box blog-list">
            <Col xl="6 col-12">
              <div className="blog-wrraper">
                <Image attrImage={{ className: 'img-fluid sm-100-w p-0', src: dynamicImage("blog/blog-3.jpg"), alt: '' }} />
              </div>
            </Col>
            <Col xl="6 col-12">
              <div className="blog-details">
                <div className="blog-date">
                  <span>{'03'}</span> {'January 2023'}
                </div>
                <H6>{'White color is important.'} </H6>
                <div className="blog-bottom-content">
                  <UL attrUL={{ className: 'simple-list flex-row blog-social' }}>
                    <LI>{'by: Admin'}</LI>
                    <LI>{'02 Hits'}</LI>
                  </UL><hr />
                  <P attrPara={{ className: 'mt-0' }} >
                    {'We have to change that. Sometimes the simplest things are the most profound. People just dont do it anymore.'}
                  </P>
                </div>
              </div>
            </Col>
          </Row>
        </Card>
      </Col>
    </Fragment >
  );
};

export default Perspiciatis;
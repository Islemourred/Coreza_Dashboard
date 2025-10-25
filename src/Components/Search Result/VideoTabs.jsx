import React, { Fragment, useEffect, useState } from 'react';
import { Col, Media, Row } from 'reactstrap';
import { H6, LI, P, UL } from '../../AbstractElements';
import PagesSort from './Pages';
import axios from 'axios';

const VideoTabs = () => {
  const [tabsDatas, setTabsDatas] = useState();
  useEffect(() => {
    axios.get(`${process.env.PUBLIC_URL}/api/searchAllTabs.json`).then((resp) => {
      setTabsDatas(resp.data);
    });
  }, []);
  return (
    <Fragment>
      <Row>
        <Col xl="6" className='xl-100 box-col-12' >
          <P attrPara={{ className: 'pb-4' }}>About 6,000 results (0.60 seconds)</P>{
            tabsDatas && tabsDatas.map((item) => {
              return (
                <Media className="info-block d-flex" key={item.id}>
                  <iframe className="me-3 mb-3" title="1" width="200" height="100" src={item.videoLink}></iframe>
                  <Media body className='flex-grow-1'>
                    <H6>{item.title}</H6>
                    <a href="#javascript">{item.url}</a>
                    <P>{item.detail}</P>
                    <div className="star-ratings">
                      <UL attrUL={{ className: 'simple-list search-info d-flex flex-row' }}>
                        <LI>{item.star}</LI>
                        <LI>{item.vote}</LI>
                        <LI>{item.news}</LI>
                      </UL>
                    </div>
                  </Media>
                </Media>
              );
            })
          }
          <PagesSort />
        </Col>
        <Col xl="6" className='xl-100 box-col-12'>
          <Row className="search-vid-block">
            <Col className='xl-50 box-col-6'>
              <div className="embed-responsive embed-responsive-21by9 ratio ratio-21x9">
                <iframe className="w-100" title="1" height="315" src="https://www.youtube.com/embed/wpmHZspl4EM" allowFullScreen=""></iframe>
              </div>
            </Col>
            <Col xl="12" className="xl-50 box-col-6">
              <div className="embed-responsive embed-responsive-21by9 ratio ratio-21x9">
                <iframe className="w-100" title="1" height="315" src="https://www.youtube.com/embed/I0-vBdh4sZ8" allowFullScreen=""></iframe>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
};
export default VideoTabs;
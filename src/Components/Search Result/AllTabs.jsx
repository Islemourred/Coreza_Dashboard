import React, { Fragment, useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';
import BgImage from './BgImage';
import { H6, LI, P, UL } from '../../AbstractElements';
import PagesSort from './Pages';
import axios from 'axios';

const AllTabs = () => {
  const [tabsData, setTabsData] = useState();
  useEffect(() => {
    axios.get(`${process.env.PUBLIC_URL}/api/searchAllTabs.json`).then((resp) => {
      setTabsData(resp.data);
    });
  }, []);
  return (
    <Fragment>
      <div className="search-links tab-pane fade show active" id="all-links" role="tabpanel" aria-labelledby="all-link">
        <Row>
          <Col xl="6 box-col-6 search-banner">
            <P attrPara={{ className: 'pb-4' }}>About 6,000 results (0.60 seconds)</P>
            {tabsData && tabsData.map((item) => {
              return (
                <div className="info-block" key={item.id}>
                  <H6>{item.title}</H6>
                  <a href="#javascript">{item.url}</a>
                  <P>{item.detail}</P>
                  <div className="star-ratings">
                    <UL attrUL={{ className: 'simple-list search-info d-flex flex-row' }}>
                      <LI>
                        <UL attrUL={{ className: 'simple-list rating d-flex flex-row' }}>
                          <LI>
                            <i className="icofont icofont-ui-rating"></i>
                          </LI>
                          <LI>
                            <i className="icofont icofont-ui-rating"></i>
                          </LI>
                          <LI>
                            <i className="icofont icofont-ui-rating"></i>
                          </LI>
                          <LI>
                            <i className="icofont icofont-ui-rate-blank"></i>
                          </LI>
                          <LI>
                            <i className="icofont icofont-ui-rate-blank"></i>
                          </LI>
                        </UL>
                      </LI>
                      <LI>{item.star}</LI>
                      <LI>{item.vote}</LI>
                      <LI>{item.news}</LI>
                    </UL>
                  </div>
                </div>
              );
            })
            }
            <PagesSort />
          </Col>
          <BgImage />
        </Row>
      </div>
    </Fragment>
  );
};
export default AllTabs;
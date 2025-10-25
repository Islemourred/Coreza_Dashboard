import React, { Fragment, useContext } from 'react';
import { Col, Card } from 'reactstrap';
import { useNavigate, Link } from 'react-router-dom';
import { Image, H6, LI, UL, P } from '../../../AbstractElements';
import LearningContext from '../../../Helper/Leatning';

const BoxList = () => {
  const { learningData } = useContext(LearningContext);
  const history = useNavigate();
  const clickApply = () => {
    history(`${process.env.PUBLIC_URL}/learning/learning-detail`);
  };
  return (
    <Fragment>
      {learningData && learningData.slice(0, 6).map((data, i) =>  (
          <Col xl="4" className='xl-50 box-col-6' sm="6" key={i}>
            <Card>
              <div className="learning-box product-box">
                <div className="product-img">
                  <Image attrImage={{ className: 'img-fluid top-radius-blog', src: `${require('../../../assets/images/' + data.img)}`, alt: '' }} />
                  <div className="product-hover">
                    <UL attrUL={{ className: 'simple-list d-flex flex-row' }}>
                      <LI>
                        <Link to={"/learning/learning-detail"}>
                          <i className="icon-link" onClick={() => clickApply()}></i>
                        </Link>
                      </LI>
                      <LI>
                        <Link to={"/learning/learning-detail"}>
                          <i className="icon-import"></i>
                        </Link>
                      </LI>
                    </UL>
                  </div>
                </div>
                <div className="details-main">
                  <a href="#javascript">
                    <div className='bottom-details'>
                      <H6>{data.title}</H6>
                    </div>
                  </a>
                  <P>{data.short_description}</P>
                </div>
              </div>
            </Card>
          </Col>
        )
      )}
    </Fragment>
  );
};
export default BoxList;
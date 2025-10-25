import React, { Fragment } from 'react';
import { Card, Col } from 'reactstrap';
import { H6, Image, LI, P, UL } from '../../../AbstractElements';
import { Admin } from '../../../Constant';
import { BlogData } from '../../../Data/Blog/index';
import { dynamicImage } from '../../../Services';

const Gallery = () => {
  return (
    <Fragment>
      {BlogData.map((item) => (
        <Col sm="6" xl="3" className='box-col-6 des-xl-50' key={item.id}>
          <Card>
            <div className="blog-box blog-grid">
              <div className="blog-wrraper">
                <Image
                  attrImage={{
                    className: 'img-fluid top-radius-blog',
                    src: dynamicImage(`${item.img}`),
                    alt: '',
                  }}
                />
              </div>
              <div className="blog-details-second">
                <div className="blog-post-date">
                  <span className="blg-month">{item.month}</span>
                  <span className="blg-date">{item.date}</span>
                </div>
                <H6 attrH6={{ className: 'blog-bottom-details' }}>
                  {item.details}
                </H6>
                <P>{item.details1}</P>
                <div className="detail-footer">
                  <UL
                    attrUL={{ className: 'social-list simple-list flex-row' }}
                  >
                    <LI>
                      <i className="fa fa-user-o"></i>{Admin}
                    </LI>
                    <LI>
                      <i className="fa fa-comments-o"></i>5
                    </LI>
                    <LI>
                      <i className="fa fa-thumbs-o-up"></i>2 like
                    </LI>
                  </UL>
                </div>
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </Fragment>
  );
};
export default Gallery;

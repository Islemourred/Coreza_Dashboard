import React, { Fragment } from 'react';
import { Card, Col, Row } from 'reactstrap';
import { Href, JavaLanguage, WebDevelopment } from '../../../Constant';
import { H6, Image, LI, P, UL } from '../../../AbstractElements';
import { dynamicImage } from '../../../Services';

const BlogBox = () => {
  return (
    <Fragment>
      <Col xl="12" sm="6">
        <Card>
          <Row className="blog-box blog-list">
            <Col xl="5" xs="12">
              <Image attrImage={{ className: 'img-fluid sm-100-w', src: dynamicImage('faq/1.jpg'), alt: '' }} />
            </Col>
            <Col xl="7" xs="12">
              <div className="blog-details">
                <div className="blog-date">
                  <span>{'05'}</span> {'January 2023'}
                </div>
                <H6>{JavaLanguage} </H6>
                <div className="blog-bottom-content">
                  <UL attrUL={{ className: 'simple-list blog-social flex-row' }} >
                    <LI>{'by: Paige Turner'}</LI>
                    <LI>{'15 Hits'}</LI>
                  </UL>
                  <hr />
                  <P attrPara={{ className: 'mt-0' }}>{'Java is an object-oriented programming language. Sun Microsystems first released Java in the year 1995. It is popularly used for developing Java applications in data centers, laptops, cell phones, game consoles, and scientific supercomputers. There are multiple websites and applications which will not work if Java is not installed.'}</P>
                </div>
              </div>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col xl="12" sm="6">
        <Card>
          <Row className="blog-box blog-list">
            <Col xl="5" xs="12">
              <Image attrImage={{ className: 'img-fluid sm-100-w', src: dynamicImage('faq/2.jpg'), alt: '' }} />
            </Col>
            <Col xl="7" xs="12">
              <div className="blog-details">
                <div className="blog-date">
                  <span>{'10'}</span> {'March 2023'}
                </div>
                <a href={Href}><H6>{WebDevelopment} </H6></a>
                <div className="blog-bottom-content">
                  <UL attrUL={{ className: 'simple-list blog-social flex-row' }} >
                    <LI>{'by: Petey Cruiser'}</LI>
                    <LI>{'34 Hits'}</LI>
                  </UL>
                  <hr />
                  <P attrPara={{ className: 'mt-0' }} >{'Web development is the work involved in developing a website for the Internet or an intranet (a private network).Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services, and many more such applications and websites are being created every day.'}</P>
                </div>
              </div>
            </Col>
          </Row>
        </Card>
      </Col>
    </Fragment>
  );
};
export default BlogBox;
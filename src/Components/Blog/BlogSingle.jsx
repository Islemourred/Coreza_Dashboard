import React, { Fragment } from 'react';
import blogSingle from '../../assets/images/blog/blog-single.jpg';
import { Breadcrumbs, H4, LI, P, UL } from '../../AbstractElements';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import BlogComments from './BlogComments';

const BlogSingleContain = () => {
  const styless = {
    backgroundImage: `url(${blogSingle})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'block',
  };
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Blog Single" parent="Blog" title="Blog Single" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <div className="blog-single">
              <div className="blog-box blog-details">
                <div
                  className="banner-wrraper img-fluid w-100 bg-img-cover"
                  style={styless}
                ></div>
                <Card>
                  <CardBody>
                    <div className="blog-details">
                      <UL
                        attrUL={{
                          className: 'blog-social flex-row simple-list',
                        }}
                      >
                        <LI>{'25 July 2023'}</LI>
                        <LI>
                          <i className="icofont icofont-user"></i>
                          {'Mark'} <span>{'Jecno'} </span>
                        </LI>
                        <LI>
                          <i className="icofont icofont-thumbs-up"></i>
                          {'02'}
                          <span>{'Hits'}</span>
                        </LI>
                        <LI>
                          <i className="icofont icofont-ui-chat"></i>
                          {'598 Comments'}
                        </LI>
                      </UL>
                      <H4>
                        {
                          'The Harpeth rises in the westernmost part of Rutherford County, just to the east of the community of College Grove in eastern Williamson County.'
                        }
                      </H4>
                      <div className="single-blog-content-top">
                        <P>
                          {
                            'From the east coast to the west, each river has its own beauty and character. Each river has its own story. Take a look at some America’s best rivers and some of the rivers we’re working to protect. And learn some facts about your favorite rivers. The Harpeth River and its tributaries are home to rich freshwater biodiversity, including more than 50 species of fish and 30 species of mussels'
                          }
                        </P>
                        <P>
                          {
                            'The Harpeth River flows through the heart of downtown Franklin, the 14th fastest growing city in the United States, and traverses Williamson County, one of the fastest growing counties in Tennessee. This rapid development has already caused harm to the river from adding treated sewage, increasing stormwater runoff, and withdrawing water.The river’s impairment is caused by dangerously low levels of dissolved oxygen driven by high concentrations of nutrients – particularly phosphorus – that fuel oxygen-hungry algal blooms that can lead to toxic conditions.'
                          }
                        </P>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
              <BlogComments />
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default BlogSingleContain;

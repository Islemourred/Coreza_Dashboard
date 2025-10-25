import React, { Fragment } from 'react';
import { Row, Col,  Card, CardBody } from 'reactstrap';
import { Comment } from '../../Constant';
import { H4, H6, Image, LI, P, UL } from '../../AbstractElements';
import { BlogSingleData } from '../../Data/Blog/index';
import { dynamicImage } from '../../Services';

const BlogComments = () => {
  return (
      <Card className="comment-box">
        <CardBody>
          <H4>{Comment}</H4>
          <UL attrUL={{ className: 'simple-list' }}>
            {BlogSingleData.map((item) =>  (
                <Fragment key={item.id}>
                  {!item.class ? (
                    <LI>
                      <div className="align-self-center d-md-flex">
                        <Image
                          attrImage={{
                            className: 'align-self-center',
                            src: dynamicImage(item.img),
                            alt: '',
                          }}
                        />
                        <div className="flex-grow-1">
                          <Row>
                            <Col md="4">
                              <H6 attrH6={{ className: 'mt-0' }}>
                                {item.name}
                                <span> {`( ${item.post} ) `}</span>
                              </H6>
                            </Col>
                            <Col md="8">
                              <UL
                                attrUL={{
                                  className: 'comment-social simple-list',
                                }}
                              >
                                <LI>
                                  <i className="icofont icofont-thumbs-up"></i>
                                  {item.hits}
                                </LI>
                                <LI>
                                  <i className="icofont icofont-ui-chat"></i>
                                  {item.comments}
                                </LI>
                              </UL>
                            </Col>
                          </Row>
                          <P>{item.para}</P>
                        </div>
                      </div>
                    </LI>
                  ) : (
                    <LI>
                      <UL>
                        <LI>
                          <div className="d-md-flex">
                            <Image
                              attrImage={{
                                className: 'align-self-center',
                                src: dynamicImage("blog/9.jpg"),
                                alt: 'Generic placeholder image',
                              }}
                            />
                            <div className="flex-grow-1">
                              <Row>
                                <Col xl="12">
                                  <H6 attrH6={{ className: 'mt-0' }}>
                                    {item.name}
                                    <span> {`( ${item.post} ) `}</span>
                                  </H6>
                                </Col>
                              </Row>
                              <P>{item.para}</P>
                            </div>
                          </div>
                        </LI>
                      </UL>
                    </LI>
                  )}
                </Fragment>
              )
            )}
          </UL>
        </CardBody>
      </Card>
  );
};
export default BlogComments;

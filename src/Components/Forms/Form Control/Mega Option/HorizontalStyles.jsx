import { Btn, H4, H6, P } from '../../../../AbstractElements';
import { COD, Fast, Submit, Cancel, HorizontalStyle, XYZSeller, ABCSeller, DeliveryOption, BuyingOption } from '../../../../Constant';
import React, { Fragment } from 'react';
import { Row, Col, Card, CardHeader, CardBody, CardFooter, Media, Form, Label, Input } from 'reactstrap';

const HorizontalStyles = () => {
  return (
    <Fragment>
      <Col sm="12" xl="6">
        <Card className="height-equal">
          <CardHeader className="pb-0">
            <H4>{HorizontalStyle}</H4>
            <span>{'For Create inline megaoption add'} 
              <code>{'.mega-horizontal'}</code> {'class in form tag'}
            </span>
          </CardHeader>
          <CardBody>
            <Form className="mega-horizontal">
              <Row>
                <Col sm="3">
                  <P attrPara={{ className: 'mega-title' }}>{DeliveryOption}</P>
                </Col>
                <Col sm="9">
                  <Card>
                    <Media className="p-20 d-flex">
                      <div className="radio radio-primary me-3 ps-1">
                        <Input id="radio30" type="radio" name="radio1" value="option1" />
                        <Label for="radio30"></Label>
                      </div>
                      <Media body className='flex-grow-1'>
                        <H6 attrH6={{ className: 'mt-0 mega-title-badge' }}>{COD}
                          <span className="badge badge-primary pull-right">{'50 INR'}</span>
                        </H6>
                        <P>{'Estimated 1 Day Shipping ( Duties end tax may be due delivery )'}</P>
                      </Media>
                    </Media>
                  </Card>
                </Col>
                <Col sm="9 offset-sm-3">
                  <Card>
                    <Media className="p-20 d-flex">
                      <div className="radio radio-secondary me-3 ps-1">
                        <Input id="radio31" type="radio" name="radio1" value="option1" />
                        <Label for="radio31"></Label></div>
                      <Media body className='flex-grow-1'>
                        <H6 attrH6={{ className: 'mt-0 mega-title-badge' }}>{Fast}
                          <span className="badge badge-secondary pull-right">{'100 INR'}</span></H6>
                        <P>{'Estimated 1 Day Shipping ( Duties end tax may be due delivery )'}</P>
                      </Media>
                    </Media>
                  </Card>
                </Col>
                <Col sm="3">
                  <P attrPara={{ className: 'mega-title' }}>{BuyingOption}</P></Col>
                <Col sm="9">
                  <Card>
                    <Media className="p-20 d-flex">
                      <div className="radio radio-success me-3 ps-1">
                        <Input id="radio32" type="radio" name="radio1" value="option1" />
                        <Label for="radio32"></Label>
                      </div>
                      <Media body className='flex-grow-1'>
                        <H6 attrH6={{ className: 'mt-0 mega-title-badge' }}>{XYZSeller}
                          <span className="badge badge-success pull-right">{'250 INR'}</span></H6>
                        <P attrPara={{ className: 'rating-star-wrapper' }}>
                          <i className="icofont icofont-star txt-warning"></i>
                          <i className="icofont icofont-star txt-warning"></i>
                          <i className="icofont icofont-star txt-warning"></i>
                          <i className="icofont icofont-star txt-warning"></i>
                          <i className="icofont icofont-star txt-warning m-r-5"></i>{'5 star rating'}</P>
                      </Media>
                    </Media>
                  </Card>
                </Col>
                <Col sm="9 offset-sm-3">
                  <Card className="mb-0">
                    <Media className="p-20 d-flex">
                      <div className="radio radio-info me-3 ps-1">
                        <Input id="radio33" type="radio" name="radio1" value="option1" />
                        <Label for="radio33"></Label>
                      </div>
                      <Media body className='flex-grow-1'>
                        <H6 attrH6={{ className: 'mt-0 mega-title-badge' }}>{ABCSeller}<span className="badge badge-info pull-right">{'150 INR'}</span></H6>
                        <P attrPara={{ className: 'rating-star-wrapper' }}><i className="icofont icofont-star txt-warning"></i><i className="icofont icofont-star"></i><i className="icofont icofont-star"></i><i className="icofont icofont-star"></i><i className="icofont icofont-star m-r-5"></i>{'1 star rating'}</P>
                      </Media>
                    </Media>
                  </Card>
                </Col>
              </Row>
            </Form>
          </CardBody>
          <CardFooter className="text-end">
            <Btn attrBtn={{ color: 'primary', className: 'm-r-15', type: 'submit' }}>{Submit}</Btn>
            <Btn attrBtn={{ color: 'light', type: 'submit' }}>{Cancel}</Btn>
          </CardFooter>
        </Card>
      </Col>
    </Fragment>
  );
};
export default HorizontalStyles;
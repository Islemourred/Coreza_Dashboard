import { Btn, H4, H6, P } from '../../../../AbstractElements';
import { COD, Fast, Free, Submit, Cancel, VerticalStyle, Local, Standard, DeliveryOption } from '../../../../Constant';
import VerticalStyles2 from './VerticalStyles2';
import { Row, Col, Card, CardHeader, CardBody, CardFooter, Media, Form, Label, Input } from 'reactstrap';
import React, { Fragment } from 'react';

const VerticalStyles = () => {
  return (
    <Fragment>
      <Col sm="12" xl="6">
        <Card className="height-equal">
          <CardHeader className="pb-0">
            <H4>{VerticalStyle}</H4>
            <span>{'For Create inline megaoption add'} 
              <code>{'.mega-vertical'}</code> {'class in form tag'}
            </span>
          </CardHeader>
          <CardBody>
            <Form className="mega-vertical">
              <Row>
                <Col sm="12">
                  <P attrPara={{ className: 'mega-title m-b-5' }}>{DeliveryOption}</P>
                </Col>
                <Col sm="6">
                  <Card>
                    <Media className="p-20 d-flex">
                      <div className="radio radio-primary me-3 ps-1">
                        <Input id="radio23" type="radio" name="radio1" value="option1" />
                        <Label for="radio23"></Label>
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
                <Col sm="6">
                  <Card>
                    <Media className="p-20 d-flex">
                      <div className="radio radio-secondary me-3 ps-1">
                        <Input id="radio24" type="radio" name="radio1" value="option1" />
                        <Label for="radio24"></Label>
                      </div>
                      <Media body className='flex-grow-1'>
                        <H6 attrH6={{ className: 'mt-0 mega-title-badge' }}>{Fast}
                          <span className="badge badge-primary pull-right">{'50 INR'}</span></H6>
                        <P>{'Estimated 1 Day Shipping ( Duties end tax may be due delivery )'}</P>
                      </Media>
                    </Media>
                  </Card>
                </Col>
                <Col sm="6">
                  <Card>
                    <Media className="p-20 d-flex">
                      <div className="radio radio-success me-3 ps-1">
                        <Input id="radio25" type="radio" name="radio1" value="option1" />
                        <Label for="radio25"></Label>
                      </div>
                      <Media body className='flex-grow-1'>
                        <H6 attrH6={{ className: 'mt-0 mega-title-badge' }}>{Standard}
                          <span className="badge badge-secondary pull-right">{'80 INR'}</span>
                        </H6>
                        <P>{'Estimated 3 Day Shipping ( Duties end taxes may be due upon delivery )'}</P>
                      </Media>
                    </Media>
                  </Card>
                </Col>
                <Col sm="6">
                  <Card>
                    <Media className="p-20 d-flex">
                      <div className="radio radio-info me-3 ps-1">
                        <Input id="radio5" type="radio" name="radio1" value="option1" />
                        <Label for="radio5"></Label>
                      </div>
                      <Media body className='flex-grow-1'>
                        <H6 attrH6={{ className: 'mt-0 mega-title-badge' }}>{Local} 
                          <span className="badge badge-info pull-right">{Free}</span>
                        </H6>
                        <P>{'Estimated 15 Day Shipping ( Duties end taxes may be due upon delivery )'}</P>
                      </Media>
                    </Media>
                  </Card>
                </Col>
                <VerticalStyles2 />
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
export default VerticalStyles;
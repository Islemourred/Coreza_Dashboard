import { Btn, H4, H6, P } from '../../../../AbstractElements';
import { Cancel, COD, Fast, Free, InlineStyle, Local, Standard, Submit } from '../../../../Constant';
import React, { Fragment } from 'react';
import { Card, CardBody, CardFooter, CardHeader, Col, Form, Input, Label, Media, Row } from 'reactstrap';

const InlineStyles = () => {
  return (
    <Fragment>
      <Col sm="12">
        <Card>
          <CardHeader className="pb-0">
            <H4>{InlineStyle}</H4>
            <span>{'For Create inline megaoption add'} 
              <code>{'.mega-inline'}</code> {'class in form tag'}
            </span>
          </CardHeader>
          <CardBody className="megaoptions-border-space-sm">
            <Form className="mega-inline">
              <Row>
                <Col sm="6">
                  <Card>
                    <Media className="p-20 d-flex">
                      <div className="radio radio-primary me-3 ps-1">
                        <Input id="radio19" type="radio" name="radio1" value="option1" />
                        <Label for="radio19"></Label>
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
                        <Input id="radio20" type="radio" name="radio1" value="option1" />
                        <Label for="radio20"></Label>
                      </div>
                      <Media body className='flex-grow-1'>
                        <H6 attrH6={{ className: 'mt-0 mega-title-badge' }}>{Fast}
                          <span className="badge badge-secondary pull-right">{'50 INR'}</span>
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
                        <Input id="radio21" type="radio" name="radio1" value="option1" />
                        <Label for="radio21"></Label>
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
                      <div className="radio radio-primary me-3 ps-1">
                        <Input id="radio22" type="radio" name="radio1" value="option1" />
                        <Label for="radio22"></Label>
                      </div>
                      <Media body className='flex-grow-1'>
                        <H6 attrH6={{ className: 'mt-0 mega-title-badge' }}>{Local} 
                          <span className="badge badge-primary pull-right">{Free}</span>
                        </H6>
                        <P>{'Estimated 15 Day Shipping ( Duties end taxes may be due upon delivery )'}</P>
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
export default InlineStyles;
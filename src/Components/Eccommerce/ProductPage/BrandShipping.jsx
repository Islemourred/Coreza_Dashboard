import { H4, H5, LI, P, UL } from '../../../AbstractElements';
import React, { Fragment } from 'react';
import { Truck, Clock } from 'react-feather';
import { Card, CardBody, Col, Label, Input, Media, } from 'reactstrap';

const BrandShipping = () => {
  return (
    <Fragment>
      <Col xl="2" md="6" className="box-col-6 proorder-lg-1 dash-xl-50">
        <Card>
          <CardBody>
            <div className="filter-block">
              <H4>{'Brand'}</H4>
              <UL attrUL={{ className: 'simple-list' }}>
                <LI>
                  <div className="form-check">
                    <Input className="form-check-input" id="Raymond" type="checkbox" value="" />
                    <Label className="form-check-label" htmlFor="Raymond">Raymond</Label>
                  </div>
                </LI>
                <LI>
                  <div className="form-check">
                    <Input className="form-check-input" id="Pepe-Jeans" type="checkbox" value="" />
                    <Label className="form-check-label" htmlFor="Pepe-Jeans">Pepe-Jeans</Label>
                  </div>
                </LI>
                <LI>
                  <div className="form-check">
                    <Input className="form-check-input" id="Celio" type="checkbox" value="" />
                    <Label className="form-check-label" htmlFor="Celio">Celio</Label>
                  </div>
                </LI>
                <LI>
                  <div className="form-check">
                    <Input className="form-check-input" id="aime" type="checkbox" value="" />
                    <Label className="form-check-label" htmlFor="aime">aime</Label>
                  </div>
                </LI>
                <LI>
                  <div className="form-check">
                    <Input className="form-check-input" id="aliff" type="checkbox" value="" />
                    <Label className="form-check-label" htmlFor="aliff">aliff</Label>
                  </div>
                </LI>
              </UL>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <div className="collection-filter-block">
              <UL attrUL={{ className: 'simple-list pro-services' }}>
                <LI>
                  <Media className='d-flex'><Truck />
                    <Media body className='flex-grow-1'>
                      <H5>{'Free Shipping'}</H5>
                      <P attrPara={{ className: 'mb-0' }}>{'Free Shipping World Wide'}</P>
                    </Media>
                  </Media>
                </LI>
                <LI>
                  <Media className='d-flex'><Clock />
                    <Media body className='flex-grow-1'>
                      <H5>{'24 X 7 Service'}</H5>
                      <P attrPara={{ className: 'mb-0' }}>{'Online Service For New Customer'}</P>
                    </Media>
                  </Media>
                </LI>
              </UL>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default BrandShipping;
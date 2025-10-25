import React, { Fragment } from 'react';
import { Col,Card, CardBody, Row } from 'reactstrap';
import { Btn, H3, H2,  H6,  LI, UL } from '../../../AbstractElements';
import { Subscribe } from '../../../Constant';
import { StandardData } from '../../../Data/Ecommerce';

const Standards = () => {
  return (
    <Fragment>
      <CardBody className="pricing-content">
        <Row className="pricing-col">
          {StandardData.map((item) => {
            return (
              <Col lg="3" md="6" className="box-col-3" key={item.id}>
                <Card className="pricing-block text-center">
                  <div className="pricing-header">
                    <H2>{item.title}</H2>
                    <div className="price-box">
                      <div>
                        <H3> {item.prize}</H3>
                        <p className='mb-0'>{item.month}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pricing-list ">

                    <UL attrUL={{ className: 'simple-list pricing-inner' }}>
                      <LI>
                        <H6>{item.storage1}
                          <span>{item.props1}</span>
                        </H6>
                      </LI>
                      <LI>
                        <H6>{item.storage2}
                          <span>{item.props2}</span>
                        </H6>
                      </LI>
                      <LI>
                        <H6>{item.storage3}
                          <span>{item.props3}</span>
                        </H6>
                      </LI>
                      <LI>
                        <H6>{item.storage4}
                          <span>{item.props4}</span>
                        </H6>
                      </LI>
                      <LI>
                        <H6>{item.storage5}
                          <span>{item.props5}</span>
                        </H6>
                      </LI>
                    </UL>
                    <div className="pricingtable-signup">
                      <Btn attrBtn={{ color: 'primary', size: 'lg' }}>
                        {Subscribe}
                      </Btn>
                    </div>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </CardBody>
    </Fragment>
  );
};
export default Standards;

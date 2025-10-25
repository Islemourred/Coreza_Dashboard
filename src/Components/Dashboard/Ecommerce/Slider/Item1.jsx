import React, { Fragment } from 'react';
import { Card, CardHeader, Col, Row } from 'reactstrap';
import { H3, H4, H5, Image, P } from '../../../../AbstractElements';
import shoes from '../../../../assets/images/dashboard-2/1.png';
import shoe from '../../../../assets/images/details_close';
import CountdownData from './CountdownData';

const Item1 = () => {
    return (
        <Fragment>
            <Col xl="4" lg="6" md="12" className="box-col-50 xl-50">
            <Card className=" product-slider">
      <CardHeader>
            <div className="item">
                <Row className="discount-block">
                    <Col xl='7' lg='12' className="dash-xl-100 box-col-12">
                        <div className="discount-detail">
                            <div>
                            <P attrPara={{className:"square-after f-w-600"}} >Latest Offer Product<i className="fa fa-circle"> </i></P>
            <H4>-60% Offer</H4>
                                <H3 attrH3={{ className: 'm-auto' }}>Deal of the Day from <span className="font-primary">$75</span></H3>
                                <CountdownData />
                            </div>
                        </div>
                    </Col>
                    <Col xl='5' lg='12' className="dash-xl-100 box-col-12">
                        <div className="img-wrraper">
                            <Image attrImage={{ className: 'img-fluid', src: `${shoes}`, alt: '' }} />
                            <Image attrImage={{ className: 'img-fluid', src: `${shoe}`, alt: '' }} />
                        </div>
                    </Col>
                </Row>
            </div>
            </CardHeader>
            </Card>
            </Col>
        </Fragment>
    );
};
export default Item1;
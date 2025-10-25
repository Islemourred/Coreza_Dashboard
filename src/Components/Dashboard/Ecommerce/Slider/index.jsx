import React, { Fragment } from 'react';
import Slider from 'react-slick';
import { Card, CardBody, Col } from 'reactstrap';
import Item1 from './Item1';

const Sliders = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Fragment>
            <Col xl='5' md='6' className="dash-lgorder-1 dash-xl-50 dash-39 box-col-6">
                <Card className="special-discount">
                    <CardBody>
                        <Slider {...settings}>
                            <Item1 />
                            <Item1 />
                            <Item1 />
                        </Slider>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};
export default Sliders;
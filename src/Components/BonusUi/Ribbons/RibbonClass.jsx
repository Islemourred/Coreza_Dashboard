import React from 'react';
import { Row, Col, CardBody, Card } from 'reactstrap';
import { P, Ribbon } from '../../../AbstractElements';

const RibbonClass = () => {
    const Lorem ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
    return (
        <CardBody className='color-ribbon'>
            <Row>
                <Col sm="12" md="6" lg="4">
                    <Card className="ribbon-wrapper">
                        <CardBody>
                            <Ribbon attrRibbons={{ className: 'ribbon ribbon-primary ribbon-space-bottom' }} >Ribbon</Ribbon>
                            <P attrPara={{className: 'mb-0'}}>{Lorem}</P>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="12" md="6" lg="4">
                    <Card className="ribbon-wrapper">
                        <CardBody>
                            <div className="ribbon ribbon-info ribbon-space-bottom">Ribbon</div>
                            <P attrPara={{className: 'mb-0'}}>{Lorem}</P>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="12" md="6" lg="4">
                    <Card className="ribbon-wrapper">
                        <CardBody>
                            <div className="ribbon ribbon-success ribbon-space-bottom">Ribbon</div>
                            <P attrPara={{className: 'mb-0'}}>{Lorem}</P>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </CardBody>
    );
};

export default RibbonClass;
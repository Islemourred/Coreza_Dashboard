import React, { Fragment } from 'react';
import { Box } from 'react-feather';
import { Card, CardBody, Col } from 'reactstrap';
import { LI, UL } from '../../../../AbstractElements';
import HeaderCard from '../../../Common/Component/HeaderCard';

const InlineNav = () => {
    return (
        <Fragment>
            <Col xl="6" lg="12" className="xl-40">
                <Card>
                    <HeaderCard title="Inline Nav" />
                    <CardBody>
                        <UL attrUL={{ className: 'icon-lists border navs-icon inline-nav' }} >
                            <LI><a href="#javascript"><Box /><span> Base</span></a></LI>
                            <LI attrLI={{ className: 'pl-navs-inline' }} ><a href="#javascript"><i className="fa fa-angle-right"></i><span> State Color</span></a></LI>
                            <LI attrLI={{ className: 'pl-navs-inline' }} ><a href="#javascript"><i className="fa fa-angle-right"></i><span> Typography</span></a></LI>
                            <LI attrLI={{ className: 'pl-navs-inline' }} ><a href="#javascript"><i className="fa fa-angle-right"></i><span> Grid</span></a></LI>
                            <LI attrLI={{ className: 'pl-navs-inline' }} ><a href="#javascript"><i className="fa fa-angle-right"></i><span> Tags & Pills</span></a></LI>
                            <LI attrLI={{ className: 'pl-navs-inline' }} ><a href="#javascript"><i className="fa fa-angle-right"></i><span> Progress</span></a></LI>
                            <LI attrLI={{ className: 'pl-navs-inline' }} ><a href="#javascript"><i className="fa fa-angle-right"></i><span> Modal</span></a></LI>
                            <LI attrLI={{ className: 'pl-navs-inline' }} ><a href="#javascript"><i className="fa fa-angle-right"></i><span> Alert</span></a></LI>
                        </UL>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};

export default InlineNav;

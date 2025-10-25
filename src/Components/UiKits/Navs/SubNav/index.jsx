import React, { Fragment, useState } from 'react';
import { Box, FileText, FolderPlus, Server } from 'react-feather';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { Btn, H5, LI, UL } from '../../../../AbstractElements';
import HeaderCard from '../../../Common/Component/HeaderCard';

const SubNav = () => {
    const [isShow, setIsShow] = useState(true);

    const toggleClick = () => {
        setIsShow(!isShow);
    };
    return (
        <Fragment>
            <Col xl="6" lg="12" className="xl-60">
                <Card>
                    <HeaderCard title="Sub Nav" />
                    <CardBody>
                        <Row>
                            <Col lg="6">
                                <div>
                                    <H5>Static Sub Nav</H5>
                                </div>
                                <UL attrUL={{ className: 'icon-lists border navs-icon' }} >
                                    <LI><a href="#javascript"><Box /><span> Base</span></a></LI>
                                    <LI><a href="#javascript"><FolderPlus /><span> Advance</span></a>
                                        <UL>
                                            <LI attrLI={{ className: 'pl-navs-inline' }} ><a href="#javascript"><i className="fa fa-angle-right"></i>Scrollable</a></LI>
                                            <LI attrLI={{ className: 'pl-navs-inline' }}><a href="#javascript"><i className="fa fa-angle-right"></i>Tree View</a></LI>
                                            <LI attrLI={{ className: 'pl-navs-inline' }}><a href="#javascript"><i className="fa fa-angle-right"></i>Rating</a></LI>
                                        </UL>
                                    </LI>
                                    <LI><a href="#javascript"><FileText /><span> Forms</span></a></LI>
                                    <LI><a href="#javascript"><Server /><span> Tables</span></a></LI>
                                </UL>
                            </Col>
                            <Col lg="6" className="nav-md-mt">
                                <div>
                                    <H5>Toggle Sub Nav</H5>
                                </div>
                                <UL attrUL={{ className: 'icon-lists border navs-icon default-according style-1', id: 'accordionoc' }} >
                                    <LI><a href="#javascript"><Box /><span> Base</span></a></LI>
                                    <LI>
                                        <Btn attrBtn={{ className: 'btn btn-link text-muted collapsed pb-0', color: 'transperant', onClick: toggleClick }}><FolderPlus /><span> Advance</span></Btn>
                                        <UL attrUL={{ className: `collapse ${isShow ? 'show' : ''}`, id: 'collapseicon' }} >
                                            <LI attrLI={{ className: 'pl-navs-inline' }} ><a href="#javascript"><i className="fa fa-angle-right"></i>Scrollable</a></LI>
                                            <LI attrLI={{ className: 'pl-navs-inline' }}><a href="#javascript"><i className="fa fa-angle-right"></i>Tree View</a></LI>
                                            <LI attrLI={{ className: 'pl-navs-inline' }}><a href="#javascript"><i className="fa fa-angle-right"></i>Rating</a></LI>
                                        </UL>
                                    </LI>
                                    <LI><a href="#javascript"><FileText /><span> Forms</span></a></LI>
                                    <LI>
                                        <Btn attrBtn={{ className: 'btn btn-link text-muted collapsed pb-0',  color: 'transperant', onClick: toggleClick }}><Server /> Tables</Btn>
                                        <UL attrUL={{ className: `collapse ${isShow ? 'show' : ''}`, id: 'collapseicon1' }} >
                                            <LI attrLI={{ className: 'pl-navs-inline' }} ><a href="#javascript"><i className="fa fa-angle-right"></i>New</a></LI>
                                            <LI attrLI={{ className: 'pl-navs-inline' }}><a href="#javascript"><i className="fa fa-angle-right"></i>Replied</a></LI>
                                            <LI attrLI={{ className: 'pl-navs-inline' }}><a href="#javascript"><i className="fa fa-angle-right"></i>Pending</a></LI>
                                        </UL>
                                    </LI>
                                </UL>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </Fragment >
    );
};

export default SubNav;

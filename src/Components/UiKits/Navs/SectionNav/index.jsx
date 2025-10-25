import React, { Fragment } from "react";
import { Airplay, CloudLightning, Home, Layout, Sidebar } from "react-feather";
import { Card, CardBody, Col } from "reactstrap";
import { Btn, H5, LI, UL } from "../../../../AbstractElements";
import HeaderCard from "../../../Common/Component/HeaderCard";

const SectionNav = () => {
    return (
        <Fragment>
            <Col lg="6">
                <Card className="height-equal">
                    <HeaderCard title={'Section and Separator'} />
                    <CardBody>
                        <UL attrUL={{ className: "icon-lists border navs-icon" }} >
                            <LI>
                                <H5 attrH5={{ className: "mb-0" }}>General</H5>
                            </LI>
                            <LI><a href="#javascript"><Home /><span> Dashboard</span></a></LI>
                            <LI attrLI={{ className: "pb-0" }} ><a href="#javascript"><Airplay /><span> Widgets</span></a></LI>
                            <LI attrLI={{ className: "main-section" }} >
                                <H5 attrH5={{ className: "mb-0" }}>Layout</H5>
                            </LI>
                            <LI><a href="#javascript"><Sidebar /><span> Sidebar</span></a></LI>
                            <LI><a href="#javascript"><Layout /><span> Page Layout</span></a></LI>
                            <LI attrLI={{ className: "pb-0" }} ><a href="#javascript"><CloudLightning /><span> Footers</span></a></LI>
                            <LI attrLI={{ className: "separator" }}></LI>
                            <LI attrLI={{ className: "pt-0" }}>
                                <Btn attrBtn={{ className: "btn btn-pill btn-outline-primary", color: 'transperant' }} >Log Out</Btn>
                            </LI>
                        </UL>
                        <div className="onhover-dropdown navs-dropdown">
                            <Btn attrBtn={{ className: "onhover-dropdown", color: 'primary' }} >Dropdown example <i className="icon-arrow-down"></i></Btn>
                            <div className="onhover-show-div">
                                <UL attrUL={{ className: "icon-lists navs-icon" }}>
                                    <LI>
                                        <H5 attrH5={{ className: "mb-0" }}>General</H5>
                                    </LI>
                                    <LI><a href="#javascript"><Home /><span> Dashboard</span></a></LI>
                                    <LI><a href="#javascript"><Airplay /><span> Widgets</span></a></LI>
                                    <LI attrLI={{ className: "main-section" }} >
                                        <H5 attrH5={{ className: "mb-0" }} >Layout</H5>
                                    </LI>
                                    <LI><a href="#javascript"><Sidebar /><span> Sidebar</span></a></LI>
                                    <LI><a href="#javascript"><Layout /><span> Page Layout</span></a></LI>
                                    <LI attrLI={{ className: "pb-0" }} ><a href="#javascript"><CloudLightning /><span> Footers</span></a></LI>
                                    <LI attrLI={{ className: "separator" }} ></LI>
                                    <LI attrLI={{ className: "pt-0" }}>
                                        <Btn attrBtn={{ className: "btn btn-pill btn-outline-primary", color: 'primary' }} >Log Out</Btn>
                                    </LI>
                                </UL>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    )
}

export default SectionNav

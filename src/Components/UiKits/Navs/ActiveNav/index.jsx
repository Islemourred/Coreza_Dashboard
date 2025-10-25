import React, { Fragment } from "react";
import { Airplay, BarChart, Box, CreditCard, FileText, GitPullRequest, Home, Map, Server, Sliders } from "react-feather";
import { Card, CardBody, Col } from "reactstrap";
import { Btn, LI, UL } from "../../../../AbstractElements";
import HeaderCard from "../../../Common/Component/HeaderCard";

const ActiveNav = () => {
    return (
        <Fragment>
            <Col lg="6">
                <Card className="height-equal">
                    <HeaderCard title={'Active and Disabled Links'} />
                    <CardBody>
                        <UL attrUL={{ className: "icon-lists border navs-icon" }}>
                            <LI><a className="active" href="#javascript"><Home /><span> Dashboard</span></a></LI>
                            <LI><a href="#javascript"><Airplay /><span> Widgets</span></a></LI>
                            <LI><a className="disabled" href="#javascript"><Box /><span> Base</span></a></LI>
                            <LI><a href="#javascript"><FileText /><span> Forms</span></a></LI>
                            <LI><a href="#javascript"><Server /><span> Tables</span></a></LI>
                            <LI><a href="#javascript"><CreditCard /><span> Cards</span></a></LI>
                            <LI><a className="disabled" href="#javascript"><Sliders /><span> Timeline</span></a></LI>
                            <LI><a href="#javascript"><BarChart /><span> Charts</span></a></LI>
                            <LI><a href="#javascript"><Map /><span> Maps</span></a></LI>
                            <LI><a href="#javascript"><GitPullRequest /><span> Editors</span></a></LI>
                        </UL>
                        <div className="onhover-dropdown navs-dropdown">
                            <Btn attrBtn={{ className: "onhover-dropdown", color: 'primary ' }} >Dropdown example <i className="icon-arrow-down"></i></Btn>
                            <div className="onhover-show-div">
                                <UL attrUL={{ className: "icon-lists navs-icon" }} >
                                    <LI><a className="active" href="#javascript"><Home /><span> Dashboard</span></a></LI>
                                    <LI><a href="#javascript"><Airplay /><span> Widgets</span></a></LI>
                                    <LI><a className="disabled" href="#javascript"><Box /><span> Base</span></a></LI>
                                    <LI><a href="#javascript"><FileText /><span> Forms</span></a></LI>
                                    <LI><a href="#javascript"><Server /><span> Tables</span></a></LI>
                                    <LI><a href="#javascript"><CreditCard /><span> Cards</span></a></LI>
                                    <LI><a className="disabled" href="#javascript"><Sliders /><span> Timeline</span></a></LI>
                                    <LI><a href="#javascript"><BarChart /><span> Charts</span></a></LI>
                                    <LI><a href="#javascript"><Map /><span> Maps</span></a></LI>
                                    <LI><a href="#javascript"><GitPullRequest /><span> Editors</span></a></LI>
                                </UL>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    )
}

export default ActiveNav

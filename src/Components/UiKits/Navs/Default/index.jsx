import React, { Fragment } from "react";
import { Airplay, Box, FileText, Home, Server } from "react-feather";
import { Card, CardBody, Col } from "reactstrap";
import { Btn, LI, UL } from '../../../../AbstractElements';
import HeaderCard from "../../../Common/Component/HeaderCard";

const Default = () => {
    return (
        <Fragment>
            <Col sm="6">
                <Card>
                    <HeaderCard title="Default Nav" />
                    <CardBody>
                        <UL attrUL={{ className: 'icon-lists border navs-icon' }}>
                            <LI >
                                <Home /><span> Dashboard</span>
                            </LI>
                            <LI >
                                <Airplay /><span> Widgets</span>
                            </LI>
                            <LI >
                                <Box /><span> Base</span>
                            </LI>
                            <LI >
                                <FileText /><span> Forms</span>
                            </LI>
                            <LI >
                                <Server /><span> Tables</span>
                            </LI>
                        </UL>
                        <div className="onhover-dropdown navs-dropdown">
                            <Btn attrBtn={{ className: "onhover-dropdown", color: 'primary' }} >Dropdown example <i className="icon-arrow-down"></i></Btn>
                            <div className="onhover-show-div">
                                <UL attrUL={{ className: "icon-lists navs-icon" }} >
                                    <LI><a href="#javascript"><Home /><span> Dashboard</span></a></LI>
                                    <LI><a href="#javascript"><Airplay /><span> Widgets</span></a></LI>
                                    <LI><a href="#javascript"><Box /><span> Base</span></a></LI>
                                    <LI><a href="#javascript"><FileText /><span> Forms</span></a></LI>
                                    <LI><a href="#javascript"><Server /><span> Tables</span></a></LI>
                                </UL>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    )
}

export default Default

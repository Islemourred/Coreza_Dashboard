import React, { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Btn, LI, UL } from "../../../../AbstractElements";
import HeaderCard from "../../../Common/Component/HeaderCard";

const ItemNav = () => {
    return (
        <Fragment>
            <Col md="6">
                <Card>
                    <HeaderCard title="Item Bullets" />
                    <CardBody>
                        <div className="border nav-list">
                            <UL attrUL={{ className: "nav-list-disc" }} >
                                <LI><a href="#javascript"><i className="fa fa-angle-right"></i><span> Dashboard</span></a></LI>
                                <LI><a href="#javascript"><i className="fa fa-angle-right"></i><span> Widgets</span></a></LI>
                                <LI><a href="#javascript"><i className="fa fa-angle-right"></i><span> Base</span></a></LI>
                                <LI><a href="#javascript"><i className="fa fa-angle-right"></i><span> Forms</span></a></LI>
                                <LI><a href="#javascript"><i className="fa fa-angle-right"></i><span> Tables</span></a></LI>
                            </UL>
                        </div>
                        <div className="onhover-dropdown navs-dropdown">
                            <Btn attrBtn={{ className: "btn btn-primary onhover-dropdown" }} >Dropdown example <i className="icon-arrow-down"></i></Btn>
                            <div className="onhover-show-div">
                                <div className="nav-list">
                                    <UL attrUL={{ className: "nav-list-disc" }}>
                                        <LI><a href="#javascript"><i className="fa fa-angle-right"></i><span> Dashboard</span></a></LI>
                                        <LI><a href="#javascript"><i className="fa fa-angle-right"></i><span> Widgets</span></a></LI>
                                        <LI><a href="#javascript"><i className="fa fa-angle-right"></i><span> Base</span></a></LI>
                                        <LI><a href="#javascript"><i className="fa fa-angle-right"></i><span> Forms</span></a></LI>
                                        <LI><a href="#javascript"><i className="fa fa-angle-right"></i><span> Tables</span></a></LI>
                                    </UL>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    )
}

export default ItemNav

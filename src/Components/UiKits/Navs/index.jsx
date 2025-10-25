import React, { Fragment } from "react";
import { Container, Row } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import ActiveNav from "./ActiveNav";
import Default from "./Default";
import InlineNav from "./InlineNav";
import ItemNav from "./ItemBullet";
import SectionNav from "./SectionNav";
import SubNav from "./SubNav";

const Navs = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle='Navs' parent="Ui Kits" title="Navs"/>
            <Container fluid={true}>
                <Row>
                    <Default />
                    <ItemNav />
                    <SectionNav />
                    <ActiveNav />
                    <InlineNav />
                    <SubNav />
                </Row>
            </Container>
        </Fragment>
    )
}

export default Navs
import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import DeafultBreadCrumb from './DeafultBreadCrumb';
import NavBreadCrumb from './NavBreadCrumb';
import ColoredNavigation from './ColoredNavigation';
import OutlineColoredBreadcrumb from './OutlineColoredBreadcrumb';


const BreadcrumbClassContain = () => {
    return (
      <Fragment>
        <Breadcrumbs mainTitle="Breadcrumb" parent="Bonus Ui" title="Breadcrumb" />
        <Container fluid={true}>
          <Row>
            <DeafultBreadCrumb/>
            <NavBreadCrumb />
            <ColoredNavigation/>
            <OutlineColoredBreadcrumb />
          </Row>
        </Container>
      </Fragment>
    );
};
export default BreadcrumbClassContain;
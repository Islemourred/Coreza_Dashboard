import BasicTableClass from './BasicTableClass';
import InverseTableClass from './InverseTableClass';
import HoverableRowsClass from './HoverableRows';
import StripeInverseClass from './StripInverseClass';
import CaptionClass from './Caption';
import BreckpointClass from './BreckpointClass';
import InversePrimaryClass from './InversTableClass';
import { Container, Row } from 'reactstrap';
import React, { Fragment } from 'react';
import TableHeadOptionsClass from './TableHeadOptions';
import LargeTableClass from './LargeTable';
import CustomHoverClass from './CustomeHover';
import DashedBorderClass from './DashedBorderClass';
import { Breadcrumbs } from '../../../../AbstractElements';
import ResponsiveTableWithLightBackground from './ResponsiveTableWithLightBackground';

const BasicTablesContain = () => {
    return (
      <Fragment>
        <Breadcrumbs mainTitle="Basic Table" parent="Tables" title="React Strap Table" />
        <Container fluid={true}>  
          <Row>
            <BasicTableClass />
            <InverseTableClass />
            <HoverableRowsClass />
            <InversePrimaryClass />
            <CaptionClass />
            <TableHeadOptionsClass/>
            <StripeInverseClass />
            <BreckpointClass />
            <ResponsiveTableWithLightBackground/>
            <LargeTableClass/>
            <CustomHoverClass />
            <DashedBorderClass/>
          </Row>
        </Container>
      </Fragment>
    );
};

export default BasicTablesContain;
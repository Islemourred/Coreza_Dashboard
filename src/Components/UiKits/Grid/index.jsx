import  { Fragment } from 'react';
import { Container,Row } from 'reactstrap';
import GridOptionsCard from './GridOptions';
import GridColumnCard from './GridColumn';
import OneColumnWidthCard from './OneColumnWidth';
import VerticalAlignCard from './VerticalAlign';
import HorizontalAlignCard from './HorizontalAlign';
import NestingColCard from './NestingColumn';
import OrderCard from './Order';
import OffsetCard from './Offset';
import { Breadcrumbs } from '../../../AbstractElements';

const Grid = () => {
    return (
      <Fragment>
        <Breadcrumbs mainTitle="Grid" parent="Ui Kits" title="Grid"/>
        <Container fluid={true} className="grid-wrrapper">
          <Row>            
            <GridOptionsCard />    
            <GridColumnCard />         
            <OneColumnWidthCard />
            <VerticalAlignCard />
            <HorizontalAlignCard />
            <NestingColCard />
            <OrderCard />
            <OffsetCard />            
          </Row>
        </Container>
      </Fragment>
    );
};

export default Grid;
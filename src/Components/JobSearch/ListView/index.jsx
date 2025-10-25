import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import Sidebar from '../JobCardView/Sidebar';
import ListCard from './ListCard';

const ListViewContain = () => {
  return (
    <Fragment>
       <Breadcrumbs mainTitle="List View" parent="Job Search" title="List View" />
      <Container fluid={true}>
        <Row>
          <Sidebar />
          <ListCard />
        </Row>
      </Container>
    </Fragment>
  );
};

export default ListViewContain;
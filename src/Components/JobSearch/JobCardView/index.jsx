import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import Sidebar from './Sidebar';
import CardsClass from './Cards';
import { Breadcrumbs } from '../../../AbstractElements';

const JobCardsContain = () => {
  return (
    <Fragment>
       <Breadcrumbs mainTitle="Cards View" parent="Job Search" title="Cards View" />
      <Container fluid={true} className="job-cardview">
        <Row>
          <Sidebar />
          <CardsClass />
        </Row>
      </Container>
    </Fragment>
  );
};

export default JobCardsContain;
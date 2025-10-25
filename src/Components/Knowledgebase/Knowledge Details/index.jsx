import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import DetailedSidebar from './DetailedSidebar';
import MainCard from './MainCard';

const KnowledgeDetailContain = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Knowledge Detail" parent="Knowledgebase" title=" Knowledge Detail" />
      <Container fluid={true} className="knowledge-details">
        <Row>
          <DetailedSidebar />
          <MainCard />
        </Row>
      </Container>
    </Fragment>
  );
};
export default KnowledgeDetailContain;
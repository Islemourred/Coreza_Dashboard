import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Breadcrumbs, H4 } from '../../../AbstractElements';
import Articals from './Articals';
import FeaturesTutorial from './FeaturesTutorial';
import HeaderPart from './HeaderPart';

const KnowledgeBaseContain = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle=" Knowledgebase" parent="Knowledgebase" title=" Knowledgebase" />
      <Container fluid={true} className="faq-section">
        <Row>
          <HeaderPart />
          <Articals />
          <Col lg="12" className="featured-tutorial">
            <div className="header-faq">
              <H4 className="mb-0">Featured Tutorials</H4>
            </div>
            <FeaturesTutorial />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default KnowledgeBaseContain;
import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import LearningFilter from '../Common/learning-filter';
import BlogBox from './BlogBox';
import BoxList from './BoxList';

const LearningListContain = () => {

  return (
    <Fragment>
       <Breadcrumbs mainTitle="Learning List" parent="Learning" title="Learning List" />
      <Container fluid={true}>
        <Row className='learning-block'>
          <Col xl="9" className="xl-60 box-col-60">
            <Row>
              <BlogBox />
              <BoxList />
            </Row>
          </Col>
          <LearningFilter />
        </Row>
      </Container>
    </Fragment>
  );
};

export default LearningListContain;
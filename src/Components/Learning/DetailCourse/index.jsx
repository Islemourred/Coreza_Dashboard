import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import LearningFilter from '../Common/learning-filter';
import LearningDeatil from './learning-deatil';

const DetailCourseContain = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Detailed Course" parent="Learning" title="Detailed Course" />
      <Container fluid={true}>
        <Row className='learning-block'>
          <LearningDeatil />
          <LearningFilter />
        </Row>
      </Container>
    </Fragment>
  );
};

export default DetailCourseContain;
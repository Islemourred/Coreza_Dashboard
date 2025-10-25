import Sidebar from '../JobCardView/Sidebar';
import JobApply from './Form';
import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';


const ApplyContain = () => {
    return (
      <Fragment>
         <Breadcrumbs mainTitle="Apply" parent="Job Search" title=" Apply" />
        <Container fluid={true}>
          <Row>
            <Sidebar />
            <JobApply />
          </Row>
        </Container>
      </Fragment>
    );
};

export default ApplyContain;
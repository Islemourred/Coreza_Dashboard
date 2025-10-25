import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';
import EditMyProfile from './EditmyProfile';
import MyProfileEdit from './MyProfile';
import { Breadcrumbs } from '../../../AbstractElements';

const UsersEditContain = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="User Edit" parent="Users" title="User Edit" />
      <Container fluid={true}>
        <div className="edit-profile">
          <Row>
            <Col xl="4" lg="5">
              <MyProfileEdit />
            </Col>
            <Col xl="8" lg="7">
              <EditMyProfile />
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
export default UsersEditContain;
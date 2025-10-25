import AboutMeSidebar from './AboutMeSidebar';
import FollowerSidebar from './FollowerSidebar';
import FollowingSidebar from './FollowingSidebar';
import FriendsSidebar from './FriendsSidebar';
import PhotoSidebar from './PhotoSidebar';
import ProfileContain from './ProfileContain';
import ProfileHeader from './ProfileHeader';
import { Col, Container, Row } from 'reactstrap';
import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../AbstractElements';

const UsersProfileContain = () => {
    return (
      <Fragment>
        <Breadcrumbs mainTitle="User Profile" parent="Users" title="User Profile" />
        <Container fluid={true}>
          <div className="user-profile">
            <Row>
              <ProfileHeader />
              <Col xl="3" md="5" lg="4" className="xl-35 box-col-30">
                <div className="default-according style-1 job-accordion">
                  <Row>
                    <AboutMeSidebar />
                    <FollowerSidebar />
                    <FollowingSidebar />
                    <PhotoSidebar />
                    <FriendsSidebar />
                  </Row>
                </div>
              </Col>
              <ProfileContain />
            </Row>
          </div>
        </Container>
      </Fragment>
    );
};
export default UsersProfileContain;
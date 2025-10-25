import {  useCallback, useState, Fragment } from 'react';
import {  Container, Row, TabContent, TabPane } from 'reactstrap';
import AllCards from '../User/UsersCards/AllCards';
import ProfileHeader from '../User/UsersProfile/ProfileHeader';
import AboutTimeLine from './AboutTimeline';
import PhotosTab from './PhotosTab';
import TimelineTab from './TimelineTab';
import SocialAppTimeLine from './SocialAppTimeLine';
import { Breadcrumbs } from '../../AbstractElements';

const SocialAppContain = () => {
  const [activeTab, setActiveTab] = useState('1');
  const callback = useCallback((tab) => {
    setActiveTab(tab);
  }, []);
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Social App" parent="Apps" title="Social App" />
      <Container fluid={true}>
        <div className="user-profile social-app-profile">
          <Row>
            <ProfileHeader />
          </Row>
          <TimelineTab callbackActive={callback} />
          <TabContent activeTab={activeTab} className="tab-content">
            <TabPane tabId="1">
              <SocialAppTimeLine />
            </TabPane>
            <TabPane tabId="2">
              <AboutTimeLine />
            </TabPane>
            <TabPane tabId="3">
              <Row>
                <AllCards />
              </Row>
            </TabPane>
            <TabPane tabId="4">
              <PhotosTab />
            </TabPane>
          </TabContent>
        </div>
      </Container>
    </Fragment>
  );
};
export default SocialAppContain;
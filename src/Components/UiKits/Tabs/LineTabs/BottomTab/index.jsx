import  { useState } from 'react';
import { Card, CardBody, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import {  P } from '../../../../../AbstractElements';
import { Contact, Hometxt, Href, LongLorem, MaterialBottomTab, MaterialBottomTabSpan, Profile } from '../../../../../Constant';
import HeadingCommon from '../../../../../Common/Component/HeadingCommon';

const BottomTab = () => {
  const [BottomLineTab, setBottomLineTab] = useState('1');
  return (
    <Col sm="12" xl="6">
      <Card>
        <HeadingCommon Heading={MaterialBottomTab} CardHeaderClassName="pb-0" span={MaterialBottomTabSpan}  />  
        <CardBody>
          <TabContent activeTab={BottomLineTab}>
            <TabPane className="fade show" tabId="1">
              <P>{`1 ${LongLorem}`}</P>
            </TabPane>
            <TabPane tabId="2">
              <P>{`2 ${LongLorem}`}</P>
            </TabPane>
            <TabPane tabId="3">
              <P>{`3 ${LongLorem}`}</P>
            </TabPane>
          </TabContent>
          <Nav className="border-tab" tabs>
            <NavItem>
              <NavLink href={Href} className={BottomLineTab === '1' ? 'active' : ''} onClick={() => setBottomLineTab('1')}><i className="icofont icofont-ui-home"></i>{Hometxt}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={Href} className={BottomLineTab === '2' ? 'active' : ''} onClick={() => setBottomLineTab('2')}><i className="icofont icofont-man-in-glasses"></i>{Profile}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={Href} className={BottomLineTab === '3' ? 'active' : ''} onClick={() => setBottomLineTab('3')}><i className="icofont icofont-contacts"></i>{Contact}</NavLink>
            </NavItem>
          </Nav>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BottomTab;
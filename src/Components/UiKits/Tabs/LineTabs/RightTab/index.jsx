import  { useState } from 'react';
import { Card, CardBody, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import {  P } from '../../../../../AbstractElements';
import { Hometxt, Href, Inbox, LongLorem, MaterialRightTab, Profile, RightTabSpan, Settings } from '../../../../../Constant';
import HeadingCommon from '../../../../../Common/Component/HeadingCommon';

const RightTab = () => {
  const [RightLineTab, setRightLineTab] = useState('1');
  return (
    <Col sm="12" xl="6">
      <Card>
        <HeadingCommon Heading={MaterialRightTab} CardHeaderClassName="pb-0" span={RightTabSpan}  />  
        <CardBody>
          <Row>
            <Col sm="9">
              <TabContent activeTab={RightLineTab} className="text-end">
                <TabPane className="fade show" tabId="1">
                  <P>{`1 ${LongLorem}`}</P>
                </TabPane>
                <TabPane tabId="2">
                  <P>{`2 ${LongLorem}`}</P>
                </TabPane>
                <TabPane tabId="3">
                  <P>{`3 ${LongLorem}`}</P>
                </TabPane>
                <TabPane tabId="4">
                  <P>{`4 ${LongLorem}`}</P>
                </TabPane>
              </TabContent>
            </Col>
            <Col sm="3" className="tabs-responsive-side">
              <Nav className="flex-column border-tab nav-right" >
                <NavItem>
                  <NavLink href={Href} className={RightLineTab === '1' ? 'active' : ''} onClick={() => setRightLineTab('1')}>{Hometxt}</NavLink>
                </NavItem>
                <NavItem >
                  <NavLink href={Href} className={RightLineTab === '2' ? 'active' : ''} onClick={() => setRightLineTab('2')}>{Profile}</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href={Href} className={RightLineTab === '3' ? 'active' : ''} onClick={() => setRightLineTab('3')}>{Inbox}</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href={Href} className={RightLineTab === '4' ? 'active' : ''} onClick={() => setRightLineTab('4')}>{Settings}</NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RightTab;
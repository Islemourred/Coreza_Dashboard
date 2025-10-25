import  { useState } from 'react';
import { Card, CardBody, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import {  P } from '../../../../../AbstractElements';
import { Hometxt, Href, Inbox, LeftTabSpan, LongLorem, MaterialLeftTab, Profile, Settings } from '../../../../../Constant';
import HeadingCommon from '../../../../../Common/Component/HeadingCommon';

const LeftTab = () => {
  const [LeftLineTab, setLeftLineTab] = useState('1');
  return (
    <Col sm="12" xl="6">
      <Card>
        <HeadingCommon Heading={MaterialLeftTab} CardHeaderClassName="pb-0" span={LeftTabSpan}  />  
        <CardBody>
          <Row>
            <Col sm="3" className="tabs-responsive-side">
              <Nav className="flex-column nav-pills border-tab nav-left" >
                <NavItem>
                  <NavLink href={Href} className={LeftLineTab === '1' ? 'active' : ''} onClick={() => setLeftLineTab('1')}>{Hometxt}</NavLink>
                </NavItem>
                <NavItem >
                  <NavLink href={Href} className={LeftLineTab === '2' ? 'active' : ''} onClick={() => setLeftLineTab('2')}>{Profile}</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href={Href} className={LeftLineTab === '3' ? 'active' : ''} onClick={() => setLeftLineTab('3')}>{Inbox}</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href={Href} className={LeftLineTab === '4' ? 'active' : ''} onClick={() => setLeftLineTab('4')}>{Settings}</NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col sm="9">
              <TabContent activeTab={LeftLineTab}>
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
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LeftTab;
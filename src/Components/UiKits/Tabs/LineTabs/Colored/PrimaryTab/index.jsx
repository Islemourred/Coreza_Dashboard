import  { useState } from 'react';
import { Card, CardBody, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import {  P } from '../../../../../../AbstractElements';
import { Contact, Hometxt, Href, LongLorem, Profile, SimpleMaterialTab, SimpleMaterialTabSpan1 } from '../../../../../../Constant';
import HeadingCommon from '../../../../../../Common/Component/HeadingCommon';

const PrimaryColorTab = () => {
  const [PrimarycolorLineTab, setPrimarycolorLineTab] = useState('1');
  return (
    <Col sm="12" xl="6">
      <Card>
      <HeadingCommon Heading={SimpleMaterialTab} CardHeaderClassName="pb-0" span={SimpleMaterialTabSpan1}  />  
        <CardBody>
          <Nav className="border-tab nav-primary" tabs>
            <NavItem>
              <NavLink href={Href} className={PrimarycolorLineTab === '1' ? 'active' : ''} onClick={() => setPrimarycolorLineTab('1')}><i className="icofont icofont-ui-home"></i>{Hometxt}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={Href} className={PrimarycolorLineTab === '2' ? 'active' : ''} onClick={() => setPrimarycolorLineTab('2')}><i className="icofont icofont-man-in-glasses"></i>{Profile}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={Href} className={PrimarycolorLineTab === '3' ? 'active' : ''} onClick={() => setPrimarycolorLineTab('3')}><i className="icofont icofont-contacts"></i>{Contact}</NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={PrimarycolorLineTab}>
            <TabPane className="fade show" tabId="1">
              <P attrPara={{ className: 'mb-0 m-t-30' }}>{`1 ${LongLorem}`}</P>
            </TabPane>
            <TabPane tabId="2">
              <P attrPara={{ className: 'mb-0 m-t-30' }}>{`2 ${LongLorem}`}</P>
            </TabPane>
            <TabPane tabId="3">
              <P attrPara={{ className: 'mb-0 m-t-30' }}>{`3 ${LongLorem}`}</P>
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PrimaryColorTab;
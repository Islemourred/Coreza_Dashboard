import  { useState } from 'react';
import { Card, CardBody,  Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import {  P } from '../../../../../../AbstractElements';
import { Contact, Hometxt, LongLorem, Profile, SecondaryColorTabHeading, SecondaryColorTabSpan } from '../../../../../../Constant';
import HeadingCommon from '../../../../../../Common/Component/HeadingCommon';

const SecondaryColorTab = () => {
  const [SecondarycolorLineTab, setSecondarycolorLineTab] = useState('1');
  return (
    <Col sm="12" xl="6">
      <Card>
        <HeadingCommon Heading={SecondaryColorTabHeading} CardHeaderClassName="pb-0" span={SecondaryColorTabSpan}  />  
        <CardBody>
          <TabContent activeTab={SecondarycolorLineTab}>
            <TabPane className="fade show" tabId="1">
              <P attrPara={{ className: 'mb-0' }}>{`1 ${LongLorem}`}</P>
            </TabPane>
            <TabPane tabId="2">
              <P attrPara={{ className: 'mb-0' }}>{`2 ${LongLorem}`}</P>
            </TabPane>
            <TabPane tabId="3">
              <P attrPara={{ className: 'mb-0' }}>{`3 ${LongLorem}`}</P>
            </TabPane>
          </TabContent>
          <Nav className="border-tab nav-secondary" tabs>
            <NavItem>
              <NavLink href="#javascript" className={SecondarycolorLineTab === '1' ? 'active' : ''} onClick={() => setSecondarycolorLineTab('1')}><i className="icofont icofont-ui-home"></i>{Hometxt}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#javascript" className={SecondarycolorLineTab === '2' ? 'active' : ''} onClick={() => setSecondarycolorLineTab('2')}><i className="icofont icofont-man-in-glasses"></i>{Profile}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#javascript" className={SecondarycolorLineTab === '3' ? 'active' : ''} onClick={() => setSecondarycolorLineTab('3')}><i className="icofont icofont-contacts"></i>{Contact}</NavLink>
            </NavItem>
          </Nav>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SecondaryColorTab;
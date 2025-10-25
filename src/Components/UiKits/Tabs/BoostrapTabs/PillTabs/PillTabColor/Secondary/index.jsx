import  { useState } from 'react';
import { Card, CardBody,  Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { Contact, Hometxt, Href, LongLorem, Profile, SecondaryColor, SecondaryColorWithIconSpan } from '../../../../../../../Constant';
import {  P } from '../../../../../../../AbstractElements';
import HeadingCommon from '../../../../../../../Common/Component/HeadingCommon';

const PillSecondaryTab = () => {

  const [secondaryTab, setSecondary] = useState('1');
  return (
    <Col sm="12" xl="6">
      <Card className="height-equal">
      <HeadingCommon Heading={SecondaryColor} CardHeaderClassName="pb-0" span={SecondaryColorWithIconSpan}  />  
        <CardBody>
          <Nav className="nav-secondary nav-pills">
            <NavItem>
              <NavLink href={Href} className={secondaryTab === '1' ? 'active' : ''} onClick={() => setSecondary('1')}><i className="icofont icofont-ui-home"></i>{Hometxt}</NavLink>
            </NavItem>
            <NavItem >
              <NavLink href={Href} className={secondaryTab === '2' ? 'active' : ''} onClick={() => setSecondary('2')}><i className="icofont icofont-man-in-glasses"></i>{Profile}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={Href} className={secondaryTab === '3' ? 'active' : ''} onClick={() => setSecondary('3')}><i className="icofont icofont-contacts"></i>{Contact}</NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={secondaryTab}>
            <TabPane className="fade show" tabId="1">
              <P attrPara={{ className: 'mb-0 m-t-30' }} >{`1 ${LongLorem}`}</P>
            </TabPane>
            <TabPane tabId="2">
              <P attrPara={{ className: 'mb-0 m-t-30' }} >{`2 ${LongLorem}`}</P>
            </TabPane>
            <TabPane tabId="3">
              <P attrPara={{ className: 'mb-0 m-t-30' }} >{`3 ${LongLorem}`}</P>
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PillSecondaryTab;
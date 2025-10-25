import  { useState } from 'react';
import { Card, CardBody, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { Contact, Hometxt, Href, LongLorem, PillTabs, Profile } from '../../../../../../Constant';
import { P } from '../../../../../../AbstractElements';
import HeadingCommon from '../../../../../../Common/Component/HeadingCommon';

const PillTab = () => {

  const [pillTab, setpillTab] = useState('1');

  return (
    <Col sm="12" xl="6">
      <Card>
        <HeadingCommon Heading={PillTabs} />  
        <CardBody>
          <Nav className="nav-pills">
            <NavItem>
              <NavLink href={Href} className={pillTab === '1' ? 'active' : ''} onClick={() => setpillTab('1')}>{Hometxt}</NavLink>
            </NavItem>
            <NavItem >
              <NavLink href={Href} className={pillTab === '2' ? 'active' : ''} onClick={() => setpillTab('2')}>{Profile}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={Href} className={pillTab === '3' ? 'active' : ''} onClick={() => setpillTab('3')}>{Contact}</NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={pillTab}>
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

export default PillTab;
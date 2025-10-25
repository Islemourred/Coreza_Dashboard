import { useState } from 'react';
import { Card, CardBody, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import { Hometxt, Href, LongLorem, Messages, Profile, Settings, TabsVertical } from '../../../../../../Constant';
import { P } from '../../../../../../AbstractElements';
import HeadingCommon from '../../../../../../Common/Component/HeadingCommon';

const Vertical = () => {

  const [VerticleTab, setVerticleTab] = useState('1');

  return (
    <Col sm="12" xl="6">
      <Card>
      <HeadingCommon Heading={TabsVertical} />  
        <CardBody>
          <Row>
            <Col sm="4" xs="12">
              <Nav className="flex-column nav-pills">
                <NavItem>
                  <NavLink href={Href} className={VerticleTab === '1' ? 'active' : ''} onClick={() => setVerticleTab('1')}>{Hometxt}</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href={Href} className={VerticleTab === '2' ? 'active' : ''} onClick={() => setVerticleTab('2')}>{Profile}</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href={Href} className={VerticleTab === '3' ? 'active' : ''} onClick={() => setVerticleTab('3')}>{Messages}</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href={Href} className={VerticleTab === '4' ? 'active' : ''} onClick={() => setVerticleTab('4')}>{Settings}</NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col sm="8" xs="12">
              <TabContent activeTab={VerticleTab}>
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

export default Vertical;
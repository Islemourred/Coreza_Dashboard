import React, { useState } from 'react';
import { Card, CardBody, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { Contact, Hometxt, LongLorem, Profile,TabsWithIcon } from '../../../../Constant';
import { P } from '../../../../AbstractElements';
import HeadingCommon from '../../../../Common/Component/HeadingCommon';

const SimpleTab = () => {
  const [BasicTab, setBasicTab] = useState('1');
  return (
    <Col lg="12" xl="6" className='xl-100  box-col-12'>
      <Card>
        <HeadingCommon Heading={TabsWithIcon} CardHeaderClassName="border-bottom-light" H4className="pull-left" />
        <CardBody>
            <div className='tabbed-card'>
          <Nav pills className='pull-right nav-secondary'>
            <NavItem>
              <NavLink href="#javascript" className={BasicTab === '1' ? 'active' : ''} onClick={() => setBasicTab('1')}><i className="icofont icofont-ui-home"></i>{Hometxt}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#javascript" className={BasicTab === '2' ? 'active' : ''} onClick={() => setBasicTab('2')}><i className="icofont icofont-man-in-glasses"></i>{Profile}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#javascript" className={BasicTab === '3' ? 'active' : ''} onClick={() => setBasicTab('3')}><i className="icofont icofont-contacts"></i>{Contact}</NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={BasicTab}>
            <TabPane className="fade show" tabId="1">
              <P attrPara={{ className: 'mb-0 m-t-30' }}>{`${1}${LongLorem}` }</P>
            </TabPane>
            <TabPane tabId="2">
              <P attrPara={{ className: 'mb-0 m-t-30' }}>{`${2}${LongLorem}`}</P>
            </TabPane>
            <TabPane tabId="3">
              <P attrPara={{ className: 'mb-0 m-t-30' }}>{`${3}${LongLorem}`}</P>
            </TabPane>
          </TabContent>
          </div>

        </CardBody>
      </Card>
    </Col>
  );
};

export default SimpleTab;
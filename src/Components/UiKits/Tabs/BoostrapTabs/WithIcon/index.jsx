import { useState } from 'react';
import { Card, CardBody, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { Contact, Hometxt, Href, LongLorem, Profile, TabsWithIcon } from '../../../../../Constant';
import { P } from '../../../../../AbstractElements';
import HeadingCommon from '../../../../../Common/Component/HeadingCommon';

const WithIcon = () => {

  const [IconWithTab, setIconWithTab] = useState('1');

  return (
    <Col sm="12" xl="6">
      <Card>
        <HeadingCommon Heading={TabsWithIcon} />
        <CardBody>
          <Nav tabs>
            <NavItem>
              <NavLink href={Href} className={IconWithTab === '1' ? 'active' : ''} onClick={() => setIconWithTab('1')}><i className="icofont icofont-ui-home"></i>{Hometxt}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={Href} className={IconWithTab === '2' ? 'active' : ''} onClick={() => setIconWithTab('2')}><i className="icofont icofont-man-in-glasses"></i>{Profile}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={Href} className={IconWithTab === '3' ? 'active' : ''} onClick={() => setIconWithTab('3')}><i className="icofont icofont-contacts"></i>{Contact}</NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={IconWithTab}>
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

export default WithIcon;
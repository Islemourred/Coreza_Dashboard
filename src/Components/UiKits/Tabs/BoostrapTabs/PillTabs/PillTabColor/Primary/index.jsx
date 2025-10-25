import  { useState } from 'react';
import {Card,CardBody,Col,Nav,NavItem,NavLink,TabContent,TabPane,} from 'reactstrap';
import {Contact,Hometxt,LongLorem,PrimaryColorWithIcon,PrimaryColorWithIconSpan,Profile,} from '../../../../../../../Constant';
import {  P } from '../../../../../../../AbstractElements';
import HeadingCommon from '../../../../../../../Common/Component/HeadingCommon';

const PillPrimaryTab = () => {
  const [primarycolorTab, setprimarycolorTab] = useState('1');

  return (
    <Col sm="12" xl="6">
      <Card>
        <HeadingCommon Heading={PrimaryColorWithIcon} CardHeaderClassName="pb-0" span={PrimaryColorWithIconSpan}  />  
        <CardBody>
          <Nav className="nav-primary" tabs>
            <NavItem>
              <NavLink href="#javascript" className={primarycolorTab === '1' ? 'active' : ''} onClick={() => setprimarycolorTab('1')}><i className="icofont icofont-ui-home"></i>{Hometxt}</NavLink>
            </NavItem>
            <NavItem >
              <NavLink href="#javascript" className={primarycolorTab === '2' ? 'active' : ''} onClick={() => setprimarycolorTab('2')}><i className="icofont icofont-man-in-glasses"></i>{Profile}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#javascript" className={primarycolorTab === '3' ? 'active' : ''} onClick={() => setprimarycolorTab('3')}><i className="icofont icofont-contacts"></i>{Contact}</NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={primarycolorTab}>
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

export default PillPrimaryTab;

import  { useState } from 'react';
import { Card, CardBody, Col, Nav, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import { P } from '../../../../../../AbstractElements';
import { Hometxt, Href, Inbox, LongLorem, Profile, Settings,  SuccessColorTabHeading, SuccessColorTabSpan } from '../../../../../../Constant';
import HeadingCommon from '../../../../../../Common/Component/HeadingCommon';

const SuccessColorTab = () => {
  const [InfoRightLineTab, setInfoRightLineTab] = useState('1');
  return (
    <Col sm="12" xl="6">
      <Card>
      <HeadingCommon Heading={SuccessColorTabHeading} CardHeaderClassName="pb-0" span={SuccessColorTabSpan}  />  
        <CardBody>
          <Row>
            <Col sm="3" className="tabs-responsive-side">
              <Nav className="flex-column nav-success border-tab nav-left">
                <NavLink href={Href} className={InfoRightLineTab === '1' ? 'active' : ''} onClick={() => setInfoRightLineTab('1')}>{Hometxt}</NavLink>
                <NavLink href={Href} className={InfoRightLineTab === '2' ? 'active' : ''} onClick={() => setInfoRightLineTab('2')}>{Profile}</NavLink>
                <NavLink href={Href} className={InfoRightLineTab === '3' ? 'active' : ''} onClick={() => setInfoRightLineTab('3')}>{Inbox}</NavLink>
                <NavLink href={Href} className={InfoRightLineTab === '4' ? 'active' : ''} onClick={() => setInfoRightLineTab('4')}>{Settings}</NavLink>
              </Nav>
            </Col>
            <Col sm="9">
              <TabContent activeTab={InfoRightLineTab}>
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

export default SuccessColorTab;
import  { useState } from 'react';
import { Card, CardBody,  Col, Nav, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import { P } from '../../../../../../AbstractElements';
import { Hometxt, Href, Inbox, InfoColorTabHeading, InfoColorTabSpan, LongLorem, Profile, Settings } from '../../../../../../Constant';
import HeadingCommon from '../../../../../../Common/Component/HeadingCommon';

const InfoColorTab = () => {
  const [InfoRightLineTab, setInfoRightLineTab] = useState('1');
  return (
    <Col sm="12" xl="6">
      <Card>
      <HeadingCommon Heading={InfoColorTabHeading} CardHeaderClassName="pb-0" span={InfoColorTabSpan}  /> 
        <CardBody>
          <Row>
            <Col sm="9" className="tabs-responsive-side">
              <TabContent activeTab={InfoRightLineTab}>
                <TabPane className="fade show" tabId="1" >
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
            <Col sm="3">
              <Nav className="flex-column nav-info border-tab nav-right">
                <NavLink href={Href} className={InfoRightLineTab === '1' ? 'active' : ''} onClick={() => setInfoRightLineTab('1')}>{Hometxt}</NavLink>
                <NavLink href={Href} className={InfoRightLineTab === '2' ? 'active' : ''} onClick={() => setInfoRightLineTab('2')}>{Profile}</NavLink>
                <NavLink href={Href} className={InfoRightLineTab === '3' ? 'active' : ''} onClick={() => setInfoRightLineTab('3')}>{Inbox}</NavLink>
                <NavLink href={Href} className={InfoRightLineTab === '4' ? 'active' : ''} onClick={() => setInfoRightLineTab('4')}>{Settings}</NavLink>
              </Nav>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default InfoColorTab;
import  { useState } from 'react';
import { Card, CardBody, Col, Row, TabContent, TabPane } from 'reactstrap';
import { LI, UL } from '../../../../AbstractElements';
import { Hometxt, Href, JavaScriptBehavior, LongLorem, Messages, Profile, Settings } from '../../../../Constant';
import HeadingCommon from '../../../../Common/Component/HeadingCommon';

const JavascriptBase = () => {

  const [activeTab, setActiveTab] = useState('1');

  return (
    <Col sm="12" xl="12">
      <Card>
        <HeadingCommon Heading={JavaScriptBehavior} CardHeaderClassName="pb-0" />
        <CardBody>
          <Row>
            <Col sm="4 tab-javascript">
              <UL attrUL={{ className: 'nav-primary nav-pills' }}>
                <LI attrLI={{ href: Href, className: activeTab === '1' ? 'list-group-item-action active' : '', onClick: () => setActiveTab('1') }}>{Hometxt}</LI>
                <LI attrLI={{ href: Href, className: activeTab === '2' ? 'list-group-item-action active' : '', onClick: () => setActiveTab('2') }} >{Profile}</LI>
                <LI attrLI={{ href: Href, className: activeTab === '3' ? 'list-group-item-action active' : '', onClick: () => setActiveTab('3') }} >{Messages}</LI>
                <LI attrLI={{ href: Href, className: activeTab === '4' ? 'list-group-item-action active' : '', onClick: () => setActiveTab('4') }} >{Settings}</LI>
              </UL>
            </Col>
            <Col sm="8">
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1" className="fade show">{`1.${LongLorem}.`}</TabPane>
                <TabPane tabId="2" className="fade show">{`2.${LongLorem}.`}</TabPane>
                <TabPane tabId="3" className="fade show">{`3.${LongLorem}.`}</TabPane>
                <TabPane tabId="4" className="fade show">{`4.${LongLorem}.`}</TabPane>
              </TabContent>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default JavascriptBase;

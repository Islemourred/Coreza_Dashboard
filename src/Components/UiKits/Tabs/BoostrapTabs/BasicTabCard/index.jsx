import  { useState } from 'react';
import { Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { P } from '../../../../../AbstractElements';
import { Action, BasicTabs, Contact, Hometxt, Href, LongLorem, Profile } from '../../../../../Constant';
import HeadingCommon from '../../../../../Common/Component/HeadingCommon';

const BasicTabCard = () => {

  const [BasicTab, setBasicTab] = useState('1');

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  return (
    <Col sm="12" xl="6">
      <Card>
        <HeadingCommon Heading={BasicTabs} CardHeaderClassName="pb-0" />
        <CardBody>
          <Nav tabs>
            <NavItem><NavLink href={Href} className={BasicTab === '1' ? 'active' : ''} onClick={() => setBasicTab('1')}>{Hometxt}</NavLink></NavItem>
            <Dropdown className="nav-item" isOpen={dropdownOpen} toggle={toggle}>
              <NavItem>
                <DropdownToggle className="nav-link" tag="a" href={Href} color="default" caret>
                  {'Dropdown'}
                </DropdownToggle>
                <DropdownMenu>
                  <NavLink href={Href} className={BasicTab === '2' ? 'active' : ''} onClick={() => setBasicTab('2')}>{Action}</NavLink>
                  <DropdownItem href={Href}>{'Another action'}</DropdownItem>
                  <DropdownItem href={Href}>{'Something else here'}</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href={Href}>{'Separated link'}</DropdownItem>
                </DropdownMenu>
              </NavItem>
            </Dropdown>
            <NavItem><NavLink href={Href} className={BasicTab === '3' ? 'active' : ''} onClick={() => setBasicTab('3')}>{Profile}</NavLink></NavItem>
            <NavItem><NavLink href={Href} className={BasicTab === '4' ? 'active' : ''} onClick={() => setBasicTab('4')}>{Contact}</NavLink></NavItem>
          </Nav>
          <TabContent activeTab={BasicTab}>
            <TabPane className="fade show" tabId="1">
              <P attrPara={{ className: 'mb-0 m-t-30' }}>{`1 ${LongLorem}`}</P>
            </TabPane>
            <TabPane tabId="2">
              <P attrPara={{ className: 'mb-0 m-t-30' }}>{`2 ${LongLorem}`}</P>
            </TabPane>
            <TabPane tabId="3">
              <P attrPara={{ className: 'mb-0 m-t-30' }}>{`3 ${LongLorem}`}</P>
            </TabPane>
            <TabPane tabId="4">
              <P attrPara={{ className: 'mb-0 m-t-30' }}>{`4 ${LongLorem}`}</P>
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicTabCard;
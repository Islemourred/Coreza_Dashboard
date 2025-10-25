import React, { Fragment, useContext, useState } from 'react';
import { Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import ChatAppContext from '../../../Helper/chat-app/index';
import { CALL, STATUS, PROFILE } from '../../../Constant/index';
import Tab1 from './Tab1';
import Tab3 from './Tab3';
import Tab2 from './Tab2';

const ChatMenu = () => {
  const { sidebarToggle } = useContext(ChatAppContext);
  const [activeTab, setActiveTab] = useState('1');
  const style = { opacity: 1, visibility: 'visible' };
  return (
    <Fragment>
      {sidebarToggle && <Col className="chat-menu show" style={style}>
        <Nav tabs className="border-tab nav-primary">
          <NavItem id="myTab" role="tablist">
            <NavLink tag="a" className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}> {CALL}</NavLink>
          </NavItem>
          <NavItem id="myTab" role="tablist">
            <NavLink tag="a" className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
              {STATUS}
            </NavLink>
          </NavItem>
          <NavItem id="myTab" role="tablist">
            <NavLink tag="a" className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>{PROFILE}</NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Tab1 />
          </TabPane>
          <TabPane tabId="2">
            <Tab2 />
          </TabPane>
          <TabPane tabId="3">
            <Tab3 />
          </TabPane>
        </TabContent>
      </Col>}
    </Fragment>
  );
};
export default ChatMenu;
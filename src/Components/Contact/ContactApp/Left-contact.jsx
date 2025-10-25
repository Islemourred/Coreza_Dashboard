import React, { Fragment, useState, useEffect, useCallback, useContext } from 'react';
import { Col, Card, CardBody } from 'reactstrap';
import ContactAppContext from '../../../Helper/Contact/index';
import HeaderProfile from './HeaderProfile';
import NavComponent from './NavComponent';
import TabComponent from './TabComponent';

const LeftContact = () => {
  const { users } = useContext(ContactAppContext);
  const [activeTab, setActiveTab] = useState('1');
  useEffect(() => {
  }, []);// eslint-disable-next-line
  const callback = useCallback((tab) => {
    setActiveTab(tab);
  }, []);
  const [IsOpen, setIsOpen] = useState(false);
  const onClickSidebar = () => {
    setIsOpen(!IsOpen);
  };
  return (
    <Fragment>
      <Col xl="4" xxl="3">
        <div className="md-sidebar"><a className="btn btn-primary md-sidebar-toggle" href="#javascript" onClick={onClickSidebar}>Contact Filter</a>
          <div className={`md-sidebar-aside email-left-aside custom-scrollbar ${IsOpen ? 'open' : ''}`}>
            <Card>
              <CardBody>
                <div className="email-app-sidebar left-bookmark">
                  <HeaderProfile />
                  <NavComponent callbackActive={callback} />
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </Col>
      <Col xxl="9" xl="8" md="12">
        <div className="email-right-aside bookmark-tabcontent contacts-tabs">
          <Card className="email-body">
            <div className="ps-0">
              <TabComponent activeTab={activeTab} users={users}  />
            </div>
          </Card>
        </div>
      </Col>
    </Fragment>
  );
};

export default LeftContact;
import React, { Fragment, useCallback, useState } from 'react';
import { Row, Col, Card, CardHeader, CardBody, TabContent, TabPane } from 'reactstrap';
import { Personal } from '../../../Constant';
import { H5 } from '../../../AbstractElements';
import ListNewContact from './ListNewContact';
import ContactDetailsClass from './ContactDetail';
import UpdateUser from './UpdateUser';

const PersonalTab = ({ users }) => {
  const [selectedUser, setSelectedUser] = useState();
  const [editing, setEditing] = useState(false);
  const [editdata, setEditData] = useState({});

  const userCallback = useCallback((user) => {
    setSelectedUser(user);
  }, []);

  const userEditCallback = useCallback((edit, usersData) => {
    setEditData(usersData);
    setSelectedUser(usersData);
    setEditing(edit);
  }, []);

  return (
    <Fragment>
      <Card className="mb-0">
        <CardHeader className="d-flex">
          <H5 attrH5={{ className: 'mb-0' }}>{Personal}</H5>
          <span className="f-14 pull-right mt-0">{`${users.length} Contacts`}</span>
        </CardHeader>
        <CardBody className="p-0">
          <Row className="list-persons" id="addcon">
            <ListNewContact users={users} userCallback={userCallback} />
            <Col xl="8" md="7" className='xl-60'>
              {editing ?
                <UpdateUser  editdata={editdata}  userEditCallback={userEditCallback} />
                :
                <TabContent activeTab={0}>
                  <TabPane tabId={0}>
                    <ContactDetailsClass  selectedUser={selectedUser ? selectedUser : users[0]} userEditCallback={userEditCallback} />
                  </TabPane>
                </TabContent>
              }
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default PersonalTab;
import { H5 } from '../../../AbstractElements';
import { Orgenization } from '../../../Constant';
import NavOrg from './OrganiceTab/NavOrg';
import TabOrg from './OrganiceTab/TabOrg';
import { Row, Col, Card, CardHeader, CardBody, TabContent } from 'reactstrap';
import React, { Fragment, useCallback, useState } from 'react';

const OrgenizationTab = () => {
  const [orgactiveTab, setOrgActiveTab] = useState('1');
  const callback = useCallback((tab) => {
    setOrgActiveTab(tab);
  }, []);

  return (
    <Fragment>
      <Card className="mb-0">
        <CardHeader className="d-flex">
          <H5 attrH5={{ className: 'mb-0' }}>{Orgenization}</H5>
          <span className="f-14 pull-right mt-0">{'10 Contacts'}</span>
        </CardHeader>
        <CardBody className="p-0">
          <Row className="list-persons">
            <NavOrg callback={callback} />
            <Col xl="8" md="7" className='xl-50'>
              <TabContent activeTab={orgactiveTab}>
                <TabOrg />
              </TabContent>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default OrgenizationTab;
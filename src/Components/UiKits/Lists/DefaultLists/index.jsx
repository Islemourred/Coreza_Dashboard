import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { LI, UL } from '../../../../AbstractElements';
import { DefaultList } from '../../../../Constant';
import HeadingCommon from '../../../../Common/Component/HeadingCommon';

const DefaultLists = () => {
  return (
    <Col sm="12" lg="6">
      <Card>
        <HeadingCommon Heading={DefaultList} CardHeaderClassName="pb-0" />
        <CardBody>
          <UL>
            <LI>Cras justo odio</LI>
            <LI>Dapibus ac facilisis in</LI>
            <LI>Morbi leo risus</LI>
            <LI>Porta ac consectetur ac</LI>
            <LI>Vestibulum at eros</LI>
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultLists;

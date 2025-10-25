import { H5, P } from '../../../AbstractElements';
import { NoDataFound } from '../../../Constant';
import React, { Fragment } from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';

const NoDataFoundClass = ({ title }) => {
  return (
    <Fragment>
      <Card className="mb-0">
        <CardHeader className="d-flex">
          <H5 attrH5={{ className: 'mb-0' }}>{title}</H5>
          <span className="f-14 pull-right mt-0">{'10 Contacts'}</span>
        </CardHeader>
        <CardBody>
          <P>{NoDataFound} </P>
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default NoDataFoundClass;
import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { H4 } from '../../../../AbstractElements';

const CommonHeaderClass = (props) => {
  return (
    <Card>
      <CardHeader className="pb-0">
        <H4>{props.title}</H4>
      </CardHeader>
      <CardBody>
        <pre className="helper-classes">
          {props.children}
        </pre>
      </CardBody>
    </Card>
  );
};

export default CommonHeaderClass;
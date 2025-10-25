import { H4 } from '../../../../AbstractElements';
import Commen from './Commen';
import React, { Fragment, useState } from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';

const Vertical = () => {
    const [val, setVal] = useState(80);
    const vertical = true;
    return (
      <Fragment>
        <Col sm="12" md="6">
          <Card>
            <CardHeader className="pb-0">
              <H4 attrH4={{ className: 'card-title' }}>Vertical Touchspin</H4><span>Add  <code>.touchspin-vertical</code>class for vertical touchspin input group.</span>
            </CardHeader>
            <CardBody>
              <Commen val={val} setVal={setVal} vertical={vertical} />
            </CardBody>
          </Card>
        </Col>
      </Fragment>
    );
};
export default Vertical;
import React, { Fragment, useState } from 'react';
import { Card, CardBody, CardHeader, Col, Input } from 'reactstrap';
import { Btn, H4 } from '../../../../AbstractElements';

const StepValues = () => {
  const [val, setVal] = useState(20);
  const onChangeHandel = (event) => {
    setVal(event.target.value);
  };
  const Minus = () => {
    setVal(val - 10);
  };
  const Addition = () => {
    setVal(val + 10);
  };
  return (
    <Fragment>
      <Col sm="12" md="6">
        <Card>
          <CardHeader className="pb-0">
            <H4 attrH4={{ className: 'card-title' }}>Touchspin steps</H4><span>Add <code>.data-bts-step="VALUE"</code> attribute
              for increament and decrement steps to touchspin input group.</span>
          </CardHeader>
          <CardBody>
            <div className="input-group bootstrap-touchspin">
              <Btn attrBtn={{ color: 'primary', className: 'bootstrap-touchspin-down', onClick: Minus }}><i className="fa fa-minus"></i>
              </Btn>
              <Input className="touchspin" type="text" value={val} onChange={e => onChangeHandel(e)} />
              <Btn attrBtn={{ color: 'primary btn-square', className: 'bootstrap-touchspin-up', onClick: Addition }}><i className="fa fa-plus"></i></Btn>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default StepValues;
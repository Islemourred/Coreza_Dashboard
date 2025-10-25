import React, { Fragment, useState } from 'react';
import { Card, CardBody, CardHeader, Col, Input } from 'reactstrap';
import { Btn, H4 } from '../../../../AbstractElements';

const DropdownTouchspin = () => {
  const [val, setVal] = useState(69);
  const Minus = () => {
    setVal(val - 0.25);
  };
  const Addition = () => {
    setVal(val + 0.25);
  };
  const onChangeHandel = (event) => {
    setVal(event.target.value);
  };
  return (
    <Fragment>
      <Col sm="12" md="6">
        <Card>
          <CardHeader className="pb-0">
            <H4 attrH4={{ className: 'card-title' }}>Touchspin With Dropdown</H4><span>Use <code>data-bts-prefix & data-bts-postfix</code>attribute to set Prefix and Postfix to touchspin input with button.</span>
          </CardHeader>
          <CardBody>
            <div className="input-group bootstrap-touchspin">
              <Btn attrBtn={{ color: 'primary', className: 'bootstrap-touchspin-down', onClick: Minus }}><i className="fa fa-minus"></i>
              </Btn>
              <Input className="touchspin" type="text" value={val} onChange={e => onChangeHandel(e)} />
              <Btn attrBtn={{ color: 'primary btn-square', className: 'bootstrap-touchspin-up', onClick: Addition }}><i className="fa fa-plus"></i></Btn>
              <div className="dropdown-basic">
                <div className="dropdown">
                  <div className="btn-group mb-0 me-0">
                    <Btn attrBtn={{ color:'light', className: 'dropbtn text-dark', type: 'button' }}> Action < span > <i className="icofont icofont-arrow-down"></i></span></Btn>
                    <div className="dropdown-content"><a href="#javascript">Action</a><a href="#javascript">Another Action</a><a href="#javascript">Something Else Here</a>
                      <div className="dropdown-divider"></div><a href="#javascript">Separated Link </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col >
    </Fragment >
  );
};
export default DropdownTouchspin;
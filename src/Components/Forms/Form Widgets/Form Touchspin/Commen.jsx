import React, { Fragment } from 'react';
import { Input} from 'reactstrap';
import { Btn } from '../../../../AbstractElements';

const Commen = ({ decimal, val, step, setVal, vertical, show }) => {
  const Minus = () => {
    if (decimal) {
      setVal(val - 0.25);
    } else if (step) {
      setVal(val - 10);
    } else {
      setVal(val - 1);
    }
    setVal(val - 1);
  };
  const Addition = () => {
    if (decimal) {
      setVal(val + 0.25);
    } else if (step) {
      setVal(val + 10);
    } else {
      setVal(val + 1);
    }
    setVal(val + 1);
  };
  return (
    <Fragment>

      {vertical
        ?
        <Input className="touchspin text-center" type="number" name="quantity" placeholder="80"
          style={{ display: 'block' }} />
        :
        <div className="input-group bootstrap-touchspin">
          <Btn attrBtn={{ color: 'primary', className: 'bootstrap-touchspin-down', onClick: Minus }}><i className="fa fa-minus"></i>
          </Btn>

          <Input className="touchspin text-center" type="text" name="quantity"
            style={{ display: 'block' }} defaultValue={val} />

          <Btn attrBtn={{ color: 'primary btn-square', className: 'bootstrap-touchspin-up', onClick: Addition }}>
            <i className="fa fa-plus"></i>
          </Btn>
        
        </div>}
    </Fragment >
  );
};
export default Commen;
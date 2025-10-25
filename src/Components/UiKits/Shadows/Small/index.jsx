import { Fragment } from 'react';
import { Col } from 'reactstrap';
import { H5, H6 } from '../../../../AbstractElements';
import { SmallShadow } from '../../../../Constant';

const SmallShadows = () => {
  return (
    <Fragment>
      <Col xs="12">
        <H6 attrH6={{ className: 'sub-title mt-0' }} >{SmallShadow}</H6>
      </Col>
      <Col sm="4">
        <div className="shadow-sm shadow-showcase p-25 text-center">
          <H5 attrH5={{ className: 'm-0 f-18' }} >{SmallShadow}</H5>
        </div>
      </Col>
      <Col sm="4">
        <div className="shadow-sm shadow-showcase p-25 text-center">
          <H5 attrH5={{ className: 'm-0 f-18' }} >{SmallShadow}</H5>
        </div>
      </Col>
      <Col sm="4">
        <div className="shadow-sm shadow-showcase p-25 text-center">
          <H5 attrH5={{ className: 'm-0 f-18' }} >{SmallShadow}</H5>
        </div>
      </Col>
    </Fragment>
  );
};

export default SmallShadows;
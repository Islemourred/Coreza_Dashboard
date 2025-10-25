import { Fragment } from 'react';
import { Col } from 'reactstrap';
import { H5, H6 } from '../../../../AbstractElements';
import { LargerShadow } from '../../../../Constant';

const LargeShadows = () => {
  return (
    <Fragment>
      <Col xs="12" >
        <H6 attrH6={{ className: 'sub-title mt-0' }} >{LargerShadow}</H6>
      </Col>
      <Col sm="4">
        <div className="shadow-lg p-25 shadow-showcase text-center">
          <H5 attrH5={{ className: 'm-0 f-18' }} >{LargerShadow}</H5>
        </div>
      </Col>
      <Col sm="4">
        <div className="shadow-lg p-25 shadow-showcase text-center">
          <H5 attrH5={{ className: 'm-0 f-18' }} >{LargerShadow}</H5>
        </div>
      </Col>
      <Col sm="4">
        <div className="shadow-lg p-25 shadow-showcase text-center">
          <H5 attrH5={{ className: 'm-0 f-18' }} >{LargerShadow}</H5>
        </div>
      </Col>
    </Fragment>
  );
};

export default LargeShadows;
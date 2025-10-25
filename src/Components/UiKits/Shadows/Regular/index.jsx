import { Fragment } from 'react';
import { Col } from 'reactstrap';
import { H5, H6 } from '../../../../AbstractElements';
import { RegularShadow } from '../../../../Constant';

const RegularShadows = () => {
  return (
    <Fragment>
      <Col xs="12" >
        <H6 attrH6={{ className: 'sub-title mt-0' }} >{RegularShadow}</H6>
      </Col>
      <Col sm="4">
        <div className="shadow shadow-showcase p-25 text-center">
          <H5 attrH5={{ className: 'm-0 f-18' }} >{RegularShadow}</H5>
        </div>
      </Col>
      <Col sm="4">
        <div className="shadow shadow-showcase p-25 text-center">
          <H5 attrH5={{ className: 'm-0 f-18' }} >{RegularShadow}</H5>
        </div>
      </Col>
      <Col sm="4">
        <div className="shadow shadow-showcase p-25 text-center">
          <H5 attrH5={{ className: 'm-0 f-18' }} >{RegularShadow}</H5>
        </div>
      </Col>
    </Fragment>
  );
};

export default RegularShadows;
import { Fragment } from 'react';
import { Col } from 'reactstrap';
import { H5, H6 } from '../../../../AbstractElements';
import { NoShadow } from '../../../../Constant';

const NoShadows = () => {
  return (
    <Fragment>
      <Col xs="12">
        <H6 attrH6={{ className: 'sub-title mt-0' }} >{NoShadow}</H6>
      </Col>
      <Col sm="4" className='mb-0'>
        <div className="shadow-none shadow-showcase p-25 text-center">
          <H5 attrH5={{ className: 'm-0 f-18' }} >{NoShadow}</H5>
        </div>
      </Col>
      <Col sm="4" className='mb-0'>
        <div className="shadow-none shadow-showcase p-25 text-center">
          <H5 attrH5={{ className: 'm-0 f-18' }} >{NoShadow}</H5>
        </div>
      </Col>
      <Col sm="4" className='mb-0'>
        <div className="shadow-none shadow-showcase p-25 text-center">
          <H5 attrH5={{ className: 'm-0 f-18' }} >{NoShadow}</H5>
        </div>
      </Col>
    </Fragment>
  );
};

export default NoShadows;
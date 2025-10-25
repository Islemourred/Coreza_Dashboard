import { H3, H4, P, Image } from '../../../AbstractElements';
import { InvoiceHash, IssuedMay, PaymentDue } from '../../../Constant';
import login from '../../../assets/images/favicon/favicon.png';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Col, Media, Row } from 'reactstrap';

const InvoiceHeader = () => {
  return (
    <Fragment>
      <Row className="invo-header">
        <Col sm="6">
          <Media className='d-flex'>
            <div className="media-left flex-shrink-0">
              <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}>
                <Image attrImage={{ className: 'media-object img-60', src: `${login}`, alt: '' }}
                />
              </Link>
            </div>
            <Media body className="m-l-20 flex-grow-1">
              <H4 attrH4={{ className: 'media-heading f-w-600' }}>Tivo</H4>
              <P attrPara={{ className: 'mb-0' }}> hello@Tivo.in
                <br />
                <span>{'289-335-6503'}</span>
              </P>
            </Media>
          </Media>
        </Col>
        <Col sm="6">
          <div className="text-md-end text-xs-center">
            <H3>
              {InvoiceHash}
              <span className="counter">1069</span>
            </H3>
            <P attrPara={{ className: 'mb-0' }}>
              {IssuedMay}
              <span> 27, 2023</span>
              <br />
              {PaymentDue}{' '}
              <span> 15, 2023</span>
            </P>
          </div>
        </Col>
      </Row>
    </Fragment >
  );
};
export default InvoiceHeader;
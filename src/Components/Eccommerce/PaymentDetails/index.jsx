import CashonDelivery from './Cod';
import CreditCards from './CreditCard';
import DebitCards from './DebitCard';
import EMIs from './Emi';
import { Breadcrumbs } from '../../../AbstractElements';
import NetBankings from './NetBanking';
import { Container, Row } from 'reactstrap';
import React, { Fragment } from 'react';

const PaymentDetailContain = () => {
    return (
      <Fragment>
        <Breadcrumbs mainTitle="Payment Details" parent="Ecommerce" title="Payment Details" />
        <Container fluid={true} className="credit-card payment-details">
          <Row>
            <CreditCards />
            <DebitCards />
            <CashonDelivery />
            <EMIs />
            <NetBankings />
          </Row>
        </Container>
      </Fragment>
    );
};
export default PaymentDetailContain;
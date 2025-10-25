import {  getCartTotal } from '../../../Services/Ecommerce.service';
import {  Sub_total,  ProductName, Quantity, Price } from '../../../Constant';
import { H6, P, Breadcrumbs } from '../../../AbstractElements';
import InvoiceHeader from './InvoiceHeader';
import InvoiceDescription from './InvoiceDescription';
import PrintInvoice from './PrintInvoice';
import { Col, Label, Row, Table, Container, CardBody, Card } from 'reactstrap';
import React, { forwardRef, Fragment, useContext } from 'react';
import CartContext from '../../../Helper/cart';
import ProductContext from '../../../Helper/product';

const ItemDescription = forwardRef((props,ref)=> {
    const {cart}= useContext(CartContext);
    const { symbol } = useContext(ProductContext);
    return (
      <Fragment>
        <Breadcrumbs mainTitle="Invoice" parent="Ecommerce" title="Invoice" />
        <div ref={ref}>
        <Container className='invoice'>
          <Row>
            <Col sm="12">
              <Card>
                <CardBody >
                  <div>
                    <div>
                      <InvoiceHeader />
                      <InvoiceDescription />
                      <div className="table-responsive theme-scrollbar invoice-table" id="table">
                        <Table bordered striped>
                          <tbody>
                            <tr>
                              <td className="item">
                                <H6 attrH6={{ className: 'py-2 mb-0' }}>{ProductName}</H6>
                              </td>
                              <td className="quantity">
                                <H6 attrH6={{ className: 'py-2 mb-0' }}>{Quantity}</H6>
                              </td>
                              <td className="Rate">
                                <H6 attrH6={{ className: 'py-2 mb-0' }}>{Price}</H6>
                              </td>
                              <td className="subtotal">
                                <H6 attrH6={{ className: 'py-2 mb-0' }}>{Sub_total}</H6>
                              </td>
                            </tr>
                            {cart && cart.map((item) => {
                              return (
                                <tr key={item.id}>
                                  <td>
                                    <Label>{item.name}</Label>
                                    <P attrPara={{ className: 'mb-0' }}>{item.note}</P>
                                  </td>
                                  <td>
                                    <P attrPara={{ className: 'itemtext' }}>{item.qty}</P>
                                  </td>
                                  <td>
                                    <P attrPara={{ className: 'itemtext' }}>
                                      {symbol} {item.price} 
                                    </P>
                                  </td>
                                  <td>
                                    <p className="itemtext digits mb-0">{item.discountPrice}</p>
                                  </td>
                                </tr>
                              );
                            })}
                            <tr>
                              <td></td>
                              <td></td>
                              <td className='font-primary f-w-700'>Total</td>
                              <td className="payment">
                                <P attrPara={{ className: 'itemtext mb-0 font-primary f-w-700' }}>
                                  {symbol} {getCartTotal(cart)}
                                </P>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                      <PrintInvoice />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        </div>
      </Fragment>
    );
  }
)
export default ItemDescription;
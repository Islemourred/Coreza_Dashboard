import { Fragment } from 'react';
import React, { useContext } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import {  Btn, LI, P, UL } from '../../../AbstractElements';
import { Brand, Availability, AddToCart, BuyNow } from '../../../Constant';
import ProductContext from '../../../Helper/product';
import WishtListContext from '../../../Helper/wishlist';
import SocialIcons from './socialIcons';
import StarRatings from './StarRating';

const ProductDetails = () => {
  const { productItem, symbol } = useContext(ProductContext);
  const productss = {
    'price': productItem[0]?.price,
    'discountPrice': productItem[0]?.discountPrice,
    'discription': productItem[0]?.discription,
    'stock': productItem[0]?.stock
  };
  const history = useNavigate();
  const { addToWishList } = useContext(WishtListContext);
  const singleItem = productItem;
  const addWishList = (product) => {
    addToWishList(product);
    history(`${process.env.PUBLIC_URL}/ecommerce/wishlist`);
  };
  return (
    <Fragment>
      <Col xl="5" className="box-col-12 proorder-xl-3 dash-xl-100">
        <Card>
          <CardBody>
            <div className="pro-group pt-0">
              <StarRatings />
              <div className="product-price">{symbol}{productss?.price}
                <del>{symbol}{productss?.discountPrice}</del>
              </div>
              <div className='color-selector'>
                <UL attrUL={{ className: 'simple-list product-color d-flex flex-row' }}>
                  <LI attrLI={{ className: 'White' }}></LI>
                  <LI attrLI={{ className: 'bg-primary ms-1' }}></LI>
                  <LI attrLI={{ className: 'bg-secondary ms-1' }}></LI>
                  <LI attrLI={{ className: 'bg-success ms-1' }}></LI>
                  <LI attrLI={{ className: 'bg-info ms-1' }}></LI>
                  <LI attrLI={{ className: 'bg-warning ms-1' }}></LI>
                </UL>
              </div>
              <Link to={`${process.env.PUBLIC_URL}/ecommerce/checkout`}>
                <Btn attrBtn={{ color: 'none', className: 'btn btn-warning mt-0' }}>
                  <i className="fa fa-shopping-cart me-2"></i>{BuyNow}</Btn></Link> </div>
            <div className="pro-group">
              <P attrPara={{ className: 'mb-0' }}>{productss.discription}</P></div><div className="pro-group">
              <Row>
                <Col md="6">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <b>{Availability} &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</b></td>
                        <td className="txt-success"> {productss.stock} </td>
                      </tr>
                      <tr>
                        <td>
                          <b>{Brand} &nbsp;&nbsp;&nbsp;:</b></td>
                        <td>{'Pixelstrap'}</td>
                      </tr>
                    </tbody>
                  </table>
                </Col>
                <Col md="6">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <b>{'Seller'} &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</b></td>
                        <td>{'ABC'}</td>
                      </tr>
                      <tr>
                        <td>
                          <b>{'Fabric'}&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</b></td>
                        <td>{'Cotton'}</td>
                      </tr>
                    </tbody>
                  </table>
                </Col>
              </Row>
            </div><SocialIcons />
            <div className="pro-group pb-0">
              <div className="pro-shop">
                <Link to={`${process.env.PUBLIC_URL}/ecommerce/cart`} className="btn btn-primary m-r-10 mt-1">
                    <i className="fa fa-shopping-basket me-2"></i>{AddToCart}</Link>
                <Btn attrBtn={{ color: 'danger', className: 'btn btn-danger mt-1', onClick: () => addWishList(singleItem) }}>
                  <i className="fa fa-heart me-2"></i>{'Add To WishList'}
                </Btn>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment >
  );
};
export default ProductDetails;
import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Modal, Media, Col, InputGroup, InputGroupText, Input, Row } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Btn, H4, H6, LI, P, UL } from '../../../AbstractElements';
import { ProductDetails, Quantity, AddToCart, ViewDetails, ProductSizeArray } from '../../../Constant';
import CartContext from '../../../Helper/cart';
import ProductContext from '../../../Helper/product';
import { dynamicImage } from '../../../Services';

const ProductModal = (props) => {
  const { value = '', dataid = '', setOpenModal = '' } = props;
  const [open, setOpen] = useState(value);// eslint-disable-next-line
  const [stock, setStock] = useState('');
  const { addToCart } = useContext(CartContext);
  const { productItem, symbol } = useContext(ProductContext);
  const [quantity, setQuantity] = useState(1);
  const [singleProduct, setSingleProduct] = useState([]);
  useEffect(() => {
    productItem.forEach((product, i) => {
      if (product.id === dataid) {
        setSingleProduct(product);
      }
    });// eslint-disable-next-line
  }, []);
  const changeQty = (e) => {
    setQuantity(parseInt(e.target.value));
  };
  const plusQty = () => {
    if (quantity >= 1) {
      setQuantity(quantity + 1);
    } else {
      setStock('Out of Stock !');
    }
  };
  const minusQty = () => {
    if (quantity > 1) {
      setStock('InStock');
      setQuantity(quantity - 1);
    }
  };
  const onCloseModal = () => {
    setOpen(false);
    setOpenModal(false);
  };
  const history = useNavigate();
  const AddToCarts = (item, quantity) => {
    addToCart(item, quantity);
    history(`${process.env.PUBLIC_URL}/ecommerce/cart`);
  };
  return (
    <Fragment>
      <Modal className="modal-dialog modal-lg modal-dialog-centered" modalClassName="product-box" isOpen={open}>
        <div className="modal-header">
          <Row>
            <Col lg="6">
              <Media className="img-fluid"
                src={singleProduct.img && dynamicImage(singleProduct.img)} alt="" />
            </Col>
            <Col lg="6" className="text-start">
              <div className='product-details'>
                <H4>{singleProduct.category}</H4>
                <div className="product-price">
                  {symbol}{singleProduct.price}
                  <del>{symbol}{singleProduct.discountPrice}</del>
                </div>
                <div className="product-view">
                  <H6 attrH6={{ className: 'f-w-600' }}>{ProductDetails}</H6>
                  <P attrPara={{ className: 'mb-0' }}>{singleProduct.discription}</P>
                </div>
                <div className="product-size">
                  <UL attrUl={{ className: 'simple-list' }}>{ProductSizeArray.map((items, i) => <LI key={i}>
                    <Btn attrBtn={{ color: 'outline-light', type: 'button', databsoriginaltitle: '', title: '' }}>{items}</Btn></LI>)}
                  </UL>
                </div>
                <div className="product-qnty">
                  <H6 attrH6={{ className: 'f-w-600' }}>{Quantity}</H6>
                  <fieldset>
                    <InputGroup>
                      <Btn attrBtn={{ color: 'primary', className: 'bootstrap-touchspin-down', onClick: minusQty }}><i className="fa fa-minus"></i></Btn>
                      <InputGroupText className="bootstrap-touchspin-prefix" style={{ display: 'none' }}></InputGroupText>
                      <Input className="touchspin text-center" type="text" name="quantity" value={quantity}
                        onChange={(e) => changeQty(e)} />
                      <Btn attrBtn={{ color: 'primary', className: 'bootstrap-touchspin-up', onClick: plusQty }}><i className="fa fa-plus"></i></Btn>
                    </InputGroup>
                  </fieldset>
                  <div className="addcart-btn">
                    <Link to={`${process.env.PUBLIC_URL}/ecommerce/cart`} className="btn btn-primary me-2" onClick={() => AddToCarts(singleProduct, quantity)}>{AddToCart}</Link>
                    <Link
                      to={`${process.env.PUBLIC_URL}/ecommerce/product-page/1`}
                      className="btn btn-primary">{ViewDetails}
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <Btn attrBtn={{ color: 'transprant', className: 'btn-close', onClick: onCloseModal, type: 'button', databsdismiss: 'modal', arialabel: 'Close' }}></Btn>
      </Modal>
    </Fragment>
  );
};
export default ProductModal;
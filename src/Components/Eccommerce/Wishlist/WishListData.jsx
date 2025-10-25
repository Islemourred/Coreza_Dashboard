import React, { Fragment, useContext } from 'react';
import { useNavigate } from 'react-router';
import { Col } from 'reactstrap';
import ProductContext from '../../../Helper/product';
import { Price, MoveToCarts} from '../../../Constant';
import CartContext from '../../../Helper/cart';
import { Btn, H6, Image } from '../../../AbstractElements';
import { Link } from 'react-router-dom';
import { dynamicImage } from '../../../Services';
import Rating from 'react-rating';

const WishListData = () => {
  const history = useNavigate();
  const { productItem, symbol } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const MoveToCart = (product, qty) => {
    addToCart(product, qty);
    history(`${process.env.PUBLIC_URL}/ecommerce/cart`);
  };
  const  rating =4 
  return (
    <Fragment>
      {productItem.map((item) => {
        return (
          <Col xl="2" lg="3" md="4" sm="6" key={item.id}>
            <div className="prooduct-details-box">
              <div className='d-block'>
                <Image
                  attrImage={{
                    className: 'align-self-center img-fluid',
                    src: `${dynamicImage(item.img)}`,
                    alt: '#',
                  }}
                />
                <div className='flex-grow-1'>
                  {' '}
                  <div className="product-name">
                    {' '}
                    <Link to={`${process.env.PUBLIC_URL}/ecommerce/cart`}><H6>{item.name}</H6></Link>
                  </div>
                  <div className="rating">
                    <Rating  style={{ fontSize: '14px' }} initialRating={rating} emptySymbol="fa fa-star-o" fullSymbol="fa fa-star" ></Rating>
                  </div>
                  <div className="price">
                    {Price}
                    <span>
                      : {item.price}
                      {symbol}
                    </span>
                  </div>
                  <div className="avaiabilty">
                    <div className={`${item.stock === 'In stock' ? 'text-success': 'text-danger' }`}>{item.stock}</div>
                  </div>
                  <Btn
                    attrBtn={{
                      color: 'primary',
                      size: 'xs',
                      onClick: () => MoveToCart(item, 1),
                    }}
                  >
                    {MoveToCarts}
                  </Btn>
                </div>
              </div>
            </div>
          </Col>
        );
      })}
    </Fragment>
  );
};
export default WishListData;
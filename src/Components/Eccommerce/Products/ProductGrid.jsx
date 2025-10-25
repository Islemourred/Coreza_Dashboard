import  {  useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { Row, Card } from 'reactstrap';
import ProductContext from '../../../Helper/product';
import CartContext from '../../../Helper/cart';
import { H4, LI, P, Image, UL, Btn } from '../../../AbstractElements';
import FilterContext from '../../../Helper/filter';
import { getVisibleproducts } from '../../../Services/Ecommerce.service';
import { dynamicImage } from '../../../Services';
import ProductModal from './ProductModal';

const ProductGrid = () => {
  const { addToCart } = useContext(CartContext);
  const { productItem, symbol } = useContext(ProductContext);
  const [dataid, setDataid] = useState();
  const [openModal, setOpenModal] = useState(false);
  const history = useNavigate();
  const onClickHandle = (i) => {
    setOpenModal(true);
    setDataid(i.id);
  };
  const AddToCarts = (item, quantity) => {
    addToCart(item, quantity);
    history(`${process.env.PUBLIC_URL}/ecommerce/cart`);
  };

  const { listView,filter} = useContext(FilterContext);
  const products = getVisibleproducts(productItem, filter);
  const { colClassName} = useContext(FilterContext);

  return (
      <div className={`product-wrapper-grid ${listView ?"list-view":""}`}>
        <Row className="gridRow">
          {products && products.map((item,i) => 
            (
              <div className={`${listView?" col-xl-3 col-lg-4 col-sm-6 col-xl-12":` col-xl-${colClassName}  col-sm-${colClassName}`}`} key={i}>
                <Card >
                  <div className="product-box">
                    <div className="product-img">
                      {(item.status !== "none") &&
                        <div className={item.ribbonClassName}>
                          {item.status}
                        </div>}
                      <Image attrImage={{ className: 'img-fluid', src: `${dynamicImage(item.img)}`, alt: '' }} />
                      <div className="product-hover">
                        <UL attrUL={{ className: 'simple-list d-flex flex-row' }}>
                          <LI>
                            <Btn attrBtn={{ color: 'transprant', className: 'btn', type: 'button', onClick: () => AddToCarts(item, 1) }}><i className="icon-shopping-cart"></i></Btn></LI>
                          <LI>
                            <Btn attrBtn={{ color: 'transprant', onClick: () => onClickHandle(item), className: 'btn', type: 'button', datatoggle: 'modal', datatarget: '#exampleModalCenter' }}><i className="icon-eye" onClick={() => setOpenModal(true)}></i>
                            </Btn>
                          </LI>
                        </UL>
                      </div>
                    </div>
                    <div className="product-details">
                      <Link to={`${process.env.PUBLIC_URL}/ecommerce/productpage`}>
                        <H4>{item.name}</H4>
                      </Link>
                      <P>{item.note}</P>
                      <div className="product-price">{symbol}{item.price}
                        <del>{symbol}{item.discountPrice}</del>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            )
          )}
          {openModal && <ProductModal value={openModal} setOpenModal={setOpenModal} dataid={dataid} />}
        </Row>
      </div>
  );
};
export default ProductGrid;
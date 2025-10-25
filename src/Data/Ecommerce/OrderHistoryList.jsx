import product1 from '../../assets/images/product/1.png';
import product2 from '../../assets/images/product/2.png';
import product3 from '../../assets/images/product/3.png';
import product4 from '../../assets/images/product/4.png';
import product15 from '../../assets/images/product/15.png';
import product14 from '../../assets/images/product/14.png';
import product11 from '../../assets/images/product/11.png';
import product12 from '../../assets/images/product/12.png';
import product13 from '../../assets/images/product/13.png';
import { H6, Image } from '../../AbstractElements';
import React from 'react';


export const OrderHistoryData = [
  {
    Product: <Image attrImage={{ className: 'img-fluid img-30', src: product1, alt: '' }}></Image>,
    Product_Name: <div className="product-name"><a href="#javascript">Party Wear Gown</a>
      <div className="order-process"><span className="order-process-circle"></span>Processing</div>
    </div>,
    Size: 'M',
    Color: 'Red',
    Article_number: '01024224',
    Units: '2',
    Price: '$25'
  },
  {
    Product: <Image attrImage={{ className: 'img-fluid img-30', src: product2, alt: '' }}></Image>,
    Product_Name: <div className="product-name"><a href="#javascript">Ladies Handbag</a>
      <div className="order-process"><span className="order-process-circle"></span>Processing</div>
    </div>,
    Size: 'L',
    Color: 'Brown',
    Article_number: '2024242',
    Units: '1',
    Price: '$85'
  },
  {
    Product: <Image attrImage={{ className: 'img-fluid img-30', src: product3, alt: '' }}></Image>,
    Product_Name: <div className="product-name"><a href="#javascript">Fancy Ladies Jacket</a>
      <div className="order-process"><span className="order-process-circle"></span>Processing</div>
    </div>,
    Size: 'XL',
    Color: 'Pink',
    Article_number: '875554',
    Units: '3',
    Price: '$89'
  },
  {
    Product: <Image attrImage={{ className: 'img-fluid img-30', src: product4, alt: '' }}></Image>,
    Product_Name: <div className="product-name"><a href="#javascript">Man shoes</a>
      <div className="order-process"><span className="order-process-circle shipped-order"></span>Shipped</div>
    </div>,
    Size: 'M',
    Color: 'Brown',
    Article_number: '45645643',
    Units: '1',
    Price: '$35'
  },
  {
    Product: <Image attrImage={{ className: 'img-fluid img-30', src: product11, alt: '' }}></Image>,
    Product_Name: <div className="product-name"><a href="#javascript">Slipper</a>
      <div className="order-process"><span className="order-process-circle shipped-order"></span>Shipped</div>
    </div>,
    Size: 'XXL',
    Color: 'Brown',
    Article_number: '94864563',
    Units: '1',
    Price: '$50'
  },
  {
    Product: <Image attrImage={{ className: 'img-fluid img-30', src: product12, alt: '' }}></Image>,
    Product_Name: <div className="product-name"><a href="#javascript">Ladies Hills</a>
      <div className="order-process"><span className="order-process-circle shipped-order"></span>Shipped</div>
    </div>,
    Size: 'XXXL',
    Color: 'Pink',
    Article_number: '6466645',
    Units: '2',
    Price: '$285'
  },
  {
    Product: <Image attrImage={{ className: 'img-fluid img-30', src: product13, alt: '' }}></Image>,
    Product_Name: <div className="product-name"><a href="#javascript">Fancy watch</a>
      <div className="order-process"><span className="order-process-circle shipped-order"></span>Shipped</div>
    </div>,
    Size: 'M',
    Color: 'Brown',
    Article_number: '555758',
    Units: '3',
    Price: '$245'
  },
  {
    Product: <Image attrImage={{ className: 'img-fluid img-30', src: product14, alt: '' }}></Image>,
    Product_Name: <div className="product-name"><a href="#javascript">Smart Watch</a>
      <div className="order-process"><span className="order-process-circle cancel-order"></span>Cancelled</div>
    </div>,
    Size: 'S',
    Color: 'Black',
    Article_number: '1245554',
    Units: '3',
    Price: '$235'
  },
  {
    Product: <Image attrImage={{ className: 'img-fluid img-30', src: product15, alt: '' }}></Image>,
    Product_Name: <div className="product-name"><a href="#javascript">IPhone 12</a>
      <div className="order-process"><span className="order-process-circle cancel-order"></span>Cancelled</div>
    </div>,
    Size: 'R',
    Color: 'Blue',
    Article_number: '123456',
    Units: '2',
    Price: '$55'
  },
  {
    Product: <Image attrImage={{ className: 'img-fluid img-30', src: product1, alt: '' }}></Image>,
    Product_Name: <div className="product-name"><a href="#javascript">Party Wear Gown</a>
      <div className="order-process"><span className="order-process-circle"></span>Processing</div>
    </div>,
    Size: 'L',
    Color: 'Red',
    Article_number: '456879',
    Units: '1',
    Price: '$5'
  },
];
export const OrderHistoryColumns = [
  {
    name: <H6>Product</H6>,
    selector: (row) => row.Product,
    sortable: true,
    center: true,
  },
  {
    name: <H6>Product Name</H6>,
    selector: (row) => row.Product_Name,
    sortable: true,
    center: true,
    wrap: true
  },
  {
    name: <H6>Size</H6>,
    selector: (row) => row.Size,
    sortable: true,
    center: true,
  },
  {
    name: <H6>Color</H6>,
    selector: (row) => row.Color,
    sortable: true,
    center: true,
  },
  {
    name: <H6>Article number</H6>,
    selector: (row) => row.Article_number,
    sortable: true,
    center: true,
  },
  {
    name: <H6>Units</H6>,
    selector: (row) => row.Units,
    sortable: true,
    center: true,
  },
  {
    name: <H6>Price</H6>,
    selector: (row) => row.Price,
    sortable: true,
    center: true,
  },
];
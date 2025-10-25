import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Context from './index';
import { ProductsApi } from '../../api';

const ProductProvider = (props) => {
  const [productItem, setProductItem] = useState([]);
  const symbol = '$';
  const [singleItem, setSingleItems] = useState([]);
  const [isVertical, setIsVertical] = useState(false);

  const fetchProducts = async () => {
    try {
      await axios.get(ProductsApi).then((resp) => {
        setProductItem(resp.data);
      });
    } catch (error) {
    }
  };
  const getSingleItem = () => {
    setSingleItems(productItem[0]);
  };
  useEffect(() => {
    fetchProducts();
    getSingleItem();
    // eslint-disable-next-line
  }, [setProductItem]);

  return (
    <Context.Provider value={{ ...props, productItem, singleItem, symbol, isVertical, setIsVertical }}>
      {props.children}
    </Context.Provider>
  );
};

export default ProductProvider;

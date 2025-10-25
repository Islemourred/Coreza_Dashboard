import {  useContext } from 'react';
import { Grid, List } from 'react-feather';
import { Col, Row } from 'reactstrap';
import { H6, LI, UL } from '../../../AbstractElements';
import { Filters } from '../../../Constant';
import FilterContext from '../../../Helper/filter';
import Sorting from './Sorting';

const ProductTotal = () => {
  const { IsFilter, setIsFilter,setListView, setColClassName } = useContext(FilterContext);
  const onClickFilter = () => {
      setIsFilter(!IsFilter);
  };

  const gridLayout = () => {
    setListView(false)
    setColClassName(3)
  };
  const listLayout = () => setListView(true)
  const LayoutView = (layoutColumns) => setColClassName(layoutColumns)
  
  return (
      <Row className="m-b-10">
        <Col md="3" sm="2" className="products-total">
          <div className="square-product-setting d-inline-block">
            <a className="icon-grid grid-layout-view" onClick={gridLayout} href="#javascript">
              <Grid /></a>
          </div>
          <div className="square-product-setting d-inline-block ms-2">
            <a className="icon-grid m-0 list-layout-view" onClick={listLayout} href="#javascript" >
              <List /></a>
          </div>
          <span className="d-none-productlist filter-toggle" onClick={onClickFilter}>
            <H6 attrH6={{ className: 'mb-0' }}>{Filters}
              <span className="ms-2">
                <i className="toggle-data fa fa-chevron-down"></i>
              </span>
            </H6>
          </span>
          <div className="grid-options d-inline-block">
            <UL attrUL={{ className: 'simple-list', as: 'ul' }} >
              <LI>
                <a className="product-2-layout-view" onClick={() => LayoutView(6)} href="#javascript" >
                  <span className="line-grid line-grid-1 bg-primary"></span>
                  <span className="line-grid line-grid-2 bg-primary"></span>
                </a></LI>
              <LI>
                <a className="product-3-layout-view" onClick={() => LayoutView(4)} href="#javascript" >
                  <span className="line-grid line-grid-3 bg-primary"></span>
                  <span className="line-grid line-grid-4 bg-primary"></span>
                  <span className="line-grid line-grid-5 bg-primary"></span>
                </a></LI>
              <LI>
                <a className="product-4-layout-view" onClick={() => LayoutView(3)} href="#javascript" >
                  <span className="line-grid line-grid-6 bg-primary"></span>
                  <span className="line-grid line-grid-7 bg-primary"></span>
                  <span className="line-grid line-grid-8 bg-primary"></span>
                  <span className="line-grid line-grid-9 bg-primary"></span>
                </a> </LI>
              <LI>
                <a className="product-6-layout-view" onClick={() => LayoutView(2)} href="#javascript">
                  <span className="line-grid line-grid-10 bg-primary"></span>
                  <span className="line-grid line-grid-11 bg-primary"></span>
                  <span className="line-grid line-grid-12 bg-primary"></span>
                  <span className="line-grid line-grid-13 bg-primary"></span>
                  <span className="line-grid line-grid-14 bg-primary"></span>
                  <span className="line-grid line-grid-15 bg-primary"></span>
                </a></LI>
            </UL>
          </div>
        </Col>
        <Sorting />
      </Row>
  );
};
export default ProductTotal;
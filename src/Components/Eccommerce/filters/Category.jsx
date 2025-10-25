import { Fragment, useContext } from 'react';
import { Input, Label } from 'reactstrap';
import { H6, LI, UL } from '../../../AbstractElements';
import { Brand, Colors } from '../../../Constant';
import { getBrands, getColors, getGender, } from '../../../Services/Ecommerce.service';
import FilterContext from '../../../Helper/filter';
import ProductContext from '../../../Helper/product';
import ProductFilter from './ProductFilter';

const Category = () => {
  const { productItem } = useContext(ProductContext);
  const { filter, filterColor, filterCategory, filterBrand, } = useContext(FilterContext);
  const colors = getColors(productItem);
  const colorHandle = (event, color) => {
    var elems = document.querySelectorAll('.color-selector ul li');
    [].forEach.call(elems, function (el) {
        el.classList.remove('active');
    });
    event.target.classList.add('active');
    filterColor(color)
};
  const brands = getBrands(productItem);
  const gender = getGender(productItem);
  const clickBrandHendle = (event, brands) => {
    var index = brands.indexOf(event.target.value);
    if (event.target.checked === true)
      brands.push(event.target.value);
    else
      brands.splice(index, 1);
    filterBrand(brands);
  };
  const ClickCategory = (result) => {
    filterCategory(result);
  };
  return (
    <Fragment>
      <div className="product-filter">
        <H6 className="f-w-600">Category</H6>
        <div className="checkbox-animated mt-0" >
          {gender.map((item, i) => {
            return (
              <Label className="d-block" key={i}>
                <Input className="radio_animated" type="radio" name="name" value={item} onClick={(e) => ClickCategory(item)} />{item}
              </Label>
            );
          })}
        </div>
      </div>
      <div className="product-filter">
        <H6 attrH6={{ className: 'f-w-600' }}>{Brand}</H6>
        <div className="checkbox-animated mt-0">
          {brands.map((brand, index) => {
            return (
              <Label className="d-block" key={index}>
                <Input className="checkbox_animated" onClick={(e) => clickBrandHendle(e, filter.brand)}
                  value={brand} defaultChecked={filter.brand.includes(brand) ? true : false} id={brand} type="checkbox" data-original-title="" title="" />
                {brand}
              </Label>
            );
          })}
        </div>
      </div>
      <div className="product-filter slider-product">
        <H6 attrH6={{ className: 'f-w-600' }}>{Colors}</H6>
        <div className="color-selector">
          <UL attrUL={{ className: 'simple-list d-flex flex-wrap flex-row' }}>
            {colors.map((color, i) => {
              return (
                <Fragment key={i}>
                  <LI attrLI={{ className: color, title: color, onClick: e => colorHandle(e, color) }}></LI> &nbsp;
                </Fragment>
              );
            })}
          </UL>
        </div >
      </div >
      <ProductFilter  />
    </Fragment >
  );
};

export default Category;
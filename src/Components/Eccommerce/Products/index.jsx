import React, { Fragment, useContext } from "react";
import { Container } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import FilterContext from "../../../Helper/filter";
import ProductFeatures from "./ProductFeatures";
import ProductGrid from "./ProductGrid";

const ProductContain = () => {
  const { sideBarOn } = useContext(FilterContext);

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Product" parent="Ecommerce" title="Product" />
      <Container
        fluid={true}
        className={`product-wrapper ${sideBarOn ? "sidebaron" : ""}`}
      >
        <div className="product-grid">
          <ProductFeatures />
          <ProductGrid />
        </div>
      </Container>
    </Fragment>
  );
};
export default ProductContain;

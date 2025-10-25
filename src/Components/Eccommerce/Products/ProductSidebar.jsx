import React, { Fragment, useContext, useState } from "react";
import { Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Row } from "reactstrap";
import { H6, Image } from "../../../AbstractElements";
import FilterContext from "../../../Helper/filter";
import Category from "../filters/Category";
import PrizeRange from "../filters/PrizeRange";
import banner from "../../../assets/images/ecommerce/banner.jpg";
import { Filters } from "../../../Constant";

const ProductSidebar = () => {
  const { filterSearchBy, IsFilter, sideBarOn, setSideBarOn } = useContext(FilterContext);
  const [searchKeyword, setSearchKeyword] = useState("");
  const onClickFilter = () => {
    setSideBarOn(!sideBarOn)
  };
  const handleSearchKeyword = (keyword) => {
    setSearchKeyword(keyword);
    filterSearchBy(searchKeyword);
  };
  return (
    <Fragment>
      <Row>
        <Col md="12">
          <div className="pro-filter-sec">
            <div className={`product-sidebar ${IsFilter ? "open" : ""}`}>
              <div className="filter-section">
                <Card>
                  <CardHeader>
                    <H6 attrH6={{ className: "mb-0 f-w-600" }}>
                      {Filters}
                      <span className="pull-right">
                        <i className="fa fa-chevron-down toggle-data" onClick={onClickFilter}></i>
                      </span>
                    </H6>
                  </CardHeader>
                  <div className="left-filter">
                    <CardBody className="filter-cards-view animate-chk">
                      <Category />
                      <PrizeRange />
                      <div className="product-filter text-center mt-2">
                        <Image attrImage={{ className: "img-fluid banner-product m-auto", src: `${banner}`, alt: "" }} />
                      </div>
                    </CardBody>
                  </div>
                </Card>
              </div>
            </div>
            <div className="product-search">
              <Form>
                <FormGroup className="m-0 search-product form-group">
                  <Input className="form-control" type="text" placeholder="Search.." defaultValue={searchKeyword} onChange={(e) => handleSearchKeyword(e.target.value)} />
                  <i className="fa fa-search"></i>
                </FormGroup>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};
export default ProductSidebar;

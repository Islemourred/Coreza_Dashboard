import React from "react";
import {Card,CardBody,Col,Pagination,PaginationItem,PaginationLink} from "reactstrap";
import HeadingCommon from "../../../Common/Component/HeadingCommon";
import { Href, Next, PagiNationsHeading, Previous } from "../../../Constant";

const SimplePaganations = () => {
  return (
    <Col xl="4" md="6">
      <Card>
        <HeadingCommon Heading={PagiNationsHeading} CardHeaderClassName="pb-0"/>
        <CardBody>
          <Pagination className="pagination-primary">
            <PaginationItem>
              <PaginationLink href={Href}>{Previous}</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href={Href}>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href={Href}>2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href={Href}>3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href={Href}>{Next}</PaginationLink>
            </PaginationItem>
          </Pagination>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SimplePaganations;
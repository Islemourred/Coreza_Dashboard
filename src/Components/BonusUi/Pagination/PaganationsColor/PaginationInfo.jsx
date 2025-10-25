import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { Href, Next, Previous } from "../../../../Constant";

const PaginationInfo= () => {
  return (
    <nav className="m-b-30" aria-label="Page navigation example">
      <Pagination className="pagination-info">
        <PaginationItem><PaginationLink href={Href}>{Previous}</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href={Href}>1</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href={Href}>2</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href={Href}>3</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href={Href}>{Next}</PaginationLink>
        </PaginationItem>
      </Pagination>
    </nav>
  );
};

export default PaginationInfo

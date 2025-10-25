import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { Href, Next, Previous } from "../../../../Constant";

const PaginationDanger= () => {
  return (
    <nav aria-label="Page navigation example">
      <Pagination className="pagination-danger">
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

export default PaginationDanger
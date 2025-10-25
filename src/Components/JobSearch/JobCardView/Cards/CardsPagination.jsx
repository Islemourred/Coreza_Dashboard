import { Pagination, PaginationItem, PaginationLink, } from 'reactstrap';
import { Previous, Next, Href } from '../../../../Constant';
const CardsPagination = () => {
  return (
    <div className="job-pagination">

                      <Pagination aria-label="Page navigation example" className="pagination-primary">
                            <PaginationItem>
                                <PaginationLink href={Href}>{Previous}</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href={Href}>{'1'}</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href={Href}>{'2'}</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href={Href}>{'3'}</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href={Href}>{Next}</PaginationLink>
                            </PaginationItem>
                        </Pagination>
                     
                    </div>
  )
}

export default CardsPagination
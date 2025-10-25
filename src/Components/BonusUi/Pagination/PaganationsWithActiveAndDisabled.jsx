import {Card,CardBody,Col,Pagination,PaginationItem,PaginationLink,} from "reactstrap";
import HeadingCommon from "../../../Common/Component/HeadingCommon";
import {Href,Next,PaginationActiveDisabled,Previous,} from "../../../Constant";

const PaganationsWithActiveAndDisabled = () => {
  return (
    <Col xl="4">
      <Card>
        <HeadingCommon CardHeaderClassName="pb-0" Heading={PaginationActiveDisabled}/>
        <CardBody>
          <Pagination className="pagination-primary">
            <PaginationItem disabled><PaginationLink href={Href}>{Previous}</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href={Href}>1</PaginationLink></PaginationItem>
            <PaginationItem active><PaginationLink href={Href}>2 <span className="sr-only">(current)</span></PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href={Href}>3</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href={Href}>{Next}</PaginationLink></PaginationItem>
          </Pagination>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PaganationsWithActiveAndDisabled;
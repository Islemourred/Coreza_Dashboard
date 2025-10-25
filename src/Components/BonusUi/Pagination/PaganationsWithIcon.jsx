import {Card,CardBody,Col,Pagination,PaginationItem,PaginationLink,} from "reactstrap";
import HeadingCommon from "../../../Common/Component/HeadingCommon";
import { Href, Next, PaginationWithIcons, Previous } from "../../../Constant";

const PaganationsWithIcon = () => {
  return (
    <Col xl="4" md="6">
      <Card>
        <HeadingCommon Heading={PaginationWithIcons} CardHeaderClassName="pb-0"/>
        <CardBody>
          <Pagination className=" pagination-primary">
            <PaginationItem><PaginationLink href={Href}><span>«</span><span className="sr-only">{Previous}</span></PaginationLink></PaginationItem>
            <PaginationItem>
              <PaginationLink href={Href}>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href={Href}>2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href={Href}>3</PaginationLink>
            </PaginationItem>
            <PaginationItem><PaginationLink href={Href}><span aria-hidden="true">»</span><span className="sr-only">{Next}</span></PaginationLink></PaginationItem>
          </Pagination>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PaganationsWithIcon;
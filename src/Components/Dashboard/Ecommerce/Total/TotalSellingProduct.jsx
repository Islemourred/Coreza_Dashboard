import { Card, CardBody, Col, Table } from "reactstrap";
import TotalSellingProductCardHeader from "./TotalSellingProductCardHeader";
import TotalSellingProductTbody from "./TotalSellingProductTbody";

const TotalSellingProduct = () => {
  return (
    <Col xl="3" lg="5" md="6" className="box-col-30 xl-30">
      <Card className="product">
        <TotalSellingProductCardHeader />
        <CardBody>
          <div className="table-responsive theme-scrollbar">
            <Table>
              <TotalSellingProductTbody />
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TotalSellingProduct;

import { Card, CardBody, Col, Table } from "reactstrap";
import ProductCardsCardHeader from "./ProductCardsCardHeader";
import { Details, Price, Qty, Status } from "../../../../Constant";
import ProductCardsTableBody from "./ProductCardsTableBody";
const ProductCards = () => {
  return (
    <Col xl="6" lg="6">
      <Card className="user-status">
        <ProductCardsCardHeader />
        <CardBody>
          <div className="table-responsive theme-scrollbar mb-0">
            <Table className=" table-bordernone">
              <thead>
                <tr>
                  <th scope="col">{Details}</th>
                  <th scope="col">{Qty}</th>
                  <th scope="col">{Price}</th>
                  <th className="text-end" scope="col">
                    {Status}
                  </th>
                </tr>
              </thead>
              <ProductCardsTableBody />
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProductCards;
import { Card, CardBody, Col, Table } from "reactstrap";
import AppoimentCardHeader from "./AppoimentCardHeader";
import AppoimentCardTableBody from "./AppoimentCardTableBody";

const AppoimentCard = () => {
  return (
    <Col xl="4" md="6" className="box-col-40 xl-40">
      <Card className="appointment-detail">
      <AppoimentCardHeader />
        <CardBody>
          <div className="table-responsive theme-scrollbar">
            <Table>
              <AppoimentCardTableBody />
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AppoimentCard;

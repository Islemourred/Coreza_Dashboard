import { Card, CardBody, Col, Table } from "reactstrap";
import {BestSeller,Country,Date,Product,Status,Total,} from "../../../../Constant";
import OurTotalSoldCardHeader from "./OurTotalSoldCardHeader";
import TotalsoldTbody from "./TotalsoldTbody";
const OurTotalSold = () => {
  return (
    <Col lg="12" md="12" className="box-col-12">
      <Card className="best-seller">
        <OurTotalSoldCardHeader />
        <CardBody className="pt-0">
          <div className="table-responsive theme-scrollbar">
            <Table className="table-bordernone">
              <thead>
                <tr>
                  <th className="f-26">{BestSeller}</th>
                  <th>{Date}</th>
                  <th>{Product}</th>
                  <th>{Country}</th>
                  <th>{Total}</th>
                  <th>{Status}</th>
                  <th> </th>
                </tr>
              </thead>
              <TotalsoldTbody />
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OurTotalSold;

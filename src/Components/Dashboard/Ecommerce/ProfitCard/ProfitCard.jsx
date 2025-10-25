import { Col, Row } from "reactstrap";
import OurTotalSold from "../OurTotalSold/OurTotalSold";
import TotalSold from "../TotalSold/TotalSold";
import VisitorCard from "../VisitorCard/VisitorCard";
import TotalProfitCard from "./TotalProfitCard";

const ProfitCard = () => {
  return (
    <Col xl="9" md="12" className="box-col-70 xl-70">
      <Row>
        <TotalProfitCard />
        <VisitorCard />
        <TotalSold />
        <OurTotalSold />
      </Row>
    </Col>
  );
};

export default ProfitCard;

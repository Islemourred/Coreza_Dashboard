import { Breadcrumbs } from "../../../AbstractElements";
import GoalOverview from "./GoalOverview/GoalOverview";
import LatestOfferCard from "./LatesOfferCard/LatestOfferCard";
import OrderList from "./OrderList/OrderList";
import OrderStatics from "./OrderStatics/OrderStatics";
import ProfitCard from "./ProfitCard/ProfitCard";
import RecentActivity from "./RecentActivity/RecentActivity";
import TotalSellingProduct from "./Total/TotalSellingProduct";
import { Container, Row } from "reactstrap";

const Ecommerce = () => {
  return (
    <>
      <Breadcrumbs mainTitle="Ecommerce" parent="Dashboard" title="Ecommerce" />
      <Container fluid={true} className="dashboard-2">
        <Row>
          <ProfitCard />
          <TotalSellingProduct />
          <GoalOverview />
          <RecentActivity />
          <OrderStatics />
          <LatestOfferCard />
          <OrderList />
        </Row>
      </Container>
    </>
  );
};

export default Ecommerce;

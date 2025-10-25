import UserBrowser from "./Browser/UserBrowser";
import CustomerFeedback from "./CustomerFeedback/CustomerFeedback";
import FaceBook from "./FaceBook/FaceBook";
import Intro from "./Intro/Intro";
import ManagerCard from "./Manager/ManagerCard";
import OrderDetail from "./OrderDetail/OrderDetail";
import ProductCards from "./ProductCart/ProductCards";
import RecentActivity from "./RecentActivity/RecentActivity";
import Saledetails from "./SaleDetail/Saledetails";
import EmployeeStatus from "./EmployeeStatus/EmployeeStatus";
import InfoCard from "./InfoCard/InfoCard";
import ContactUs from "./ContactUs/ContactUs";
import Calender from "./Calender";
import { Breadcrumbs } from "../../../AbstractElements";
import MobileWidgets from "./MobileWidgets/MobileWidgets";
import { Container, Row } from "reactstrap";
import ReportsCard from "./ReportsCard";

const General = () => {
  return (
    <>
      <Breadcrumbs mainTitle="General" parent="Widgets" title="General" />
      <div>
        <Container fluid={true} className="general-widget">
          <Row>
            <ReportsCard />
            <Saledetails />
            <OrderDetail />
            <MobileWidgets />
            <Calender />
            <CustomerFeedback />
            <ManagerCard />
            <RecentActivity />
            <Intro />
            <UserBrowser />
            <FaceBook />
            <ProductCards />
            <EmployeeStatus />
            <InfoCard />
            <ContactUs />
          </Row>
        </Container>
      </div>
    </>
  );
};

export default General;

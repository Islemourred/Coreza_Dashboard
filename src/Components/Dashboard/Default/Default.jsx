import Ravanuechart from "./RevanueChart.jsx/index.jsx";
import Greetingcard from "./GreetingCard";
import TotalUserCard from "./TotalUser/TotalUserCard.jsx";
import TotalEarning from "./TotalEarning/TotalEarning.jsx";
import AppoimentCard from "./Appoiment/AppoimentCard.jsx";
import TotalGrowthCard from "./TotalGrowth/TotalGrowthCard.jsx";
import RecentActivity from "./RecentActivity/RecentActivity.jsx";
import CountryCard from "./Country/Country.jsx";
import ChatCard from "./Chat/ChatCard.jsx";
import TodoList from "./Todo/TodoList.jsx";
import { Breadcrumbs } from "../../../AbstractElements";
import { Container, Row } from "reactstrap";

const Default = () => {
  return (
    <>
      <Breadcrumbs mainTitle="Default" parent="Dashboard" title="Default" />
      <Container fluid={true} className="dashboard-default">
        <Row>
          <Greetingcard />
          <Ravanuechart />
          <TotalUserCard />
          <TotalEarning />
          <AppoimentCard />
          <CountryCard />
          <TotalGrowthCard />
          <RecentActivity />
          <ChatCard />
          <TodoList />
        </Row>
      </Container>
    </>
  );
};

export default Default;

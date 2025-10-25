import Finance from "./Finance/Finance";
import MarketingExpensesCard from "./MarketingExpenses/Marketing ExpensesCard";
import OrderStatus from "./OrderStatus/OrderStatus";
import ProductChart from "./ProductChart/ProductChart";
import ProjectChart from "./ProjectChart/ProjectChart";
import SaleChart from "./SaleChart/SaleChart";
import SkillStatus from "./SkillStatus/SkillStatus";
import TotalEarningChart from "./TotalEarningChart/TotalEarningChart";
import LiveCHart from "./LiveChart/LiveCHart";
import Turnover from "./TurnOver/TurnOver";
import Monthlysale from "./MonthlySale/Monthlysale";
import Uses from "./Uses/Uses";
import BrowserUses from "./BrowserUses/BrowserUses";
import OrderLinechat from "./OrderLinechert/OrderLinechat";
import { Container, Row } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
const Chart = () => {
  return (
    <>
      <Breadcrumbs mainTitle="Chart" parent="Widgets" title="Chart" />
      <Container fluid={true} className="chart-widget">
        <Row>
          <SaleChart />
          <ProjectChart />
          <ProductChart />
        </Row>
        <Row>
          <MarketingExpensesCard />
          <TotalEarningChart />
          <SkillStatus />
          <OrderStatus />
        </Row>
        <Row>
          <LiveCHart />
          <Turnover />
          <Monthlysale />
          <Uses />
          <BrowserUses />
        </Row>
        <Row>
          <Finance />
          <OrderLinechat />
        </Row>
      </Container>
    </>
  );
};

export default Chart;

import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Breadcrumbs } from "../../../../AbstractElements";
import { useCRM } from "../../../../Helper/CRM/CRMProvider";
import SalesKPICards from "./SalesKPICards";
import MyPipelineChart from "./MyPipelineChart";
import ClientsMap from "./ClientsMap";
import UpcomingTasks from "./UpcomingTasks";
import RecentVisits from "./RecentVisits";
import MyPerformance from "./MyPerformance";

const SalesDashboard = () => {
  const { user } = useCRM();

  return (
    <>
      <Breadcrumbs
        mainTitle="Sales Representative Dashboard"
        parent="CRM"
        title="Sales"
      />
      <Container fluid={true}>
        <div className="mb-4">
          <h4 className="mb-1">Welcome back, {user?.name}!</h4>
          <p className="text-muted">Your daily activities and targets</p>
        </div>
        <Row>
          <SalesKPICards />
          <Col xl="8" lg="12" className="box-col-12">
            <MyPipelineChart />
          </Col>
          <Col xl="4" lg="6" className="box-col-6">
            <MyPerformance />
          </Col>
          <Col xl="6" lg="6" className="box-col-6">
            <UpcomingTasks />
          </Col>
          <Col xl="6" lg="6" className="box-col-6">
            <ClientsMap />
          </Col>
          <Col xl="12" className="box-col-12">
            <RecentVisits />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SalesDashboard;

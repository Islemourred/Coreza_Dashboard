import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Breadcrumbs } from "../../../../AbstractElements";
import { useCRM } from "../../../../Helper/CRM/CRMProvider";
import ManagerKPICards from "./ManagerKPICards";
import SalesPipelineChart from "./SalesPipelineChart";
import TeamPerformanceChart from "./TeamPerformanceChart";
import ForecastChart from "./ForecastChart";
import TopOpportunities from "./TopOpportunities";
import TeamActivity from "./TeamActivity";

const ManagerDashboard = () => {
  const { user } = useCRM();

  return (
    <>
      <Breadcrumbs
        mainTitle="Sales Manager Dashboard"
        parent="CRM"
        title="Sales Manager"
      />
      <Container fluid={true}>
        <div className="mb-4">
          <h4 className="mb-1">Welcome back, {user?.name}!</h4>
          <p className="text-muted">Sales Pipeline & Team Performance</p>
        </div>
        <Row>
          <ManagerKPICards />
          <Col xl="8" lg="12" className="box-col-12">
            <SalesPipelineChart />
          </Col>
          <Col xl="4" lg="6" className="box-col-6">
            <ForecastChart />
          </Col>
          <Col xl="6" lg="6" className="box-col-6">
            <TeamPerformanceChart />
          </Col>
          <Col xl="6" lg="6" className="box-col-6">
            <TopOpportunities />
          </Col>
          <Col xl="12" className="box-col-12">
            <TeamActivity />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ManagerDashboard;

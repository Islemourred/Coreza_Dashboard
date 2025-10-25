import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Breadcrumbs } from "../../../../AbstractElements";
import { useCRM } from "../../../../Helper/CRM/CRMProvider";
import SupportKPICards from "./SupportKPICards";
import TicketTrendsChart from "./TicketTrendsChart";
import SatisfactionChart from "./SatisfactionChart";
import OpenTickets from "./OpenTickets";
import ResponseTimeChart from "./ResponseTimeChart";

const SupportDashboard = () => {
  const { user } = useCRM();

  return (
    <>
      <Breadcrumbs
        mainTitle="Support Agent Dashboard"
        parent="CRM"
        title="Support"
      />
      <Container fluid={true}>
        <div className="mb-4">
          <h4 className="mb-1">Welcome back, {user?.name}!</h4>
          <p className="text-muted">Customer Support & Ticket Management</p>
        </div>
        <Row>
          <SupportKPICards />
          <Col xl="8" lg="12" className="box-col-12">
            <TicketTrendsChart />
          </Col>
          <Col xl="4" lg="6" className="box-col-6">
            <SatisfactionChart />
          </Col>
          <Col xl="6" lg="6" className="box-col-6">
            <ResponseTimeChart />
          </Col>
          <Col xl="6" lg="6" className="box-col-6">
            <OpenTickets />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SupportDashboard;

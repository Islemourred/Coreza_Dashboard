import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Breadcrumbs } from "../../../../AbstractElements";
import { useCRM } from "../../../../Helper/CRM/CRMProvider";
import AdminKPICards from "./AdminKPICards";
import SystemHealthChart from "./SystemHealthChart";
import UserActivityChart from "./UserActivityChart";
import RevenueChart from "./RevenueChart";
import SecurityLogs from "./SecurityLogs";
import IntegrationStatus from "./IntegrationStatus";
import RecentActions from "./RecentActions";

const AdminDashboard = () => {
  const { user } = useCRM();

  return (
    <>
      <Breadcrumbs
        mainTitle="Admin Dashboard"
        parent="CRM"
        title="Administrator"
      />
      <Container fluid={true}>
        <div className="mb-4">
          <h4 className="mb-1">Welcome back, {user?.name}!</h4>
          <p className="text-muted">System Overview & Management</p>
        </div>
        <Row>
          <AdminKPICards />
          <Col xl="8" lg="12" className="box-col-12">
            <RevenueChart />
          </Col>
          <Col xl="4" lg="6" className="box-col-6">
            <SystemHealthChart />
          </Col>
          <Col xl="6" lg="6" className="box-col-6">
            <UserActivityChart />
          </Col>
          <Col xl="6" lg="6" className="box-col-6">
            <IntegrationStatus />
          </Col>
          <Col xl="12" className="box-col-12">
            <SecurityLogs />
          </Col>
          <Col xl="12" className="box-col-12">
            <RecentActions />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminDashboard;

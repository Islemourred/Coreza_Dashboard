import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Breadcrumbs } from "../../../../AbstractElements";
import { useCRM } from "../../../../Helper/CRM/CRMProvider";
import MarketingKPICards from "./MarketingKPICards";
import CampaignPerformanceChart from "./CampaignPerformanceChart";
import SegmentationChart from "./SegmentationChart";
import ActiveCampaigns from "./ActiveCampaigns";
import ConversionFunnelChart from "./ConversionFunnelChart";

const MarketingDashboard = () => {
  const { user } = useCRM();

  return (
    <>
      <Breadcrumbs
        mainTitle="Marketing Dashboard"
        parent="CRM"
        title="Marketing"
      />
      <Container fluid={true}>
        <div className="mb-4">
          <h4 className="mb-1">Welcome back, {user?.name}!</h4>
          <p className="text-muted">Campaign Management & Analytics</p>
        </div>
        <Row>
          <MarketingKPICards />
          <Col xl="8" lg="12" className="box-col-12">
            <CampaignPerformanceChart />
          </Col>
          <Col xl="4" lg="6" className="box-col-6">
            <SegmentationChart />
          </Col>
          <Col xl="6" lg="6" className="box-col-6">
            <ConversionFunnelChart />
          </Col>
          <Col xl="6" lg="6" className="box-col-6">
            <ActiveCampaigns />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MarketingDashboard;

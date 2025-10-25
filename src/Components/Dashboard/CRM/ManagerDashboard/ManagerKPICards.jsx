import React from "react";
import { Col, Card, CardBody } from "reactstrap";
import { useCRM } from "../../../../Helper/CRM/CRMProvider";

const ManagerKPICards = () => {
  const { opportunities } = useCRM();

  const activeOpportunities = opportunities.filter(
    (o) => o.stage !== "Closed Won" && o.stage !== "Closed Lost"
  );
  const wonOpportunities = opportunities.filter(
    (o) => o.stage === "Closed Won"
  );
  const totalValue = activeOpportunities.reduce((sum, o) => sum + o.value, 0);
  const wonValue = wonOpportunities.reduce((sum, o) => sum + o.value, 0);
  const avgDealSize =
    activeOpportunities.length > 0
      ? totalValue / activeOpportunities.length
      : 0;
  const winRate =
    opportunities.length > 0
      ? (wonOpportunities.length / opportunities.length) * 100
      : 0;

  const kpis = [
    {
      title: "Pipeline Value",
      value: `$${(totalValue / 1000).toFixed(0)}K`,
      change: "+22%",
      changeType: "success",
      icon: "dollar-sign",
      color: "success",
    },
    {
      title: "Active Deals",
      value: activeOpportunities.length,
      change: "+5",
      changeType: "success",
      icon: "briefcase",
      color: "primary",
    },
    {
      title: "Won This Month",
      value: wonOpportunities.length,
      change: "+3",
      changeType: "success",
      icon: "award",
      color: "success",
    },
    {
      title: "Win Rate",
      value: `${winRate.toFixed(0)}%`,
      change: "+8%",
      changeType: "success",
      icon: "trending-up",
      color: "info",
    },
    {
      title: "Avg Deal Size",
      value: `$${(avgDealSize / 1000).toFixed(0)}K`,
      change: "+12%",
      changeType: "success",
      icon: "target",
      color: "warning",
    },
    {
      title: "Team Members",
      value: "8",
      change: "+1",
      changeType: "success",
      icon: "users",
      color: "primary",
    },
  ];

  return (
    <>
      {kpis.map((kpi, index) => (
        <Col xl="2" sm="6" key={index} className="box-col-6">
          <Card className="o-hidden">
            <CardBody className={`bg-${kpi.color} b-r-4`}>
              <div className="media static-top-widget">
                <div className="align-self-center text-center">
                  <i
                    className={`feather icon-${kpi.icon}`}
                    style={{ fontSize: "24px", color: "white" }}
                  ></i>
                </div>
                <div className="media-body ms-3">
                  <span
                    className="m-0"
                    style={{ color: "white", fontSize: "12px" }}
                  >
                    {kpi.title}
                  </span>
                  <h4 className="mb-0 counter" style={{ color: "white" }}>
                    {kpi.value}
                  </h4>
                  <small style={{ color: "rgba(255,255,255,0.8)" }}>
                    <span>{kpi.change}</span> vs last month
                  </small>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default ManagerKPICards;

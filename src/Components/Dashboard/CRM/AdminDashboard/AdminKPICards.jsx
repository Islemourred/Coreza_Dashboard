import React from "react";
import { Col, Card, CardBody } from "reactstrap";
import { useCRM } from "../../../../Helper/CRM/CRMProvider";

const AdminKPICards = () => {
  const { clients, opportunities, tickets, campaigns } = useCRM();

  const kpis = [
    {
      title: "Total Clients",
      value: clients.length,
      change: "+12%",
      changeType: "success",
      icon: "users",
      color: "primary",
    },
    {
      title: "Active Opportunities",
      value: opportunities.filter(
        (o) => o.stage !== "Closed Won" && o.stage !== "Closed Lost"
      ).length,
      change: "+8%",
      changeType: "success",
      icon: "trending-up",
      color: "success",
    },
    {
      title: "Open Tickets",
      value: tickets.filter(
        (t) => t.status !== "Resolved" && t.status !== "Closed"
      ).length,
      change: "-5%",
      changeType: "success",
      icon: "alert-circle",
      color: "warning",
    },
    {
      title: "Active Campaigns",
      value: campaigns.filter((c) => c.status === "Active").length,
      change: "+15%",
      changeType: "success",
      icon: "mail",
      color: "info",
    },
    {
      title: "Total Revenue",
      value: `$${(
        opportunities
          .filter((o) => o.stage === "Closed Won")
          .reduce((sum, o) => sum + o.value, 0) / 1000
      ).toFixed(0)}K`,
      change: "+18%",
      changeType: "success",
      icon: "dollar-sign",
      color: "success",
    },
    {
      title: "System Health",
      value: "98.5%",
      change: "+0.5%",
      changeType: "success",
      icon: "activity",
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
                    <span
                      className={`text-${
                        kpi.changeType === "success" ? "light" : "danger"
                      }`}
                    >
                      {kpi.change}
                    </span>{" "}
                    vs last month
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

export default AdminKPICards;

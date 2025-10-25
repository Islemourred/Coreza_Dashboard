import React from "react";
import { Col, Card, CardBody } from "reactstrap";
import { useCRM } from "../../../../Helper/CRM/CRMProvider";

const SupportKPICards = () => {
  const { tickets } = useCRM();

  const openTickets = tickets.filter((t) => t.status === "Open").length;
  const inProgress = tickets.filter((t) => t.status === "In Progress").length;
  const resolved = tickets.filter((t) => t.status === "Resolved").length;
  const avgSatisfaction =
    tickets
      .filter((t) => t.satisfaction !== null)
      .reduce((sum, t) => sum + t.satisfaction, 0) /
      tickets.filter((t) => t.satisfaction !== null).length || 0;

  const kpis = [
    {
      title: "Open Tickets",
      value: openTickets,
      change: "-3",
      changeType: "success",
      icon: "alert-circle",
      color: "danger",
    },
    {
      title: "In Progress",
      value: inProgress,
      change: "+2",
      changeType: "info",
      icon: "clock",
      color: "warning",
    },
    {
      title: "Resolved Today",
      value: resolved,
      change: "+5",
      changeType: "success",
      icon: "check-circle",
      color: "success",
    },
    {
      title: "Avg Satisfaction",
      value: avgSatisfaction.toFixed(1) + "/5",
      change: "+0.2",
      changeType: "success",
      icon: "star",
      color: "primary",
    },
    {
      title: "Avg Response Time",
      value: "12min",
      change: "-3min",
      changeType: "success",
      icon: "zap",
      color: "info",
    },
    {
      title: "SLA Compliance",
      value: "96%",
      change: "+2%",
      changeType: "success",
      icon: "shield",
      color: "success",
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
                    {kpi.change} vs yesterday
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

export default SupportKPICards;

import React from "react";
import { Col, Card, CardBody } from "reactstrap";
import { useCRM } from "../../../../Helper/CRM/CRMProvider";

const SalesKPICards = () => {
  const { opportunities } = useCRM();

  const myOpportunities = opportunities.filter(
    (o) => o.owner === "Sales Representative"
  );
  const myActive = myOpportunities.filter(
    (o) => o.stage !== "Closed Won" && o.stage !== "Closed Lost"
  );
  const myWon = myOpportunities.filter((o) => o.stage === "Closed Won");
  const myValue = myActive.reduce((sum, o) => sum + o.value, 0);

  const kpis = [
    {
      title: "My Pipeline",
      value: `$${(myValue / 1000).toFixed(0)}K`,
      target: "$200K",
      progress: (myValue / 200000) * 100,
      icon: "target",
      color: "primary",
    },
    {
      title: "My Deals",
      value: myActive.length,
      target: "10 deals",
      progress: (myActive.length / 10) * 100,
      icon: "briefcase",
      color: "info",
    },
    {
      title: "Won This Month",
      value: myWon.length,
      target: "5 deals",
      progress: (myWon.length / 5) * 100,
      icon: "award",
      color: "success",
    },
    {
      title: "Visits This Week",
      value: "12",
      target: "15 visits",
      progress: (12 / 15) * 100,
      icon: "map-pin",
      color: "warning",
    },
    {
      title: "Calls Made",
      value: "48",
      target: "50 calls",
      progress: (48 / 50) * 100,
      icon: "phone",
      color: "info",
    },
    {
      title: "Emails Sent",
      value: "156",
      target: "150 emails",
      progress: 100,
      icon: "mail",
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
                  <div
                    className="progress mt-2"
                    style={{
                      height: "4px",
                      backgroundColor: "rgba(255,255,255,0.3)",
                    }}
                  >
                    <div
                      className="progress-bar bg-white"
                      style={{ width: `${kpi.progress}%` }}
                    ></div>
                  </div>
                  <small style={{ color: "rgba(255,255,255,0.8)" }}>
                    Target: {kpi.target}
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

export default SalesKPICards;

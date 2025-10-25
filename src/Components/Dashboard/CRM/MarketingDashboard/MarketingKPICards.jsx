import React from "react";
import { Col, Card, CardBody } from "reactstrap";
import { useCRM } from "../../../../Helper/CRM/CRMProvider";

const MarketingKPICards = () => {
  const { campaigns } = useCRM();

  const activeCampaigns = campaigns.filter((c) => c.status === "Active");
  const totalSent = campaigns.reduce((sum, c) => sum + c.sent, 0);
  const totalOpened = campaigns.reduce((sum, c) => sum + c.opened, 0);
  const totalClicked = campaigns.reduce((sum, c) => sum + c.clicked, 0);
  const totalConversions = campaigns.reduce((sum, c) => sum + c.conversions, 0);

  const openRate =
    totalSent > 0 ? ((totalOpened / totalSent) * 100).toFixed(1) : 0;
  const clickRate =
    totalSent > 0 ? ((totalClicked / totalSent) * 100).toFixed(1) : 0;
  const conversionRate =
    totalSent > 0 ? ((totalConversions / totalSent) * 100).toFixed(1) : 0;

  const kpis = [
    {
      title: "Active Campaigns",
      value: activeCampaigns.length,
      change: "+2",
      changeType: "success",
      icon: "send",
      color: "primary",
    },
    {
      title: "Messages Sent",
      value: totalSent.toLocaleString(),
      change: "+15%",
      changeType: "success",
      icon: "mail",
      color: "info",
    },
    {
      title: "Open Rate",
      value: openRate + "%",
      change: "+3%",
      changeType: "success",
      icon: "eye",
      color: "success",
    },
    {
      title: "Click Rate",
      value: clickRate + "%",
      change: "+2%",
      changeType: "success",
      icon: "mouse-pointer",
      color: "warning",
    },
    {
      title: "Conversions",
      value: totalConversions,
      change: "+8",
      changeType: "success",
      icon: "check-circle",
      color: "success",
    },
    {
      title: "Conversion Rate",
      value: conversionRate + "%",
      change: "+1.2%",
      changeType: "success",
      icon: "trending-up",
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
                    {kpi.change} vs last month
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

export default MarketingKPICards;

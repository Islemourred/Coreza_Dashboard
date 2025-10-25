import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";

const RecentResolutions = () => {
  const resolutions = [
    {
      ticketId: "1523",
      client: "TechCorp Solutions",
      subject: "Login Issue",
      resolvedBy: "Support Agent",
      time: "2 hours ago",
      satisfaction: 5,
      resolution:
        "Password reset completed. User can now access the system without issues.",
    },
    {
      ticketId: "1489",
      client: "Global Industries",
      subject: "Data Export Problem",
      resolvedBy: "Support Agent",
      time: "5 hours ago",
      satisfaction: 4,
      resolution:
        "Fixed export functionality. Tested with client and confirmed working.",
    },
    {
      ticketId: "1456",
      client: "Financial Services Ltd",
      subject: "Report Generation Bug",
      resolvedBy: "Support Agent",
      time: "1 day ago",
      satisfaction: 5,
      resolution:
        "Bug identified and fixed in report module. Deployed patch successfully.",
    },
  ];

  return (
    <Card>
      <CardHeader className="pb-0">
        <h5>Recent Resolutions</h5>
        <span className="text-muted">Successfully resolved tickets</span>
      </CardHeader>
      <CardBody>
        {resolutions.map((resolution, index) => (
          <Card className="mb-3 border" key={index}>
            <CardBody>
              <div className="d-flex justify-content-between align-items-start mb-2">
                <div>
                  <h6 className="mb-1">
                    <span className="badge badge-success me-2">Resolved</span>
                    Ticket #{resolution.ticketId} - {resolution.subject}
                  </h6>
                  <p className="mb-1">
                    <small className="text-muted">
                      <i className="feather icon-briefcase me-2"></i>
                      {resolution.client}
                    </small>
                  </p>
                </div>
                <div className="text-end">
                  <div className="mb-1">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`fa fa-star ${
                          i < resolution.satisfaction
                            ? "text-warning"
                            : "text-muted"
                        }`}
                        style={{ fontSize: "12px" }}
                      ></i>
                    ))}
                  </div>
                  <small className="text-muted">{resolution.time}</small>
                </div>
              </div>
              <p className="mb-0">
                <strong>Resolution:</strong> {resolution.resolution}
              </p>
            </CardBody>
          </Card>
        ))}
      </CardBody>
    </Card>
  );
};

export default RecentResolutions;

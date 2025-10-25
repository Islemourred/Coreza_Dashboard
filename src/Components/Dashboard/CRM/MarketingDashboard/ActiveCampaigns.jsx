import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import { useCRM } from "../../../../Helper/CRM/CRMProvider";

const ActiveCampaigns = () => {
  const { campaigns } = useCRM();

  const getStatusColor = (status) => {
    const colors = {
      Active: "success",
      Completed: "primary",
      Scheduled: "warning",
      Draft: "secondary",
    };
    return colors[status] || "secondary";
  };

  const getTypeIcon = (type) => {
    const icons = {
      Email: "mail",
      SMS: "message-circle",
      Push: "bell",
      Social: "share-2",
    };
    return icons[type] || "send";
  };

  return (
    <Card>
      <CardHeader className="pb-0">
        <h5>Campaign List</h5>
        <span className="text-muted">All marketing campaigns</span>
      </CardHeader>
      <CardBody>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Campaign</th>
                <th>Type</th>
                <th>Status</th>
                <th>Sent</th>
                <th>Engagement</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign) => {
                const engagementRate =
                  campaign.sent > 0
                    ? ((campaign.clicked / campaign.sent) * 100).toFixed(1)
                    : 0;

                return (
                  <tr key={campaign.id}>
                    <td>
                      <i
                        className={`feather icon-${getTypeIcon(
                          campaign.type
                        )} me-2 text-${getStatusColor(campaign.status)}`}
                      ></i>
                      {campaign.name}
                    </td>
                    <td>
                      <span className="badge badge-light-info">
                        {campaign.type}
                      </span>
                    </td>
                    <td>
                      <span
                        className={`badge badge-light-${getStatusColor(
                          campaign.status
                        )}`}
                      >
                        {campaign.status}
                      </span>
                    </td>
                    <td>{campaign.sent.toLocaleString()}</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div
                          className="progress"
                          style={{ width: "60px", height: "6px" }}
                        >
                          <div
                            className={`progress-bar bg-${getStatusColor(
                              campaign.status
                            )}`}
                            style={{ width: `${engagementRate}%` }}
                          ></div>
                        </div>
                        <small className="ms-2 text-muted">
                          {engagementRate}%
                        </small>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
};

export default ActiveCampaigns;

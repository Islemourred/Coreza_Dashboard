import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";

const TeamActivity = () => {
  const activities = [
    {
      member: "John Smith",
      action: "Closed deal with TechCorp",
      value: "$75K",
      time: "30 mins ago",
      avatar: "1.jpg",
      status: "success",
    },
    {
      member: "Sarah Johnson",
      action: "Moved Financial Services to Negotiation",
      value: "$95K",
      time: "1 hour ago",
      avatar: "2.jpg",
      status: "warning",
    },
    {
      member: "Mike Davis",
      action: "Created new opportunity",
      value: "$45K",
      time: "2 hours ago",
      avatar: "3.jpg",
      status: "info",
    },
    {
      member: "Emily Brown",
      action: "Scheduled demo with Retail Partners",
      value: "$60K",
      time: "3 hours ago",
      avatar: "4.jpg",
      status: "primary",
    },
    {
      member: "John Smith",
      action: "Submitted proposal to Global Industries",
      value: "$120K",
      time: "4 hours ago",
      avatar: "1.jpg",
      status: "warning",
    },
    {
      member: "Sarah Johnson",
      action: "Completed client meeting",
      value: "$85K",
      time: "5 hours ago",
      avatar: "2.jpg",
      status: "success",
    },
  ];

  return (
    <Card>
      <CardHeader className="pb-0">
        <h5>Team Activity Feed</h5>
        <span className="text-muted">Recent sales activities</span>
      </CardHeader>
      <CardBody>
        <div className="activity-timeline">
          {activities.map((activity, index) => (
            <div className="d-flex mb-3 pb-3 border-bottom" key={index}>
              <div className="flex-shrink-0">
                <div className={`avatar bg-light-${activity.status}`}>
                  <span className="avatar-title rounded-circle">
                    {activity.member
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
              </div>
              <div className="flex-grow-1 ms-3">
                <h6 className="mb-1">
                  {activity.member}
                  <span className={`badge badge-light-${activity.status} ms-2`}>
                    {activity.value}
                  </span>
                </h6>
                <p className="mb-0 text-muted">
                  <small>{activity.action}</small>
                </p>
                <small className="text-muted">{activity.time}</small>
              </div>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default TeamActivity;

import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";

const UpcomingTasks = () => {
  const tasks = [
    {
      title: "Call TechCorp - Follow up on proposal",
      time: "Today, 2:00 PM",
      priority: "high",
      client: "TechCorp Solutions",
    },
    {
      title: "Demo for Retail Partners",
      time: "Today, 4:30 PM",
      priority: "high",
      client: "Retail Partners Inc",
    },
    {
      title: "Send quote to Global Industries",
      time: "Tomorrow, 10:00 AM",
      priority: "medium",
      client: "Global Industries",
    },
    {
      title: "Visit Healthcare Plus",
      time: "Tomorrow, 2:00 PM",
      priority: "medium",
      client: "Healthcare Plus",
    },
    {
      title: "Prepare presentation",
      time: "Oct 27, 9:00 AM",
      priority: "low",
      client: "Financial Services",
    },
  ];

  const getPriorityColor = (priority) => {
    return priority === "high"
      ? "danger"
      : priority === "medium"
      ? "warning"
      : "info";
  };

  return (
    <Card>
      <CardHeader className="pb-0">
        <h5>Upcoming Tasks & Meetings</h5>
        <span className="text-muted">Your schedule</span>
      </CardHeader>
      <CardBody>
        {tasks.map((task, index) => (
          <div className="d-flex mb-3 pb-3 border-bottom" key={index}>
            <div className="flex-shrink-0">
              <div
                className={`badge badge-${getPriorityColor(
                  task.priority
                )} rounded-pill`}
                style={{ width: "8px", height: "8px" }}
              ></div>
            </div>
            <div className="flex-grow-1 ms-3">
              <h6 className="mb-1">{task.title}</h6>
              <p className="mb-0">
                <small className="text-muted">
                  <i className="feather icon-briefcase me-1"></i>
                  {task.client}
                </small>
              </p>
              <small className="text-muted">
                <i className="feather icon-clock me-1"></i>
                {task.time}
              </small>
            </div>
          </div>
        ))}
      </CardBody>
    </Card>
  );
};

export default UpcomingTasks;

import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Button,
  Input,
  Label,
  FormGroup,
} from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import { User, Lock, Shield, Edit, Trash2 } from "react-feather";

const UserManagement = () => {
  const [users] = useState([
    {
      id: 1,
      name: "Admin User",
      email: "admin@admin.com",
      role: "Administrator",
      status: "Active",
      lastLogin: "2025-10-25",
    },
    {
      id: 2,
      name: "Sales Manager",
      email: "manager@manager.com",
      role: "Sales Manager",
      status: "Active",
      lastLogin: "2025-10-25",
    },
    {
      id: 3,
      name: "Sales Rep",
      email: "sales@sales.com",
      role: "Sales Representative",
      status: "Active",
      lastLogin: "2025-10-24",
    },
    {
      id: 4,
      name: "Support Agent",
      email: "support@support.com",
      role: "Support Agent",
      status: "Active",
      lastLogin: "2025-10-25",
    },
    {
      id: 5,
      name: "Marketing User",
      email: "marketing@marketing.com",
      role: "Marketing User",
      status: "Active",
      lastLogin: "2025-10-23",
    },
  ]);

  const getRoleBadgeColor = (role) => {
    const colors = {
      Administrator: "danger",
      "Sales Manager": "primary",
      "Sales Representative": "info",
      "Support Agent": "warning",
      "Marketing User": "success",
    };
    return colors[role] || "secondary";
  };

  return (
    <>
      <Breadcrumbs mainTitle="User Management" parent="Admin" title="Users" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0 d-flex justify-content-between align-items-center">
                <div>
                  <h5>System Users</h5>
                  <span className="text-muted">
                    Manage user accounts and access
                  </span>
                </div>
                <Button color="primary" size="sm">
                  <User size={14} className="me-2" />
                  Add New User
                </Button>
              </CardHeader>
              <CardBody>
                <div className="mb-3">
                  <Row>
                    <Col md="4">
                      <FormGroup>
                        <Input type="text" placeholder="Search users..." />
                      </FormGroup>
                    </Col>
                    <Col md="3">
                      <FormGroup>
                        <select className="form-control">
                          <option>All Roles</option>
                          <option>Administrator</option>
                          <option>Sales Manager</option>
                          <option>Sales Representative</option>
                          <option>Support Agent</option>
                          <option>Marketing User</option>
                        </select>
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>User</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Last Login</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr key={user.id}>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="avatar bg-light-primary me-2">
                                <span className="avatar-title rounded-circle">
                                  <User size={18} />
                                </span>
                              </div>
                              <strong>{user.name}</strong>
                            </div>
                          </td>
                          <td>{user.email}</td>
                          <td>
                            <span
                              className={`badge badge-${getRoleBadgeColor(
                                user.role
                              )}`}
                            >
                              {user.role}
                            </span>
                          </td>
                          <td>
                            <span className="badge badge-light-success">
                              {user.status}
                            </span>
                          </td>
                          <td className="text-muted">{user.lastLogin}</td>
                          <td>
                            <Button
                              color="primary"
                              size="sm"
                              className="me-2"
                              title="Edit"
                            >
                              <Edit size={14} />
                            </Button>
                            <Button
                              color="warning"
                              size="sm"
                              className="me-2"
                              title="Permissions"
                            >
                              <Lock size={14} />
                            </Button>
                            <Button color="danger" size="sm" title="Delete">
                              <Trash2 size={14} />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md="4">
            <Card>
              <CardBody className="text-center">
                <User size={48} className="text-primary mb-3" />
                <h3>{users.length}</h3>
                <p className="text-muted mb-0">Total Users</p>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <CardBody className="text-center">
                <Shield size={48} className="text-success mb-3" />
                <h3>{users.filter((u) => u.status === "Active").length}</h3>
                <p className="text-muted mb-0">Active Users</p>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <CardBody className="text-center">
                <Lock size={48} className="text-warning mb-3" />
                <h3>5</h3>
                <p className="text-muted mb-0">Role Types</p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserManagement;

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
  Badge,
  Table,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
} from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import { User, Edit, Trash2, Plus, Mail, Calendar } from "react-feather";

const UserManagement = () => {
  const [modal, setModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Admin User",
      email: "admin@admin.com",
      role: "Administrator",
      status: "Active",
      lastLogin: "2025-11-02",
      createdAt: "2024-01-15",
    },
    {
      id: 2,
      name: "Sales Manager",
      email: "manager@manager.com",
      role: "Sales Manager",
      status: "Active",
      lastLogin: "2025-11-02",
      createdAt: "2024-02-10",
    },
    {
      id: 3,
      name: "Sales Rep",
      email: "sales@sales.com",
      role: "Sales Representative",
      status: "Active",
      lastLogin: "2025-11-01",
      createdAt: "2024-03-05",
    },
    {
      id: 4,
      name: "Support Agent",
      email: "support@support.com",
      role: "Support Agent",
      status: "Active",
      lastLogin: "2025-11-02",
      createdAt: "2024-03-20",
    },
    {
      id: 5,
      name: "Marketing User",
      email: "marketing@marketing.com",
      role: "Marketing User",
      status: "Inactive",
      lastLogin: "2025-10-28",
      createdAt: "2024-04-12",
    },
  ]);

  const toggleModal = () => {
    setModal(!modal);
    if (!modal) {
      setEditMode(false);
      setSelectedUser(null);
    }
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setEditMode(true);
    setModal(true);
  };

  const handleDelete = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== userId));
    }
  };

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
      <Breadcrumbs mainTitle="Users" parent="Admin" title="User Management" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card className="shadow-sm border-0">
              <CardHeader className="pb-3 border-bottom bg-white">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="mb-1">
                      <User size={20} className="me-2" />
                      System Users
                    </h5>
                    <span className="text-muted f-12">
                      Manage user accounts and access control
                    </span>
                  </div>
                  <Button color="primary" size="sm" onClick={toggleModal}>
                    <Plus size={14} className="me-1" />
                    Add New User
                  </Button>
                </div>
              </CardHeader>
              <CardBody className="p-0">
                <div className="mb-3 px-4 pt-3">
                  <Row>
                    <Col md="4">
                      <Input
                        type="text"
                        placeholder="Search users..."
                        className="form-control-sm"
                      />
                    </Col>
                    <Col md="3">
                      <Input type="select" className="form-control-sm">
                        <option>All Roles</option>
                        <option>Administrator</option>
                        <option>Sales Manager</option>
                        <option>Sales Representative</option>
                      </Input>
                    </Col>
                    <Col md="3">
                      <Input type="select" className="form-control-sm">
                        <option>All Status</option>
                        <option>Active</option>
                        <option>Inactive</option>
                      </Input>
                    </Col>
                  </Row>
                </div>

                <div className="table-responsive">
                  <Table className="table-hover mb-0">
                    <thead className="bg-light">
                      <tr>
                        <th className="ps-4">User</th>
                        <th>Role</th>
                        <th>Last Login</th>
                        <th className="text-center">Status</th>
                        <th className="text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr key={user.id}>
                          <td className="ps-4">
                            <div className="d-flex align-items-center">
                              <div
                                className="rounded-circle bg-light d-flex align-items-center justify-content-center me-3"
                                style={{ width: "40px", height: "40px" }}
                              >
                                <User size={18} className="text-muted" />
                              </div>
                              <div>
                                <div className="fw-semibold f-14">
                                  {user.name}
                                </div>
                                <div className="text-muted f-12">
                                  <Mail size={12} className="me-1" />
                                  {user.email}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <Badge
                              color={getRoleBadgeColor(user.role)}
                              className="badge-sm"
                            >
                              {user.role}
                            </Badge>
                          </td>
                          <td className="text-muted f-13">
                            <Calendar size={12} className="me-1" />
                            {user.lastLogin}
                          </td>
                          <td className="text-center">
                            <Badge
                              color={
                                user.status === "Active"
                                  ? "success"
                                  : "secondary"
                              }
                              className="badge-sm"
                            >
                              {user.status}
                            </Badge>
                          </td>
                          <td className="text-center">
                            <Button
                              color="primary"
                              size="sm"
                              className="me-2"
                              outline
                              onClick={() => handleEdit(user)}
                            >
                              <Edit size={14} />
                            </Button>
                            <Button
                              color="danger"
                              size="sm"
                              outline
                              onClick={() => handleDelete(user.id)}
                              disabled={user.role === "Administrator"}
                            >
                              <Trash2 size={14} />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Statistics Cards */}
        <Row className="mt-4">
          <Col md="3">
            <Card className="shadow-sm border-0">
              <CardBody>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1 f-12">Total Users</p>
                    <h3 className="mb-0">{users.length}</h3>
                  </div>
                  <div
                    className="rounded-circle bg-primary-light d-flex align-items-center justify-content-center"
                    style={{ width: "48px", height: "48px" }}
                  >
                    <User size={24} className="text-primary" />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-sm border-0">
              <CardBody>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1 f-12">Active Users</p>
                    <h3 className="mb-0">
                      {users.filter((u) => u.status === "Active").length}
                    </h3>
                  </div>
                  <div
                    className="rounded-circle bg-success-light d-flex align-items-center justify-content-center"
                    style={{ width: "48px", height: "48px" }}
                  >
                    <User size={24} className="text-success" />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-sm border-0">
              <CardBody>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1 f-12">Administrators</p>
                    <h3 className="mb-0">
                      {users.filter((u) => u.role === "Administrator").length}
                    </h3>
                  </div>
                  <div
                    className="rounded-circle bg-danger-light d-flex align-items-center justify-content-center"
                    style={{ width: "48px", height: "48px" }}
                  >
                    <User size={24} className="text-danger" />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card className="shadow-sm border-0">
              <CardBody>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1 f-12">New This Month</p>
                    <h3 className="mb-0">12</h3>
                  </div>
                  <div
                    className="rounded-circle bg-info-light d-flex align-items-center justify-content-center"
                    style={{ width: "48px", height: "48px" }}
                  >
                    <User size={24} className="text-info" />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Add/Edit Modal */}
      <Modal isOpen={modal} toggle={toggleModal} size="lg">
        <ModalHeader toggle={toggleModal}>
          {editMode ? "Edit User" : "Add New User"}
        </ModalHeader>
        <ModalBody>
          <Form>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Label for="userName">Full Name *</Label>
                  <Input
                    type="text"
                    id="userName"
                    placeholder="Enter full name"
                    defaultValue={editMode ? selectedUser?.name : ""}
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="userEmail">Email Address *</Label>
                  <Input
                    type="email"
                    id="userEmail"
                    placeholder="Enter email"
                    defaultValue={editMode ? selectedUser?.email : ""}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Label for="userRole">Role *</Label>
                  <Input
                    type="select"
                    id="userRole"
                    defaultValue={editMode ? selectedUser?.role : ""}
                  >
                    <option value="">Select Role</option>
                    <option value="Administrator">Administrator</option>
                    <option value="Sales Manager">Sales Manager</option>
                    <option value="Sales Representative">
                      Sales Representative
                    </option>
                    <option value="Support Agent">Support Agent</option>
                    <option value="Marketing User">Marketing User</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label>Status</Label>
                  <div>
                    <div className="form-check form-check-inline">
                      <Input
                        className="form-check-input"
                        type="radio"
                        name="status"
                        id="active"
                        defaultChecked={
                          editMode
                            ? selectedUser?.status === "Active"
                            : true
                        }
                      />
                      <Label className="form-check-label" for="active">
                        Active
                      </Label>
                    </div>
                    <div className="form-check form-check-inline">
                      <Input
                        className="form-check-input"
                        type="radio"
                        name="status"
                        id="inactive"
                        defaultChecked={
                          editMode
                            ? selectedUser?.status === "Inactive"
                            : false
                        }
                      />
                      <Label className="form-check-label" for="inactive">
                        Inactive
                      </Label>
                    </div>
                  </div>
                </FormGroup>
              </Col>
            </Row>
            {!editMode && (
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label for="userPassword">Password *</Label>
                    <Input
                      type="password"
                      id="userPassword"
                      placeholder="Enter password"
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label for="confirmPassword">Confirm Password *</Label>
                    <Input
                      type="password"
                      id="confirmPassword"
                      placeholder="Confirm password"
                    />
                  </FormGroup>
                </Col>
              </Row>
            )}
            <div className="d-flex justify-content-end gap-2 mt-4">
              <Button color="secondary" onClick={toggleModal}>
                Cancel
              </Button>
              <Button color="primary">
                {editMode ? "Update User" : "Create User"}
              </Button>
            </div>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default UserManagement;

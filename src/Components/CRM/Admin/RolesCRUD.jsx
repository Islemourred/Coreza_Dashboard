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
import { Shield, Edit, Trash2, Plus, Users } from "react-feather";

const RolesCRUD = () => {
  const [modal, setModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [roles, setRoles] = useState([
    {
      id: 1,
      name: "Administrator",
      description: "Full system access with all permissions",
      users: 3,
      permissions: 156,
      createdAt: "2024-01-15",
      status: "Active",
    },
    {
      id: 2,
      name: "Sales Manager",
      description: "Manage sales team and pipeline",
      users: 8,
      permissions: 45,
      createdAt: "2024-02-10",
      status: "Active",
    },
    {
      id: 3,
      name: "Sales Representative",
      description: "Handle client interactions and sales",
      users: 52,
      permissions: 28,
      createdAt: "2024-02-10",
      status: "Active",
    },
    {
      id: 4,
      name: "Support Agent",
      description: "Customer support and ticket management",
      users: 15,
      permissions: 32,
      createdAt: "2024-03-05",
      status: "Active",
    },
    {
      id: 5,
      name: "Marketing User",
      description: "Campaign and lead management",
      users: 12,
      permissions: 24,
      createdAt: "2024-03-20",
      status: "Active",
    },
  ]);

  const toggleModal = () => {
    setModal(!modal);
    if (!modal) {
      setEditMode(false);
      setSelectedRole(null);
    }
  };

  const handleEdit = (role) => {
    setSelectedRole(role);
    setEditMode(true);
    setModal(true);
  };

  const handleDelete = (roleId) => {
    if (window.confirm("Are you sure you want to delete this role?")) {
      setRoles(roles.filter((role) => role.id !== roleId));
    }
  };

  const getRoleBadge = (name) => {
    const colors = {
      Administrator: "danger",
      "Sales Manager": "primary",
      "Sales Representative": "info",
      "Support Agent": "warning",
      "Marketing User": "success",
    };
    return colors[name] || "secondary";
  };

  return (
    <>
      <Breadcrumbs mainTitle="Roles Management" parent="Admin" title="Roles CRUD" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card className="shadow-sm border-0">
              <CardHeader className="pb-3 border-bottom bg-white">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="mb-1">
                      <Shield size={20} className="me-2" />
                      System Roles
                    </h5>
                    <span className="text-muted f-12">
                      Create and manage user roles and their permissions
                    </span>
                  </div>
                  <Button color="primary" size="sm" onClick={toggleModal}>
                    <Plus size={14} className="me-1" />
                    Add New Role
                  </Button>
                </div>
              </CardHeader>
              <CardBody className="p-0">
                <div className="table-responsive">
                  <Table className="table-hover mb-0">
                    <thead className="bg-light">
                      <tr>
                        <th className="ps-4">Role Name</th>
                        <th>Description</th>
                        <th className="text-center">Users</th>
                        <th className="text-center">Permissions</th>
                        <th className="text-center">Status</th>
                        <th className="text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {roles.map((role) => (
                        <tr key={role.id}>
                          <td className="ps-4">
                            <div className="d-flex align-items-center">
                              <div
                                className={`rounded-circle bg-${getRoleBadge(
                                  role.name
                                )}-light d-flex align-items-center justify-content-center me-2`}
                                style={{ width: "36px", height: "36px" }}
                              >
                                <Shield
                                  size={18}
                                  className={`text-${getRoleBadge(role.name)}`}
                                />
                              </div>
                              <div>
                                <div className="fw-semibold f-14">{role.name}</div>
                                <div className="text-muted f-11">
                                  Created: {role.createdAt}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="text-muted f-13">{role.description}</td>
                          <td className="text-center">
                            <Badge color="light" className="badge-sm">
                              <Users size={12} className="me-1" />
                              {role.users}
                            </Badge>
                          </td>
                          <td className="text-center">
                            <span className="fw-semibold">{role.permissions}</span>
                          </td>
                          <td className="text-center">
                            <Badge color="success" className="badge-sm">
                              {role.status}
                            </Badge>
                          </td>
                          <td className="text-center">
                            <Button
                              color="primary"
                              size="sm"
                              className="me-2"
                              outline
                              onClick={() => handleEdit(role)}
                            >
                              <Edit size={14} />
                            </Button>
                            <Button
                              color="danger"
                              size="sm"
                              outline
                              onClick={() => handleDelete(role.id)}
                              disabled={role.name === "Administrator"}
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
                    <p className="text-muted mb-1 f-12">Total Roles</p>
                    <h3 className="mb-0">{roles.length}</h3>
                  </div>
                  <div
                    className="rounded-circle bg-primary-light d-flex align-items-center justify-content-center"
                    style={{ width: "48px", height: "48px" }}
                  >
                    <Shield size={24} className="text-primary" />
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
                    <p className="text-muted mb-1 f-12">Total Users</p>
                    <h3 className="mb-0">
                      {roles.reduce((acc, role) => acc + role.users, 0)}
                    </h3>
                  </div>
                  <div
                    className="rounded-circle bg-success-light d-flex align-items-center justify-content-center"
                    style={{ width: "48px", height: "48px" }}
                  >
                    <Users size={24} className="text-success" />
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
                    <p className="text-muted mb-1 f-12">Total Permissions</p>
                    <h3 className="mb-0">156</h3>
                  </div>
                  <div
                    className="rounded-circle bg-info-light d-flex align-items-center justify-content-center"
                    style={{ width: "48px", height: "48px" }}
                  >
                    <Shield size={24} className="text-info" />
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
                    <p className="text-muted mb-1 f-12">Active Roles</p>
                    <h3 className="mb-0">
                      {roles.filter((r) => r.status === "Active").length}
                    </h3>
                  </div>
                  <div
                    className="rounded-circle bg-warning-light d-flex align-items-center justify-content-center"
                    style={{ width: "48px", height: "48px" }}
                  >
                    <Shield size={24} className="text-warning" />
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
          {editMode ? "Edit Role" : "Add New Role"}
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="roleName">Role Name *</Label>
              <Input
                type="text"
                id="roleName"
                placeholder="Enter role name"
                defaultValue={editMode ? selectedRole?.name : ""}
              />
            </FormGroup>
            <FormGroup>
              <Label for="roleDescription">Description *</Label>
              <Input
                type="textarea"
                id="roleDescription"
                rows="3"
                placeholder="Enter role description"
                defaultValue={editMode ? selectedRole?.description : ""}
              />
            </FormGroup>
            <FormGroup>
              <Label>Status</Label>
              <div>
                <div className="form-check form-check-inline">
                  <Input
                    className="form-check-input"
                    type="radio"
                    name="status"
                    id="active"
                    defaultChecked
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
                  />
                  <Label className="form-check-label" for="inactive">
                    Inactive
                  </Label>
                </div>
              </div>
            </FormGroup>
            <div className="d-flex justify-content-end gap-2 mt-4">
              <Button color="secondary" onClick={toggleModal}>
                Cancel
              </Button>
              <Button color="primary">
                {editMode ? "Update Role" : "Create Role"}
              </Button>
            </div>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default RolesCRUD;

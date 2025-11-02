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
import { Lock, Edit, Trash2, Plus, CheckSquare } from "react-feather";

const PermissionsCRUD = () => {
  const [modal, setModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedPermission, setSelectedPermission] = useState(null);
  const [permissions, setPermissions] = useState([
    {
      id: 1,
      name: "users.view",
      displayName: "View Users",
      description: "Can view user list and details",
      module: "User Management",
      type: "Read",
      assignedRoles: 5,
    },
    {
      id: 2,
      name: "users.create",
      displayName: "Create Users",
      description: "Can create new user accounts",
      module: "User Management",
      type: "Write",
      assignedRoles: 2,
    },
    {
      id: 3,
      name: "users.edit",
      displayName: "Edit Users",
      description: "Can modify user information",
      module: "User Management",
      type: "Write",
      assignedRoles: 2,
    },
    {
      id: 4,
      name: "users.delete",
      displayName: "Delete Users",
      description: "Can delete user accounts",
      module: "User Management",
      type: "Delete",
      assignedRoles: 1,
    },
    {
      id: 5,
      name: "roles.manage",
      displayName: "Manage Roles",
      description: "Can create and modify roles",
      module: "Security",
      type: "Write",
      assignedRoles: 1,
    },
    {
      id: 6,
      name: "permissions.manage",
      displayName: "Manage Permissions",
      description: "Can assign permissions to roles",
      module: "Security",
      type: "Write",
      assignedRoles: 1,
    },
    {
      id: 7,
      name: "clients.view",
      displayName: "View Clients",
      description: "Can view client information",
      module: "CRM",
      type: "Read",
      assignedRoles: 4,
    },
    {
      id: 8,
      name: "clients.create",
      displayName: "Create Clients",
      description: "Can add new clients",
      module: "CRM",
      type: "Write",
      assignedRoles: 3,
    },
    {
      id: 9,
      name: "api.manage",
      displayName: "Manage API",
      description: "Can configure API integrations",
      module: "Integrations",
      type: "Admin",
      assignedRoles: 1,
    },
    {
      id: 10,
      name: "reports.view",
      displayName: "View Reports",
      description: "Can access system reports",
      module: "Reports",
      type: "Read",
      assignedRoles: 4,
    },
  ]);

  const toggleModal = () => {
    setModal(!modal);
    if (!modal) {
      setEditMode(false);
      setSelectedPermission(null);
    }
  };

  const handleEdit = (permission) => {
    setSelectedPermission(permission);
    setEditMode(true);
    setModal(true);
  };

  const handleDelete = (permissionId) => {
    if (window.confirm("Are you sure you want to delete this permission?")) {
      setPermissions(permissions.filter((p) => p.id !== permissionId));
    }
  };

  const getTypeBadge = (type) => {
    const colors = {
      Read: "info",
      Write: "primary",
      Delete: "danger",
      Admin: "warning",
    };
    return colors[type] || "secondary";
  };

  const modules = [...new Set(permissions.map((p) => p.module))];

  return (
    <>
      <Breadcrumbs
        mainTitle="Permissions Management"
        parent="Admin"
        title="Permissions CRUD"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card className="shadow-sm border-0">
              <CardHeader className="pb-3 border-bottom bg-white">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="mb-1">
                      <Lock size={20} className="me-2" />
                      System Permissions
                    </h5>
                    <span className="text-muted f-12">
                      Define and manage granular access permissions
                    </span>
                  </div>
                  <Button color="primary" size="sm" onClick={toggleModal}>
                    <Plus size={14} className="me-1" />
                    Add New Permission
                  </Button>
                </div>
              </CardHeader>
              <CardBody className="p-0">
                <div className="table-responsive">
                  <Table className="table-hover mb-0">
                    <thead className="bg-light">
                      <tr>
                        <th className="ps-4">Permission</th>
                        <th>Description</th>
                        <th>Module</th>
                        <th className="text-center">Type</th>
                        <th className="text-center">Assigned Roles</th>
                        <th className="text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {permissions.map((permission) => (
                        <tr key={permission.id}>
                          <td className="ps-4">
                            <div>
                              <div className="fw-semibold f-14">
                                {permission.displayName}
                              </div>
                              <div className="text-muted f-11">
                                <code className="text-muted">{permission.name}</code>
                              </div>
                            </div>
                          </td>
                          <td className="text-muted f-13">{permission.description}</td>
                          <td>
                            <Badge color="light" className="badge-sm">
                              {permission.module}
                            </Badge>
                          </td>
                          <td className="text-center">
                            <Badge
                              color={getTypeBadge(permission.type)}
                              className="badge-sm"
                            >
                              {permission.type}
                            </Badge>
                          </td>
                          <td className="text-center">
                            <Badge color="secondary" className="badge-sm">
                              {permission.assignedRoles} roles
                            </Badge>
                          </td>
                          <td className="text-center">
                            <Button
                              color="primary"
                              size="sm"
                              className="me-2"
                              outline
                              onClick={() => handleEdit(permission)}
                            >
                              <Edit size={14} />
                            </Button>
                            <Button
                              color="danger"
                              size="sm"
                              outline
                              onClick={() => handleDelete(permission.id)}
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
                    <p className="text-muted mb-1 f-12">Total Permissions</p>
                    <h3 className="mb-0">{permissions.length}</h3>
                  </div>
                  <div
                    className="rounded-circle bg-primary-light d-flex align-items-center justify-content-center"
                    style={{ width: "48px", height: "48px" }}
                  >
                    <Lock size={24} className="text-primary" />
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
                    <p className="text-muted mb-1 f-12">Modules</p>
                    <h3 className="mb-0">{modules.length}</h3>
                  </div>
                  <div
                    className="rounded-circle bg-success-light d-flex align-items-center justify-content-center"
                    style={{ width: "48px", height: "48px" }}
                  >
                    <CheckSquare size={24} className="text-success" />
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
                    <p className="text-muted mb-1 f-12">Read Permissions</p>
                    <h3 className="mb-0">
                      {permissions.filter((p) => p.type === "Read").length}
                    </h3>
                  </div>
                  <div
                    className="rounded-circle bg-info-light d-flex align-items-center justify-content-center"
                    style={{ width: "48px", height: "48px" }}
                  >
                    <Lock size={24} className="text-info" />
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
                    <p className="text-muted mb-1 f-12">Write Permissions</p>
                    <h3 className="mb-0">
                      {permissions.filter((p) => p.type === "Write").length}
                    </h3>
                  </div>
                  <div
                    className="rounded-circle bg-warning-light d-flex align-items-center justify-content-center"
                    style={{ width: "48px", height: "48px" }}
                  >
                    <Lock size={24} className="text-warning" />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Permissions by Module */}
        <Row className="mt-4">
          <Col sm="12">
            <Card className="shadow-sm border-0">
              <CardHeader className="bg-white border-bottom">
                <h5 className="mb-0">Permissions by Module</h5>
              </CardHeader>
              <CardBody>
                <Row>
                  {modules.map((module, index) => (
                    <Col md="4" key={index} className="mb-3">
                      <div className="border rounded p-3">
                        <h6 className="mb-2">{module}</h6>
                        <p className="text-muted f-12 mb-0">
                          {permissions.filter((p) => p.module === module).length}{" "}
                          permissions
                        </p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Add/Edit Modal */}
      <Modal isOpen={modal} toggle={toggleModal} size="lg">
        <ModalHeader toggle={toggleModal}>
          {editMode ? "Edit Permission" : "Add New Permission"}
        </ModalHeader>
        <ModalBody>
          <Form>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Label for="permissionName">Permission Key *</Label>
                  <Input
                    type="text"
                    id="permissionName"
                    placeholder="e.g., users.view"
                    defaultValue={editMode ? selectedPermission?.name : ""}
                  />
                  <small className="text-muted">Use dot notation</small>
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="displayName">Display Name *</Label>
                  <Input
                    type="text"
                    id="displayName"
                    placeholder="e.g., View Users"
                    defaultValue={editMode ? selectedPermission?.displayName : ""}
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="description">Description *</Label>
              <Input
                type="textarea"
                id="description"
                rows="2"
                placeholder="Describe what this permission allows"
                defaultValue={editMode ? selectedPermission?.description : ""}
              />
            </FormGroup>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Label for="module">Module *</Label>
                  <Input
                    type="select"
                    id="module"
                    defaultValue={editMode ? selectedPermission?.module : ""}
                  >
                    <option value="">Select Module</option>
                    <option value="User Management">User Management</option>
                    <option value="Security">Security</option>
                    <option value="CRM">CRM</option>
                    <option value="Integrations">Integrations</option>
                    <option value="Reports">Reports</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label for="type">Permission Type *</Label>
                  <Input
                    type="select"
                    id="type"
                    defaultValue={editMode ? selectedPermission?.type : ""}
                  >
                    <option value="">Select Type</option>
                    <option value="Read">Read</option>
                    <option value="Write">Write</option>
                    <option value="Delete">Delete</option>
                    <option value="Admin">Admin</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <div className="d-flex justify-content-end gap-2 mt-4">
              <Button color="secondary" onClick={toggleModal}>
                Cancel
              </Button>
              <Button color="primary">
                {editMode ? "Update Permission" : "Create Permission"}
              </Button>
            </div>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default PermissionsCRUD;

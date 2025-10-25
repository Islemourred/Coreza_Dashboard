import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Table,
  Button,
  Badge,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import { Shield, Edit, Trash2, Plus, Check, X } from "react-feather";

const RolesPermissions = () => {
  const [modal, setModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  const roles = [
    { id: 1, name: "Admin", users: 3, permissions: 45, color: "danger" },
    {
      id: 2,
      name: "Sales Manager",
      users: 8,
      permissions: 32,
      color: "primary",
    },
    {
      id: 3,
      name: "Sales Representative",
      users: 24,
      permissions: 18,
      color: "info",
    },
    {
      id: 4,
      name: "Support Agent",
      users: 15,
      permissions: 22,
      color: "warning",
    },
    {
      id: 5,
      name: "Marketing User",
      users: 12,
      permissions: 25,
      color: "success",
    },
  ];

  const permissions = [
    {
      module: "Dashboard",
      view: true,
      create: false,
      edit: false,
      delete: false,
    },
    { module: "Clients", view: true, create: true, edit: true, delete: false },
    {
      module: "Opportunities",
      view: true,
      create: true,
      edit: true,
      delete: true,
    },
    { module: "Reports", view: true, create: true, edit: false, delete: false },
    { module: "Users", view: false, create: false, edit: false, delete: false },
    {
      module: "Settings",
      view: false,
      create: false,
      edit: false,
      delete: false,
    },
  ];

  const toggleModal = () => setModal(!modal);

  const editRole = (role) => {
    setSelectedRole(role);
    toggleModal();
  };

  return (
    <>
      <Breadcrumbs
        parent="Admin"
        title="Roles & Permissions"
        mainTitle="Roles & Permissions"
      />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h5 className="mb-0">Roles Management</h5>
                  <Button
                    color="primary"
                    size="sm"
                    onClick={() => editRole(null)}
                  >
                    <Plus size={16} className="me-1" /> Add Role
                  </Button>
                </div>
                <div className="table-responsive">
                  <Table hover>
                    <thead>
                      <tr>
                        <th>Role Name</th>
                        <th>Total Users</th>
                        <th>Permissions</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {roles.map((role) => (
                        <tr key={role.id}>
                          <td>
                            <div className="d-flex align-items-center">
                              <Shield
                                size={18}
                                className={`me-2 text-${role.color}`}
                              />
                              <strong>{role.name}</strong>
                            </div>
                          </td>
                          <td>{role.users} users</td>
                          <td>
                            <Badge color={role.color}>
                              {role.permissions} permissions
                            </Badge>
                          </td>
                          <td>
                            <Badge color="success" pill>
                              Active
                            </Badge>
                          </td>
                          <td>
                            <Button
                              color="primary"
                              size="sm"
                              className="me-2"
                              onClick={() => editRole(role)}
                            >
                              <Edit size={14} />
                            </Button>
                            <Button color="danger" size="sm">
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

        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <h5 className="mb-4">Permission Matrix</h5>
                <div className="table-responsive">
                  <Table bordered>
                    <thead>
                      <tr>
                        <th>Module</th>
                        <th className="text-center">View</th>
                        <th className="text-center">Create</th>
                        <th className="text-center">Edit</th>
                        <th className="text-center">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {permissions.map((perm, idx) => (
                        <tr key={idx}>
                          <td>
                            <strong>{perm.module}</strong>
                          </td>
                          <td className="text-center">
                            {perm.view ? (
                              <Check size={18} className="text-success" />
                            ) : (
                              <X size={18} className="text-danger" />
                            )}
                          </td>
                          <td className="text-center">
                            {perm.create ? (
                              <Check size={18} className="text-success" />
                            ) : (
                              <X size={18} className="text-danger" />
                            )}
                          </td>
                          <td className="text-center">
                            {perm.edit ? (
                              <Check size={18} className="text-success" />
                            ) : (
                              <X size={18} className="text-danger" />
                            )}
                          </td>
                          <td className="text-center">
                            {perm.delete ? (
                              <Check size={18} className="text-success" />
                            ) : (
                              <X size={18} className="text-danger" />
                            )}
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
      </Container>

      {/* Edit Role Modal */}
      <Modal isOpen={modal} toggle={toggleModal} size="lg">
        <ModalHeader toggle={toggleModal}>
          {selectedRole ? "Edit Role" : "Create New Role"}
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label>Role Name</Label>
              <Input
                type="text"
                placeholder="Enter role name"
                defaultValue={selectedRole?.name}
              />
            </FormGroup>
            <FormGroup>
              <Label>Description</Label>
              <Input
                type="textarea"
                rows="3"
                placeholder="Enter role description"
              />
            </FormGroup>
            <hr />
            <h6 className="mb-3">Permissions</h6>
            {permissions.map((perm, idx) => (
              <div key={idx} className="border-bottom pb-3 mb-3">
                <strong className="d-block mb-2">{perm.module}</strong>
                <div className="d-flex gap-3">
                  <FormGroup check>
                    <Input type="checkbox" defaultChecked={perm.view} />
                    <Label check>View</Label>
                  </FormGroup>
                  <FormGroup check>
                    <Input type="checkbox" defaultChecked={perm.create} />
                    <Label check>Create</Label>
                  </FormGroup>
                  <FormGroup check>
                    <Input type="checkbox" defaultChecked={perm.edit} />
                    <Label check>Edit</Label>
                  </FormGroup>
                  <FormGroup check>
                    <Input type="checkbox" defaultChecked={perm.delete} />
                    <Label check>Delete</Label>
                  </FormGroup>
                </div>
              </div>
            ))}
            <div className="d-flex justify-content-end gap-2 mt-4">
              <Button color="secondary" onClick={toggleModal}>
                Cancel
              </Button>
              <Button color="primary">Save Role</Button>
            </div>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default RolesPermissions;

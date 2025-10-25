import React, { Fragment, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Row, Col, Label, Input, FormGroup, Form } from 'reactstrap';
import { Btn } from '../../../AbstractElements';
import ContactAppContext from '../../../Helper/Contact/index';
import { Name, Save, Cancel, Email, Phone } from '../../../Constant';

const UpdateUser = ({ editdata, userEditCallback }) => {
  const { editUser } = useContext(ContactAppContext);
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const UpdateContact = (data) => {
    if (data !== '') {
    let withImageData ={...data,avatar:require("../../../assets/images/user/user.png")}
      editUser(withImageData);
      userEditCallback(false, withImageData);
      alert("Contact Update successfully")
    } else {
      errors.showMessages();
    }
  };
  return (
    <Fragment>
      <div className="contact-editform ps-0 m-auto">
        <Form onSubmit={handleSubmit(UpdateContact)}>
          <Row>
            <FormGroup className="col-md-12">
              <Label>{Name}</Label>
              <Row>
                <Col sm="6">
                  <input className="form-control" type="text" name="name" defaultValue={editdata.name} {...register('name', { required: true })} />
                  <span style={{ color: 'red' }}>{errors.name && 'First name is required'}</span>
                </Col>
                <Col sm="6">
                  <input className="form-control" type="text" name="surname" defaultValue={editdata.surname} {...register('surname', { required: true })} />
                  <span style={{ color: 'red' }}>{errors.surname && 'Last name is required'}</span>
                </Col>
              </Row>
            </FormGroup>
            <FormGroup className="col-md-12">
              <Label>{Email}</Label>
              <input className="form-control" type="text" name="email" defaultValue={editdata.email} {...register('email', { required: true })} />
              <span style={{ color: 'red' }}>{errors.email && 'Please enter email between 18 to 70 year.'}</span>
            </FormGroup>
            <FormGroup className="mb-3 col-md-12 my-0">
              <Row>
                <Col sm="6">
                  <Label htmlFor="con-phone">{Phone}</Label>
                  <input className="form-control" name="mobile" type="number" {...register('mobile', { required: true })} />
                  <span style={{ color: 'red' }}>{errors.mobile && 'Please enter Mobile no.'}</span>
                </Col>
                <Col sm="6">
                  <Label htmlFor="con-phone">Mobile</Label>
                  <Input type="select" className="form-control form-select" >
                    <option value="1">Mobile</option>
                    <option value="2">Work</option>
                    <option value="3">Other</option>
                  </Input>
                </Col>
              </Row>
            </FormGroup>
          </Row>
          <Btn attrBtn={{ color: 'secondary', className: 'update-contact me-1' }} >{Save}</Btn>&nbsp;&nbsp;
          <Btn attrBtn={{ color: 'primary', onClick: () => userEditCallback(false) }} >{Cancel}</Btn>
        </Form>
      </div>
    </Fragment>
  );
};

export default UpdateUser;
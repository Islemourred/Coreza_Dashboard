import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { Form, FormGroup, Label, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Btn } from '../../AbstractElements';
import { Cancel, Save } from '../../Constant';

const CreateTag = ({ tagCallback, tagModal }) => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const tagToggle = () => {
    tagCallback(false);
  };
  const AddTag = data => {
  };
  return (
    <Fragment>
      <Modal className="fade show modal-bookmark" isOpen={tagModal} toggle={tagToggle} size="lg">
        <ModalHeader className="modal-title">
          {'Create Tag'}
          <Btn attrBtn={{ color: 'transprant', className: 'btn-close', onClick: tagToggle, type: 'button', databsdismiss: 'modal', arialabel: 'Close' }}></Btn>
        </ModalHeader>
        <ModalBody>
          <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(AddTag)}>
            <div className="form-row">
              <FormGroup className="col-md-12">
                <Label>{'Tag Name'}</Label>
                <input className="form-control" name="name" type="text" {...register('name', { required: true })} />
                <span style={{ color: 'red' }}>{errors.name && 'First name is required'}</span>
              </FormGroup>
              <div className="col-md-12 form-group mb-0">
                <Label>{'Tag color'}</Label>
                <input className="form-control fill-color" name="color" type="color" {...register('color', { required: true })} defaultValue="#563d7c" />
              </div>
            </div>
            <Btn attrBtn={{ color: 'secondary' }} >{Save}</Btn>
            <Btn attrBtn={{ color: 'primary ms-1', onClick: tagToggle }} >{Cancel}</Btn>
          </Form>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};
export default CreateTag;
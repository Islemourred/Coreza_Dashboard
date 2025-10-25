import React, { Fragment, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { CheckCircle } from 'react-feather';
import { AddTask, TaskTitle, Collection, General, Description, Save, Cancel, NewTask } from '../../Constant';
import { Btn } from '../../AbstractElements';
import TaskContext from '../../Helper/task-app';

const NewTaskClass = () => {
  const { AddNewTask } = useContext(TaskContext);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [addModal, setaddModal] = useState(false);
  const addToggle = () => {
    setaddModal(!addModal);
  };

  const Addtask = data => {
    if (data !== '') {
      AddNewTask(data);
      setaddModal(false);
    } else {
      errors.showMessages();
    }
  };

  return (
    <Fragment>
      <Btn attrBtn={{ color: 'primary', className: 'badge-light btn-block btn-mail w-100', onClick: addToggle }}><CheckCircle className="me-2" />  {NewTask}</Btn>
      <Modal isOpen={addModal} toggle={addToggle} size="lg">
        <ModalHeader>{AddTask}
          <Btn attrBtn={{ color: 'transprant', className: 'btn-close', onClick: addToggle, type: 'button', databsdismiss: 'modal', arialabel: 'Close' }}></Btn>
        </ModalHeader>
        <ModalBody>
          <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(Addtask)}>
            <Row>
              <FormGroup className="col-md-12">
                <Label>{TaskTitle}</Label>
                <input className="form-control" name="title" type="text" {...register('title', { required: true })} />
                <span style={{ color: 'red' }}>{errors.title && 'Title is required'}</span>
              </FormGroup>
              <FormGroup className="col-md-12">
                <Label>{Collection}</Label>
                <Input className="js-example-disabled-results form-select" name="collection" type="select" >
                  <option value="general">{General}</option>
                  <option value="fs">{'Fs'}</option>
                </Input>
              </FormGroup>
              <div className="col-md-12">
                <Label>{Description}</Label>
                <input className="form-control" name="desc" type="textarea" {...register('desc', { required: true })} />
                <span style={{ color: 'red' }}>{errors.desc && 'Description is required'}</span>
              </div>
            </Row>
            <Btn attrBtn={{ color: 'secondary', className: 'me-1' }}>{Save}</Btn>&nbsp;&nbsp;
            <Btn attrBtn={{ color: 'primary', onClick: addToggle }} >{Cancel}</Btn>
          </Form>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};
export default NewTaskClass;
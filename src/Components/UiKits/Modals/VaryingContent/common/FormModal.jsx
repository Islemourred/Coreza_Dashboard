import React from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import CommonModal from '../../common/modal';

const FormModal = ({ modal, NewMessage, toggle, defaultVal }) =>{
    return(
      <CommonModal isOpen={modal} title={NewMessage } toggler={toggle} >
        <Form>
          <FormGroup>
            <Label className="col-form-label" for="recipient-name">{'Recipient:'}</Label>
            <Input className="form-control" type="text" defaultValue={defaultVal}/>
          </FormGroup>
          <FormGroup>
            <Label className="col-form-label" for="message-text">{'Message:'}</Label>
            <Input type="textarea" className="form-control" id="message-text"></Input>
          </FormGroup>
        </Form>
      </CommonModal>     
    
    );
};

export default FormModal;
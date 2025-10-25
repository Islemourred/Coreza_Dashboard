import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Btn } from '../../../../AbstractElements';
import { Close, SaveChanges } from '../../../../Constant';

const CommonModal = (props) => {
  return (
    <Modal isOpen={props.isOpen} toggle={props.toggler} size={props.size} centered>
      <ModalHeader toggle={props.toggler}>
        {props.title}
      </ModalHeader>
      <ModalBody className={props.bodyClass}>
        {props.children}
      </ModalBody>
      <ModalFooter>
        <Btn attrBtn={{ color: 'secondary', onClick: props.toggler }} >{Close}</Btn>
        <Btn attrBtn={{ color: 'primary', onClick: props.toggler }}>{SaveChanges}</Btn>
      </ModalFooter>
    </Modal>
  );
};

export default CommonModal;
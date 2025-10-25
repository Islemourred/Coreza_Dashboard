import { Cancel, PrintViews, Print } from '../../../Constant';
import PrintPreview from '../printpreview';
import { Btn } from '../../../AbstractElements';
import React, { Fragment, useRef } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import ReactToPrint from 'react-to-print';

const PrintModal = ({ printmodal, selectedUser, toggleCallback }) => {
  const printModalToggle = () => {
    toggleCallback(false);
  };

  const componentRef = useRef();
  return (
    <Fragment>
      <Modal isOpen={printmodal} toggle={printModalToggle} >
        <ModalHeader>{PrintViews}
          <Btn attrBtn={{ color: 'transprant', className: 'btn-close', onClick: printModalToggle, type: 'button' }}></Btn>
        </ModalHeader>
        <ModalBody className="list-persons">
          <PrintPreview selectedUser={selectedUser} ref={componentRef} />
          <ReactToPrint
            trigger={() => (
              <Btn attrBtn={{ color: 'secondary', className: 'me-1' }} >
                {Print}
              </Btn>
            )}
            content={() => componentRef.current}
          />&nbsp;&nbsp;
          <Btn attrBtn={{ color: 'primary', onClick: printModalToggle }} >{Cancel}</Btn>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default PrintModal;
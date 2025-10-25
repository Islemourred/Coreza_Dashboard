import  { Fragment, useState } from 'react';
import { Btn } from '../../../../../AbstractElements';
import { ModalTitle, Simple } from '../../../../../Constant';
import CommonModal from '../../common/modal';

const BasicBtn = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <Fragment>
      <Btn attrBtn={{ color: 'primary', onClick: toggle }} >{Simple}</Btn>
      <CommonModal isOpen={modal} title={ModalTitle} toggler={toggle} >....</CommonModal>
    </Fragment>
  );
};

export default BasicBtn;
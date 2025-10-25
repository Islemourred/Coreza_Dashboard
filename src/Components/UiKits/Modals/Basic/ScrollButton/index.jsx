import  { Fragment, useState } from 'react';
import { Btn, P } from '../../../../../AbstractElements';
import { LongLorem, ModalTitle, ScrollingLongContent } from '../../../../../Constant';
import CommonModal from '../../common/modal';

const ScrollBtn = () => {
  const [scrollingmodal, setscrollingModal] = useState(false);
  const Scrollmodaltoggle = () => setscrollingModal(!scrollingmodal);
  return (
    <Fragment>
      <Btn attrBtn={{ color: 'primary', onClick: Scrollmodaltoggle }} >{ScrollingLongContent}</Btn>
      <CommonModal isOpen={scrollingmodal} title={ModalTitle} toggler={Scrollmodaltoggle} >
        <P>{LongLorem}</P>
        <P>{LongLorem}</P>
        <P>{LongLorem}</P>
        <P>{LongLorem}</P>
        <P>{LongLorem}</P>
        <P>{LongLorem}</P>
      </CommonModal>
    </Fragment>
  );
};

export default ScrollBtn;
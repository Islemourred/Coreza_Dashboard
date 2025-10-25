import  { useState } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { Btn } from '../../../../AbstractElements';
import { LargeModal, SizesModal, SmallModal } from '../../../../Constant';
import CommonModal from '../common/modal';
import HeadingCommon from '../../../../Common/Component/HeadingCommon';

const SizesModals = () => {
  const [Large, setLarge] = useState(false);
  const [Small, setSmall] = useState(false);

  const LargeModaltoggle = () => setLarge(!Large);
  const SmallModaltoggle = () => setSmall(!Small);
  return (
    <Col md="5">
      <Card>
        <HeadingCommon Heading={SizesModal} CardHeaderClassName="pb-0" />
        <CardBody>
          <div className="btn-showcase">
            <Btn attrBtn={{ color: "primary", onClick: LargeModaltoggle }}>{LargeModal}</Btn>
            <CommonModal isOpen={Large} title={LargeModal} toggler={LargeModaltoggle} size="lg">...</CommonModal>
            <Btn attrBtn={{ color: "primary", onClick: SmallModaltoggle }} >{SmallModal}</Btn>
            <CommonModal isOpen={Small} title={SmallModal} toggler={SmallModaltoggle} size="sm">...</CommonModal>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SizesModals;
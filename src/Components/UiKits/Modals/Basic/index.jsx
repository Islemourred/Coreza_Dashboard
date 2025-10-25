import { Card, CardBody, Col } from 'reactstrap';
import { BasicModal } from '../../../../Constant';
import BasicBtn from './BasicButton';
import GridModal from './GridButton';
import ScrollBtn from './ScrollButton';
import TooltipModal from './Tooltip&Popover';
import VerticalBtn from './VerticalButton/VerticalBtn';
import HeadingCommon from '../../../../Common/Component/HeadingCommon';

const BasicModals = () => {
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={BasicModal} CardHeaderClassName="pb-0" />
        <CardBody>
          <div className="btn-showcase">
            <BasicBtn />
            <ScrollBtn />
            <VerticalBtn />
            <TooltipModal />
            <GridModal />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicModals;
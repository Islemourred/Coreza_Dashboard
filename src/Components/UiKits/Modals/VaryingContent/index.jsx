import { Card, CardBody, Col } from 'reactstrap';
import { VaryingModalContent } from '../../../../Constant';
import ModalButton from './common/ModalButton';
import HeadingCommon from '../../../../Common/Component/HeadingCommon';

const VaryingContent = () => {

  return (
    <Col md="7">
      <Card>
        <HeadingCommon Heading={VaryingModalContent} CardHeaderClassName="pb-0" />
        <CardBody>
          <div className="btn-showcase">
            <ModalButton btnText='Open modal for @Mdo' defaultVal='@Mdo' />
            <ModalButton btnText='Open modal for @Fat' defaultVal='@Fat' />
            <ModalButton btnText='Open modal for @getbootstrap' defaultVal='@getbootstrap' />
          </div>
        </CardBody>
      </Card>
    </Col>

  );
};

export default VaryingContent;
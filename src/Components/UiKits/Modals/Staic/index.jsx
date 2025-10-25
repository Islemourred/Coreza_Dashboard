import { Card, CardBody, Col, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Btn, P } from '../../../../AbstractElements';
import { Close, NewMessage, SendMessage, StaticExample } from '../../../../Constant';
import HeadingCommon from '../../../../Common/Component/HeadingCommon';

const StaticModal = () => {
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={StaticExample} CardHeaderClassName="pb-0" />
        <CardBody className='modal-page'>
          <div className="modal-dialog modal-lg mt-0 mb-0">
            <div className="modal-dialog mt-0 mb-0">
              <div className="modal-content">
                <ModalHeader>
                  {NewMessage}
                  <Btn attrBtn={{ color: 'transparent', className: 'btn-close', type: 'button' }}></Btn>
                </ModalHeader>
                <ModalBody>
                  <P>{'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}</P>
                </ModalBody>
                <ModalFooter>
                  <Btn attrBtn={{ color: "secondary" }}>{Close}</Btn>
                  <Btn attrBtn={{ color: "primary", className: "ms-1" }}>{SendMessage}</Btn>
                </ModalFooter>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StaticModal;
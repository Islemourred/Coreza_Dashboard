import { Col, Card, CardBody, Form } from "reactstrap";
import Dropzone from "react-dropzone-uploader";
import { MultipleImageVideoAudioUpload } from "../../../Constant";
import HeadingCommon from "../../../Common/Component/HeadingCommon";

const Dropzone3 = ({ getUploadParams, handleChangeStatus, handleSubmit }) => {
  return (
    <Col lg="6">
      <Card>
        <HeadingCommon Heading={MultipleImageVideoAudioUpload} CardHeaderClassName="pb-0"/>
        <CardBody>
          <Form>
            <div className="dz-message needsclick">
              <Dropzone
                getUploadParams={getUploadParams}
                onChangeStatus={handleChangeStatus}
                onSubmit={handleSubmit}
                accept="image/*,audio/*,video/*"
                styles={{
                  dropzone: { height: 200 },
                }}
              />
            </div>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Dropzone3;
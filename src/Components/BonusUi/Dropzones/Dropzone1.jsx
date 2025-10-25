import { Col, Card, CardBody, Form } from "reactstrap";
import Dropzone from "react-dropzone-uploader";
import { SingleFileUpload } from "../../../Constant";
import HeadingCommon from "../../../Common/Component/HeadingCommon";

const Dropzone1 = ({ getUploadParams, handleChangeStatus }) => {
  return (
    <Col lg="6">
      <Card>
        <HeadingCommon Heading={SingleFileUpload} CardHeaderClassName="pb-0" />
        <CardBody>
          <Form>
            <div className="dz-message needsclick">
              <Dropzone
                getUploadParams={getUploadParams}
                onChangeStatus={handleChangeStatus}
                maxFiles={1}
                multiple={false}
                canCancel={false}
                inputContent="Drop A File"
                styles={{
                  dropzone: { height: 200 },
                  dropzoneActive: { borderColor: "green" },
                }}
              />
            </div>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Dropzone1;

import { Col, Card, CardBody, Form } from "reactstrap";
import Dropzone from "react-dropzone-uploader";
import { CustomFileUpload } from "../../../Constant";
import HeadingCommon from "../../../Common/Component/HeadingCommon";

const Dropzone5 = ({ getUploadParams, handleSubmit }) => {
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={CustomFileUpload} CardHeaderClassName="pb-0" />
        <CardBody>
          <Form>
            <div className="dz-message needsclick">
              <Dropzone
                getUploadParams={getUploadParams}
                onSubmit={handleSubmit}
                inputContent="Drop Files (Custom Layout)"
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

export default Dropzone5;

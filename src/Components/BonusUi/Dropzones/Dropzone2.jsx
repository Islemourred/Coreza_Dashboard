import { Col, Card, CardBody, Form } from "reactstrap";
import Dropzone from "react-dropzone-uploader";
import { MultiImageUpload } from "../../../Constant";
import { ToastContainer } from "react-toastify";
import HeadingCommon from "../../../Common/Component/HeadingCommon";

const Dropzone2 = ({ getUploadParams, handleChangeStatus, handleSubmit }) => {
  return (
    <Col lg="6">
      <Card>
        <HeadingCommon Heading={MultiImageUpload} CardHeaderClassName="pb-0" />
        <CardBody>
          <Form>
            <ToastContainer />
            <div className="dz-message needsclick">
              <Dropzone
                getUploadParams={getUploadParams}
                onChangeStatus={handleChangeStatus}
                onSubmit={handleSubmit}
                accept="image/*"
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

export default Dropzone2;
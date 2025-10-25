import { Col, Card, CardBody, Form } from "reactstrap";
import Dropzone from "react-dropzone-uploader";
import { LimitationFileUpload } from "../../../Constant";
import HeadingCommon from "../../../Common/Component/HeadingCommon";

const Dropzone4 = ({ handleChangeStatus, handleSubmit }) => {
  return (
    <Col lg="6">
      <Card>
        <HeadingCommon Heading={LimitationFileUpload} CardHeaderClassName="pb-0"/>
        <CardBody>
          <Form>
            <div className="dz-message needsclick">
              <Dropzone
                onChangeStatus={handleChangeStatus}
                onSubmit={handleSubmit}
                maxFiles={3}
                inputContent="Drop 3 Files"
                inputWithFilesContent={(files) => `${3 - files.length} more`}
                submitButtonDisabled={(files) => files.length < 3}
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

export default Dropzone4;
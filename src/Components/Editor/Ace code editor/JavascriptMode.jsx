import { Card, CardBody,  Col } from 'reactstrap';
import AceEditor from 'react-ace';
import { Javadata } from './data';
import { JavascriptModes } from '../../../Constant';
import HeadingCommon from '../../../Common/Component/HeadingCommon';

const JavascriptMode = () => {
  return (
      <Col xl="6">
        <Card>
          <HeadingCommon  CardHeaderClassName="pb-0" Heading={JavascriptModes} />
          <CardBody>
            <AceEditor
              className="ace-editor"
              style={{ marginTop: '0px', width: '663px', height: '428px', marginLeft: '0px' }}
              mode="javascript"
              theme="monokai"
              value={Javadata}
              name="blah2"
              fontSize={14}
              showPrintMargin={true}
              showGutter={true}
              setOptions={{ useWorker: false }}
              editorProps={{ $blockScrolling: true }}
              highlightActiveLine={true} />
          </CardBody>
        </Card>
      </Col>
  );
};
export default JavascriptMode;
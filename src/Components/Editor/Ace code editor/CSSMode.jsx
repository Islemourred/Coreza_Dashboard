import { Card, CardBody,  Col } from 'reactstrap';
import AceEditor from 'react-ace';
import { CssData } from './data';
import { CssModes } from '../../../Constant';
import HeadingCommon from '../../../Common/Component/HeadingCommon';

const CssMode = () => {
  return (
      <Col xl="6">
        <Card>
          <HeadingCommon  CardHeaderClassName="pb-0" Heading={CssModes} />
          <CardBody>
            <AceEditor
              className="ace-editor"
              style={{ marginTop: '0px', width: '663px', height: '428px', marginLeft: '0px' }}
              mode="css"
              theme="monokai"
              value={CssData}
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
export default CssMode;
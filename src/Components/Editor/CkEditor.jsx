import React, { Fragment, useState } from 'react';
import CKEditors from 'react-ckeditor-component';
import { Container, Row, Col, Card,  CardBody } from 'reactstrap';
import { CKEditorExample } from '../../Constant';
import { Breadcrumbs} from '../../AbstractElements';
import HeadingCommon from "../../Common/Component/HeadingCommon"
const CkEditorContain = () => {
  const [content, setContent] = useState('content');
  const onChange = (evt) => {
    const newContent = evt.editor.getData();
    setContent(newContent);
  };
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Ck Editor" parent="Editor" title="Ck Editor" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <HeadingCommon CardHeaderClassName="pb-0" Heading={CKEditorExample} />
              <CardBody>
                <CKEditors
                  activeclassName="p10"
                  content={content}
                  events={{
                    'change': onChange
                  }}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default CkEditorContain;
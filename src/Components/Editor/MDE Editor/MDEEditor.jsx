import { MDEEditorExample } from '../../../Constant';
import { Breadcrumbs, } from '../../../AbstractElements';
import SmallEditor from './SmallEditor';
import React, { useState, Fragment } from 'react';
import { Container, Row, Col, Card,  CardBody } from 'reactstrap';
import SimpleMDE from 'react-simplemde-editor';
import HeadingCommon from '../../../Common/Component/HeadingCommon';

const MdeEDitorContain = () => {
  const [text, setText] = useState(`Enter text in the area on the left. For more info, click the ? (help) icon in the menu.`);
  const handleChange = () => {
    setText('Enter text in the area on the left. For more info, click the ? (help) icon in the menu.');
  };
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Mde Editor" parent="Editor" title="Mde Editor" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <HeadingCommon CardHeaderClassName="pb-0" Heading={MDEEditorExample} />
              <CardBody>
                <SimpleMDE
                  id="editor_container"
                  onChange={handleChange}
                  value={text}
                  options={{
                    autoFocus: true,
                    spellChecker: false
                  }}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <SmallEditor />
      </Container>
    </Fragment>
  );
};
export default MdeEDitorContain;
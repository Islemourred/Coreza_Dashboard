import { H3, P } from '../../../AbstractElements';
import React, { useState, Fragment } from 'react';
import {  Row, Col, Card, CardBody } from 'reactstrap';
import SimpleMDE from 'react-simplemde-editor';
import HeadingCommon from '../../../Common/Component/HeadingCommon';
import { SecondExample } from '../../../Constant';

const SmallEditor = () => {
  const [value, setValue] = useState();
  const handelChange = (e) => {
    setValue(e);
  };
  return (
    <Fragment>
      <Row>
        <Col sm="12">
          <Card>
            <HeadingCommon  CardHeaderClassName="pb-0" Heading={SecondExample} />
            <CardBody>
              <Row>
                <Col md="6">
                  <SimpleMDE
                    id="editor_container"
                    options={{
                      autoFocus: true,
                      spellChecker: false
                    }}
                    onChange={handelChange} />
                </Col>
                <div className="col-md-6 reader">
                  <H3>Instructions</H3>
                  <P attrPara={{ className: 'mb-0' }}>{'Enter text in the area on the left. For more info, click the ? (help) icon in the menu.'}</P><br />
                  {value}
                </div>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};
export default SmallEditor;
import { H4, P } from '../../../../AbstractElements';
import React, { Fragment, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Button, Card, CardBody, CardHeader, Col, Input } from 'reactstrap';

const ClipboardTextarea = () => {
    const vall = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has';
    const [state, setState] = useState({
        value: vall,
        copied: false
    });
    return (
      <Fragment>
        <Col sm="12" md="6" >
          <Card>
            <CardHeader className="pb-0">
              <H4>Clipboard On Textarea</H4>
            </CardHeader>
            <CardBody >
              <div className="clipboaard-container">
                <P attrPara={{ className: 'card-description' }}>Cut/copy from textarea</P>
                <Input className="form-control" id="clipboardExample2" type="textarea" rows="1" spellCheck="false" value={state.value} onChange={({ target: { value } }) => setState({ value, copied: false })}></Input>
                <div className="mt-3">
                  <CopyToClipboard text={state.value}
                                    onCopy={() => setState({ copied: true })}>
                    <Button className="btn-clipboard me-2" color="primary">
                      <i className="fa fa-copy"></i> Copy
                    </Button>
                  </CopyToClipboard>

                  <CopyToClipboard text={state.value}
                                    onCopy={() => setState({ copied: true, value: '' })}>
                    <Button className="btn-clipboard-cut" color="secondary">
                      <i className="fa fa-cut"></i> Cut
                    </Button>
                  </CopyToClipboard>

                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Fragment >
    );
};
export default ClipboardTextarea;
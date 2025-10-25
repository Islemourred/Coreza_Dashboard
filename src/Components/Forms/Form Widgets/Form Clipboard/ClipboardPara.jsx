import {  H4, H6, P } from '../../../../AbstractElements';
import React, { Fragment, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Button, Card, CardBody, CardHeader, Col } from 'reactstrap';

const ClipboardPara = () => {
    const vall = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    const [state, setState] = useState({
        value: vall,
        copied: false
    });
    return (
      <Fragment>
        <Col sm="12" md="6">
          <Card>
            <CardHeader className="pb-0">
              <H4>Clipboard On Paragraph</H4>
            </CardHeader>
            <CardBody>
              <div className="clipboaard-container">
                <P className="card-description">Copy from Paragraph</P>
                <CopyToClipboard text={state.value}
                                onCopy={() => setState({ copied: true })}>
                  <H6 attrH6={{ className: 'border rounded card-body f-w-300' }}>
                    {vall}
                  </H6>
                </CopyToClipboard>
                <div className="mt-3">
                  <CopyToClipboard text={state.value}
                                    onCopy={() => setState({ copied: true })}>
                    <Button className="btn-clipboard" color="primary">
                      <i className="fa fa-copy"></i> Copy
                    </Button>
                  </CopyToClipboard>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Fragment>
    );
};
export default ClipboardPara;
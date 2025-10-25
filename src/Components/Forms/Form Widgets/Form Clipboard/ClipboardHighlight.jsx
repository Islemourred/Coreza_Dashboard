import { H4, H6, P } from '../../../../AbstractElements';
import React, { Fragment, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Button, Card, CardBody, CardHeader, Col } from 'reactstrap';

const ClipboardHighlight = () => {
    const Highlight = 'dolor ertrsiertertt amet';
    const [state, setState] = useState({
        value: Highlight,
        copied: false
    });
    return (
      <Fragment>
        <Col sm="12" md="6">
          <Card>
            <CardHeader className="pb-0">
              <H4>Copy Portion From Paragraph</H4>
            </CardHeader>
            <CardBody>
              <div className="clipboaard-container">
                <P className="card-description">Copy Portion From Paragraph</P>
                <H6 attrH6={{ className: 'border rounded card-body f-w-300' }}>Lorem ipsum 
                  <span className="bg-primary text-white p-1" >{Highlight}</span>, 
                  consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </H6>
                <div className="mt-3">
                  <CopyToClipboard text={state.value}
                                    onCopy={() => setState({ copied: true })}>
                    <Button className="btn-clipboard" color="primary">
                      <i className="fa fa-copy"></i> Copy highlighted text
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
export default ClipboardHighlight;
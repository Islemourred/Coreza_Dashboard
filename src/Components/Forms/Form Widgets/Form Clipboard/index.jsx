import ClipboardHighlight from './ClipboardHighlight';
import ClipboardPara from './ClipboardPara';
import ClipboardText from './ClipboardText';
import ClipboardTextarea from './ClipboardTextarea';
import { Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../../AbstractElements';
import React, { Fragment } from 'react';

const FormClipboardContain = () => {
    return (
      <Fragment>
        <Breadcrumbs mainTitle="Clipboard" parent="Form Widget" title="Clipboard" />
        <Container fluid={true}>
          <Row>
            <ClipboardText />
            <ClipboardTextarea />
            <ClipboardPara />
            <ClipboardHighlight />
          </Row>
        </Container>
      </Fragment>
    );
};
export default FormClipboardContain;
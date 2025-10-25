import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import CssMode from './CSSMode';
import HtmlMode from './HTMLMode';
import JavascriptMode from './JavascriptMode';
import JavaMode from './Java';
import { Breadcrumbs } from '../../../AbstractElements';

const ACEEditorContain = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="ACE Editor" parent="Editor" title="ACE Editor" />
      <Container fluid={true}>
        <Row>
          <JavascriptMode />
          <HtmlMode />
          <CssMode />
          <JavaMode />
        </Row>
      </Container>
    </Fragment>
  );
};
export default ACEEditorContain;
import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import DefaultLists from './DefaultLists';
import { Breadcrumbs } from '../../../AbstractElements';
import LinksButtons from './LinksButtons';
import FlushStyles from './FlushStyle';
import ContextualClass from './ContextualClasses';
import WithBadge from './WithBadge';
import CustomContents from './CustomContent';
import JavascriptBase from './JavascriptBehaviour';
import WithIcons from './WithIcon';
import WithImage from './WithImage';
import WithImageRound from './WithRoundImage';

const List = () => {

  return (
    <Fragment>
      <Breadcrumbs parent="Ui Kits" title="Lists" mainTitle="Lists" />
      <Container fluid={true} className="ui-list">
        <Row>
          <DefaultLists />
          <LinksButtons />
          <FlushStyles />
          <ContextualClass />
          <WithBadge />
          <CustomContents />
          <JavascriptBase />
          <WithIcons />
          <WithImage />
          <WithImageRound />
        </Row>
      </Container>
    </Fragment>
  );
};

export default List;
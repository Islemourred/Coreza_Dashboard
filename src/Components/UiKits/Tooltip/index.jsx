import { Fragment } from 'react';
import { Container,Row } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import Directions from './Direction';
import HtmlElement from './HtmlElement';

const Tooltips = () => {
    return (
      <Fragment>
        <Breadcrumbs mainTitle="Tooltip" parent="Ui Kits" title="Tooltip" />
        <Container fluid={true}>
          <Row>
            <Directions />
            <HtmlElement />
          </Row>
        </Container>
      </Fragment>
    );
};

export default Tooltips;
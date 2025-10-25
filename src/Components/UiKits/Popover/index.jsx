import  { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import Basic from './Basic';
import Directions from './Direction';

const PopOvers = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Popover" parent="Ui Kits" title="Popover" />
      <Container fluid={true}>
        <Row className="popover-main">
          <Basic />
          <Directions />
        </Row>
      </Container>
    </Fragment>
  );
};
export default PopOvers;
import { Fragment } from 'react';
import { Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import Basic from './Basic/index';
import Small from './Small/index';
import Custom from './Custom/index';
import MultiBars from './MultiBars/index';
import Striped from './Stripped/index';
import Animated from './Animated/index';

const Progressbars = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Progress" parent="Ui Kits" title="Progress" />
      <Container fluid={true}>
        <Row>
          <Basic />
          <Small />
          <Custom />
          <MultiBars />
          <Striped />
          <Animated />
        </Row>
      </Container>
    </Fragment>
  );
};

export default Progressbars;
import React, { Fragment } from 'react';
import { Container } from 'reactstrap';
import Hover1 from './HoverGallery/Hover1';
import Hover2 from './HoverGallery/Hover2';
import Hover3 from './HoverGallery/Hover3';
import Hover4 from './HoverGallery/Hover4';
import Hover5 from './HoverGallery/Hover5';
import Hover6 from './HoverGallery/Hover6';
import Hover7 from './HoverGallery/Hover7';
import Hover8 from './HoverGallery/Hover8';
import Hover9 from './HoverGallery/Hover9';
import Hover10 from './HoverGallery/Hover10';
import Hover11 from './HoverGallery/Hover11';
import Hover12 from './HoverGallery/Hover12';
import Hover13 from './HoverGallery/Hover13';
import Hover14 from './HoverGallery/Hover14';
import Hover15 from './HoverGallery/Hover15';
import { Breadcrumbs } from '../../AbstractElements';

const ImageHoverContain = () => {
  return (
    <Fragment>
       <Breadcrumbs mainTitle="Image Hover" parent="Gallery" title="Image Hover" />
      <Container fluid={true}>
        <Hover1 />
        <Hover2 />
        <Hover3 />
        <Hover4 />
        <Hover5 />
        <Hover6 />
        <Hover7 />
        <Hover8 />
        <Hover9 />
        <Hover10 />
        <Hover11 />
        <Hover12 />
        <Hover13 />
        <Hover14 />
        <Hover15 />
      </Container>
    </Fragment>
  );
};
export default ImageHoverContain;

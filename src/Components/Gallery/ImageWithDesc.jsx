import GalleryContext from '../../Helper/Gallery';
import SingleImage from './ImageGallery/SingleImage';
import ListOfImageDesc from './ImageGallery/ListOfImgDesc';
import React, { Fragment, useState, useContext, useCallback } from 'react';
import { Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../AbstractElements';

const ImageWithDescContain = () => {
    const { images, smallImages } = useContext(GalleryContext);
    const initilindex = { index: 0, isOpen: false };
    const [photoIndex, setPhotoIndex] = useState(initilindex);
    // eslint-disable-next-line
    const callback = useCallback((photo) => {
        setPhotoIndex(photo);
    });
    return (
      <Fragment>
         <Breadcrumbs mainTitle="Image With Description" parent="Gallery" title="Image With Description" />
        <Container fluid={true}>
          <Row>
            <ListOfImageDesc smallImages={smallImages} setPhotoIndex={callback} photoIndex={photoIndex} withDesc={true} />
          </Row>
        </Container>
        <SingleImage photoIndex={photoIndex} setPhotoIndex={callback} images={images} />
      </Fragment>
    );
};


export default ImageWithDescContain;
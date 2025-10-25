import React, { Fragment, useState, useEffect } from 'react';
import { Col, Row, Card, CardBody } from 'reactstrap';
import Lightbox from 'react-image-lightbox';
import axios from 'axios';
import { PortfolioTitle } from '../../Constant';
import { H4, P, Image } from '../../AbstractElements';
import PagesSort from './Pages';

const PhotosTab = () => {
  const description = 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy.';
  const [imagess, setImage] = useState([]);
  const [smallImages, setsmallImages] = useState([]);
  const initilindex = { index: 0, isOpen: false };
  const [photoIndex, setPhotoIndex] = useState(initilindex);

  const onMovePrev = () => {
    const prev = (photoIndex.index + imagess.length - 1) % imagess.length;
    setPhotoIndex({ ...photoIndex, index: prev });
  };

  const onMoveNext = () => {
    const next = (photoIndex.index + 1) % imagess.length;
    setPhotoIndex({ ...photoIndex, index: next });
  };

  useEffect(() => {

    axios.get(`${process.env.PUBLIC_URL}/api/image-light.json`).then((response) => {
      setImage(response.data.src);
    });

    axios.get(`${process.env.PUBLIC_URL}/api/image-big-light.json`).then((response) => {
      setsmallImages(response.data.src);
    });

  }, []);
  var images = require.context('../../assets/images', true);
  const dynamicImage = (image) => {
    return images(`./${image}`);
  };
  return (
    <Fragment>
      <Row>
        {smallImages &&
          <Col sm="12">
            <Card>
              <CardBody className="my-gallery row gallery-with-description">
                {
                  smallImages && smallImages.map((item, i) => {
                    return (
                      <figure className="col-xl-3 col-sm-6" key={i}>
                        <a href="#javascript" data-size="1600x950">
                          <Image attrImage={{
                            src: `${dynamicImage(item)}`,
                            alt: 'Gallery',
                            className: 'img-thumbnail',
                            onClick: () =>
                              setPhotoIndex({ ...photoIndex, index: i, isOpen: true })
                          }} />
                          <div className="caption">
                            <H4>{PortfolioTitle}</H4>
                            <P>{description}</P>
                          </div>
                        </a>
                      </figure>
                    );
                  })}
              </CardBody>
            </Card>
          </Col>}
      </Row>
      <PagesSort />
      {photoIndex.isOpen && (
        <Lightbox
          mainSrc={require(`../../assets/images/${imagess[photoIndex.index]}`)}
          nextSrc={require(`../../assets/images/${imagess[(photoIndex.index + 1) % imagess.length]}`)}
          prevSrc={require(`../../assets/images/${imagess[(photoIndex.index + imagess.length - 1) % imagess.length]}`)}
          imageTitle={photoIndex.index + 1 + '/' + imagess.length}
          onCloseRequest={() => setPhotoIndex({ ...photoIndex, isOpen: false })}
          onMovePrevRequest={onMovePrev}
          onMoveNextRequest={onMoveNext}
        />
      )}
    </Fragment>
  );
};

export default PhotosTab;
import { MasonryGallery } from '../../Constant';
import GalleryContext from '../../Helper/Gallery';
import { H4, Image, Breadcrumbs } from '../../AbstractElements';
import React, { Fragment, useContext } from 'react';
import Masonry from 'react-masonry-css';
import { Container, Row, Col, Card, CardBody, CardHeader } from 'reactstrap';

const MesonryGalleryContain = () => {
  const { masonryImg } = useContext(GalleryContext);
  const styles = { width: '100%' };
  const breakpointColumnsObj = {
    default: 4,
    1199: 3,
    700: 2,
    500: 1
  };
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Masonry Gallery" parent="Gallery" title="Masonry Gallery" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H4>{MasonryGallery}</H4>
              </CardHeader>
              <CardBody className="photoswipe-pb-responsive">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-gallery row grid gallery"
                  columnClassName="col-md-3 col-6 grid-item">
                  {masonryImg.map((element) =>
                    <figure key={element.id} >
                      <Image attrImage={{ src: require(`../../assets/images/${element.src}`), style: styles, alt: '' }} />
                    </figure>
                  )}
                </Masonry>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

    </Fragment>
  );
};

export default MesonryGalleryContain;
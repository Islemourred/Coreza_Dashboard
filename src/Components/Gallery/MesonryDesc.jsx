import React, { Fragment, useContext } from 'react';
import Masonry from 'react-masonry-css';
import { Container, Row, Col, Card, CardBody, CardHeader } from 'reactstrap';
import { PortfolioTitle } from '../../Constant';
import { Breadcrumbs, H4, Image, LI, P } from '../../AbstractElements';
import GalleryContext from '../../Helper/Gallery';

const MesonryDescContain = () => {
  const { masonryImg } = useContext(GalleryContext);
  const breakpointColumnsObj = {
    default: 4,
    1199: 3,
    700: 2,
    500: 1
  };
  const styles = { width: '100%' };
  return (
    <Fragment>
         <Breadcrumbs mainTitle="Mesonry Description" parent="Gallery" title="Mesonry Description" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className=" pb-0">
                <H4>MASONRY GALLERY WITH DESCRIPTION</H4>
              </CardHeader>
              <CardBody className="photoswipe-pb-responsive">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid masonry-with-dec my-gallery gallery-with-description row grid"
                  columnClassName="col-xl-3 col-sm-6 col-md-4 grid-item"
                >
                  {masonryImg.map((element) =>
                    <LI style={{ listStyle: 'none' }} key={element.id} >
                      <a href="#javascript" data-size="1600x950">
                        <Image attrImage={{ src: require(`../../assets/images/${element.src}`), style: styles, alt: '' }} />
                        <div className="caption">
                          <H4>{PortfolioTitle}</H4>
                          <P>{'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy.'}</P>
                        </div>
                      </a>
                    </LI>
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

export default MesonryDescContain;
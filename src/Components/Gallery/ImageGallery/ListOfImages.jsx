import { IMAGE_GALLERY } from '../../../Constant';
import { H4, Image } from '../../../AbstractElements';
import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

const ListOfImage = ({ smallImages, setPhotoIndex, photoIndex }) => {
  return (
    <Fragment>
      {smallImages.length > 0 &&
        <Col sm="12">
          <Card>
            <CardHeader className='pb-0'>
              <H4>{IMAGE_GALLERY}</H4>
            </CardHeader>
            <CardBody className="my-gallery">
              <Row className='gallery-sec'>
                {
                  smallImages && smallImages.map((item, i) => {
                    return (
                      <figure className="col-xl-3 col-sm-6" key={i}>
                        <Image
                          attrImage={{
                            src: require(`../../../assets/images/${item}`),
                            alt: 'Gallery',
                            className: 'img-thumbnail',
                            onClick: () =>
                              setPhotoIndex({ ...photoIndex, index: i, isOpen: true })
                          }}
                        />
                      </figure>
                    );
                  })}
              </Row>
              
            </CardBody>
          </Card>
        </Col>
      }
    </Fragment>
  );
};

export default ListOfImage;
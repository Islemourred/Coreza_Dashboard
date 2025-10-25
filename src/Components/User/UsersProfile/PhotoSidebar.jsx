import {  LI, UL, Image } from '../../../AbstractElements';
import { LatestPhotosData } from '../../../Data/users/index';
import  {  useState } from 'react';
import { Card, CardBody,  Col, Collapse } from 'reactstrap';
import PhotoSidebarHeader from './PhotoSidebarHeader';

const PhotoSidebar = () => {
  const [LatestPhoto, setisLatestPhoto] = useState(true);
  const toggleClick = () => setisLatestPhoto(!LatestPhoto)
  return (
      <Col sm="12">
        <Card>
          <PhotoSidebarHeader toggleClick={toggleClick} />
          <Collapse isOpen={LatestPhoto}>
            <CardBody className="photos filter-cards-view">
              <UL attrUL={{ className: 'simple-list flex-row' }}>
                {LatestPhotosData.map((item) =>
                  <LI key={item.id}>
                    <div className="latest-post"><Image attrImage={{ className: 'img-fluid', alt: 'image', src: `${(item.img)}` }} /></div>
                  </LI>
                )}
              </UL>
            </CardBody>
          </Collapse>
        </Card>
      </Col>
  );
};
export default PhotoSidebar;
import React, { Fragment, useState } from 'react';
import { Col, Card, CardHeader, CardBody } from 'reactstrap';
import { Btn, H5, LI, UL } from '../../../../AbstractElements';
import Image from '../../../../CommonElements/Media';
import { LatestPhotosData } from '../../../../Data/Bonus-ui';

const LatestPhotos = () => {

  const [isShow, setIsShow] = useState(true);

  const toggleClick = () => {
    setIsShow(!isShow);
  };

  return (
    <Fragment>
      <Col xl="12" md="12" sm="6">
        <Card>
          <CardHeader>
            <H5 attrH5={{ className: 'p-0 mb-0' }} >
              <Btn attrBtn={{
                className: 'btn btn-link ps-0', databstoggle: 'collapse', databstarget: '#collapseicon4'
                , ariaexpanded: 'true', ariacontrols: 'collapseicon4', color: 'transperant', onClick: toggleClick
              }} >Latest Photos</Btn>
            </H5>
          </CardHeader>
          <div className={`collapse ${isShow && 'show'}`} id="collapseicon4" data-parent="#accordion" aria-labelledby="collapseicon4">
            <CardBody className="card-body photos filter-cards-view">
              <UL attrUL={{ className: 'simple-list flex-row' }}>
                {LatestPhotosData.map((item) =>
                  <LI key={item.id}>
                    <div className="latest-post">
                      <Image attrImage={{ className: 'img-fluid', alt: '', src: item.img }} />
                    </div>
                  </LI>
                )}
              </UL>
            </CardBody>
          </div>
        </Card>
      </Col>
    </Fragment >
  );
};

export default LatestPhotos;
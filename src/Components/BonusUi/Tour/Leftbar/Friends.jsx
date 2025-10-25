import React, { Fragment, useState } from 'react';
import { Col, Card, CardHeader, CardBody } from 'reactstrap';
import { FriendsData } from '../../../../Data/Bonus-ui';
import Image from '../../../../CommonElements/Media';
import { Btn, H5 } from '../../../../AbstractElements';

const Friends = () => {

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
              }} >Friends</Btn>
            </H5>
          </CardHeader>
          <div className={`collapse ${isShow && 'show'}`} id="collapseicon13" data-parent="#accordion" aria-labelledby="collapseicon13">
            <CardBody className="avatar-showcase filter-cards-view">
              {
                FriendsData.map((item) =>
                  <div className="d-inline-block friend-pic" key={item.id}>
                    <Image attrImage={{ className: 'img-50 rounded-circle', src: `${item.img}`, alt: '#' }} />
                  </div>
                )
              }
            </CardBody>
          </div>
        </Card>
      </Col>
    </Fragment>
  );
};

export default Friends;
import React, { Fragment } from 'react';
import { LI, UL, Image, H6 } from '../../../../AbstractElements';

const PostReact = ({ h6 }) => {
  return (
    <Fragment>
      <div className="post-react">
        <UL attrUL={{ as: 'ul', className: 'flex-row simple-list' }}>
          <LI><Image attrImage={{ className: 'rounded-circle', src: `${require('../../../../assets/images/user/3.jpg')}`, alt: '' }} /></LI>
          <LI><Image attrImage={{ className: 'rounded-circle', src: `${require('../../../../assets/images/user/5.jpg')}`, alt: '' }} /></LI>
          <LI><Image attrImage={{ className: 'rounded-circle', src: `${require('../../../../assets/images/user/1.jpg')}`, alt: '' }} /></LI>
        </UL>
        <H6>{h6}</H6>
      </div>
    </Fragment>
  );
};

export default PostReact;
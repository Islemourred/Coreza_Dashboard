import React, { Fragment } from 'react';
import { LI, UL, Image, H6 } from '../../../../AbstractElements';
import { dynamicImage } from '../../../../Services';

const PostReact = ({ h6 }) => {
  return (
    <Fragment>
      <div className="post-react">
        <UL attrUL={{ as: 'ul', className: 'flex-row simple-list' }}>
          <LI>
            <Image attrImage={{ className: 'rounded-circle', src: dynamicImage('user/3.jpg'), alt: 'postReactions' }} />
          </LI>
          <LI>
            <Image attrImage={{ className: 'rounded-circle', src: dynamicImage('user/5.jpg'), alt: 'postReactions' }} />
          </LI>
          <LI>
            <Image attrImage={{ className: 'rounded-circle', src: dynamicImage('user/1.jpg'), alt: 'postReactions' }} />
          </LI>
        </UL>
        <H6 attrH6={{ className: 'f-w-500' }}>{h6}</H6>
      </div>
    </Fragment>
  );
};

export default PostReact;
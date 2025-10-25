import { MARKJENCO, MARKJENCOEMAIL } from '../../../Constant';
import { H6, Image, P } from '../../../AbstractElements';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const HeaderProfile = () => {
  return (
    <Fragment>
      <div className='d-flex align-items-center'>
        <div className="media-size-email">
          <Image attrImage={{ className: 'me-3 rounded-circle', src: `${require('../../../assets/images/user/user.png')}`, alt: '' }} />
        </div>
        <div className='flex-grow-1'>
          <H6 attrH6={{ className: 'f-w-600' }} >
            <Link to={`${process.env.PUBLIC_URL}/users/userprofile`}>{MARKJENCO}</Link></H6>
          <P attrPara={{ className:'mb-0' }}>{MARKJENCOEMAIL}</P>
         </div>
       </div>
    </Fragment>
  );
};

export default HeaderProfile;
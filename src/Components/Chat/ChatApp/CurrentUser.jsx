import React, { Fragment, useContext } from 'react';
import ChatAppContext from '../../../Helper/chat-app/index';
import { Image } from '../../../AbstractElements';
import { Link } from 'react-router-dom';
import { dynamicImage } from '../../../Services';

const CurrentUser = () => {
    const { currentUserr } = useContext(ChatAppContext);

    return (
      <Fragment>
        {currentUserr && <div className="d-flex">
          <Image attrImage={{
                    src: `${dynamicImage(currentUserr.thumb)}`
                    , className: 'rounded-circle user-image'
                    , alt: ''
                }} />
              <div className='flex-grow-1'>
                <div className="about">
                  <Link to={`${process.env.PUBLIC_URL}/users/userprofile`}>
                    <div className="name f-w-600">{currentUserr.name}</div>
                  </Link>
                  <div className="status">{currentUserr.status}</div>
                </div>
              </div>
        </div>}
      </Fragment>
    );
};

export default CurrentUser;
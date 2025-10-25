import React, { Fragment } from 'react';
import { H5, H6, Image } from '../../../../AbstractElements';
import { Link } from 'react-router-dom';

const PostHeader = ({ h6 }) => {
    return (
      <Fragment>
        <div className="post-header">
          <div className="d-flex">
            <Image attrImage={{ className: 'img-thumbnail rounded-circle me-3', src: `${require('../../../../assets/images/user/7.jpg')}`, alt: 'Generic placeholder image' }} />
            <div className="flex-grow-1 align-self-center">
              <Link to={`${process.env.PUBLIC_URL}/social-app`}>
                <H5 attrH5={{ className: 'user-name' }} >Emay Walter</H5>
              </Link>
              <H6 attrH6={{className: 'f-w-500'}}>{h6}</H6>
            </div>
          </div>
          <div className="post-setting">
            <i className="fa fa-ellipsis-h"></i>
          </div>
        </div>
      </Fragment>
    );
};

export default PostHeader;
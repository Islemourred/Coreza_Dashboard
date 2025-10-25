import React, { Fragment } from 'react';
import { Col } from 'reactstrap';
import { NoBookmarksFound } from '../../Constant';

const NoBookmark = () => {
    return (
        <Fragment>
            <Col xl="12">
                <div className="no-favourite">
                    <span>{NoBookmarksFound}</span>
                </div>{' '}
            </Col>
        </Fragment>
    );
};
export default NoBookmark;
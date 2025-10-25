import React, { Fragment } from 'react';
import { H6, UL } from '../../../../AbstractElements';
import { Bookmark } from '../../../../Constant';
import BookmarkList from './BookmarkList';

const RemoveBookmark = ({ bookmarkItems }) => {
    return (
        <Fragment>
            <div className="front dropdown-title p-0">
                <H6 attrH6={{ className: 'f-18 mb-4 p-20' }}>{Bookmark}</H6>
                <UL attrUL={{ className: 'simple-list pt-0 p-3 bookmark-dropdown' }}>
                    <BookmarkList bookmarkItems={bookmarkItems} />
                </UL>
            </div>
        </Fragment>
    );
};
export default RemoveBookmark;
import React, { Fragment, useContext } from 'react';
import { Grid, List } from 'react-feather';
import { LI, UL } from '../../AbstractElements';
import BookmarkContext from '../../Helper/bookmark';

const ViewBookmark = () => {
  const { setgridView } = useContext(BookmarkContext);
  const Gridbookmark = () => {
    setgridView(true);
  };
  const Listbookmark = () => {
    setgridView(false);
  };
  return (
    <Fragment>
      <UL attrUL={{ className: 'simple-list d-flex flex-row' }}>
        <LI>
          <a className="grid-bookmark-view" href="#javascript">
            <Grid onClick={Gridbookmark} />
          </a>
        </LI>
        <LI>
          <a className="list-layout-view" href="#javascript">
            <List onClick={Listbookmark} />
          </a>
        </LI>
      </UL>
    </Fragment>
  );
};
export default ViewBookmark;
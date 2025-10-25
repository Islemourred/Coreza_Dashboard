import React, { Fragment, useContext } from 'react';
import { Card, CardBody, CardHeader, TabContent, TabPane, } from 'reactstrap';
import { CreatedByMe, Favourites, MyBookmark, Newsletter, Notification, NoBookmarksFound } from '../../Constant';
import { H5 } from '../../AbstractElements';
import BookmarkContext from '../../Helper/bookmark';
import DataLoop from './DataLoop';
import FavDataLoop from './FavDataLoop';
import SharedWithMee from './ShareWithMe';
import EditBookmarkModal from './EditBookmark';
import ViewBookmark from './ViewBookmarks';

const BookmarksTabs = () => {
  const { activeTabss, gridView } = useContext(BookmarkContext);
  return (
    <Fragment>
      <TabContent activeTab={activeTabss}>
        <TabPane tabId="1">
          <Card className="mb-0">
            <CardHeader className="d-flex">
              <H5 attrH5={{ className: 'mb-0' }}>{CreatedByMe}</H5>
              <ViewBookmark />
            </CardHeader>
            <CardBody className="pb-0">
              <div className={`details-bookmark text-center ${gridView ? '' : 'list-bookmark'}`}>
                <DataLoop />
              </div>
            </CardBody>
          </Card>
        </TabPane>
        <TabPane tabId="2">
          <Card className="mb-0">
            <CardHeader className="d-flex">
              <H5 attrH5={{ className: 'mb-0' }}>{Favourites}</H5>
              <ViewBookmark />
            </CardHeader>
            <CardBody>
              <div className={`details-bookmark text-center ${gridView ? '' : 'list-bookmark'}`}>
                <FavDataLoop />
              </div>
            </CardBody>
          </Card>
        </TabPane>
        <TabPane tabId="3">
          <SharedWithMee />
        </TabPane>
        <TabPane tabId="4">
          <Card className="mb-0">
            <CardHeader className="d-flex">
              <H5 attrH5={{ className: 'mb-0' }}>{MyBookmark}</H5>
              <ViewBookmark />
            </CardHeader>
            <CardBody>
              <div className={`details-bookmark text-center ${gridView ? '' : 'list-bookmark'}`} >
                <DataLoop />
              </div>
            </CardBody>
          </Card>
        </TabPane>
        <TabPane tabId="5">
          <Card className="mb-0">
            <CardHeader className="d-flex">
              <H5 attrH5={{ className: 'mb-0' }}>{Notification}</H5>
              <ViewBookmark />
            </CardHeader>
            <CardBody>
              <div className="details-bookmark text-center">
                <div className="no-favourite">
                  <span>{NoBookmarksFound}</span>
                </div>
              </div>
            </CardBody>
          </Card>
        </TabPane>
        <TabPane tabId="6">
          <Card className="mb-0">
            <CardHeader className="d-flex">
              <H5 attrH5={{ className: 'mb-0' }}>{Newsletter}</H5>
              <ViewBookmark />
            </CardHeader>
            <CardBody>
              <div className="details-bookmark text-center">
                <div className="no-favourite">
                  <span>{NoBookmarksFound}</span>
                </div>
              </div>
            </CardBody>
          </Card>
        </TabPane>
        <EditBookmarkModal />
      </TabContent>
    </Fragment>
  );
};
export default BookmarksTabs;
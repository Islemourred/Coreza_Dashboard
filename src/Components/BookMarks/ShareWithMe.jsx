import React, { Fragment } from 'react';
import { Grid, List } from 'react-feather';
import { Card, CardBody, CardHeader, Row } from 'reactstrap';
import { H6, LI, UL } from '../../AbstractElements';
import { NoBookmarksFound, SharedWithMe } from '../../Constant';

const SharedWithMee = () => {
  return (
    <Fragment>
      <Card className="mb-0">
        <CardHeader className="d-flex">
          <H6 attrH6={{ className: 'mb-0' }}>{SharedWithMe}</H6>
          <UL attrUL={{ className: 'simple-list d-flex flex-row' }}>
            <LI>
              <a className="grid-bookmark-view" href="#javascript" >
                <Grid />
              </a>
            </LI>
            <LI>
              <a className="list-layout-view" href="#javascript" >
                <List />
              </a>
            </LI>
          </UL>
        </CardHeader>
        <CardBody>
          <div className="details-bookmark text-center">
            <Row></Row>
            <div className="no-favourite">
              <span>{NoBookmarksFound}</span>
            </div>
          </div>
        </CardBody>
      </Card>
    </Fragment>
  );
};
export default SharedWithMee;
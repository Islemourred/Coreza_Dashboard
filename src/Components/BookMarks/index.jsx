import { MarkJecno, MARKJENCOEMAIL } from '../../Constant';
import Img from '../../assets/images/user/user.png';
import { Breadcrumbs, H6, Image, P } from '../../AbstractElements';
import NavTab from './NavTab';
import BookmarksTabs from './BookmarksTabs';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import React, { Fragment, useState } from 'react';

const BookmarksContain = () => {
  const [Sidebar, setSidebar] = useState(false);
  const OnClickHandel = () => {
    setSidebar(!Sidebar);
  };
  return (
    <Fragment>
       <Breadcrumbs mainTitle="Bookmark" parent="Apps" title="Bookmark" />
      <Container fluid={true}>
        <div className="email-wrap bookmark-wrap">
          <Row>
            <Col xxl="3" xl="4" className="box-col-30">
              <div className="md-sidebar"><a className="btn btn-primary md-sidebar-toggle" href="#javascript" onClick={OnClickHandel}>Bookmark Filter</a>
                <div className={`md-sidebar-aside email-left-aside ${Sidebar ? 'open' : ''}`}>
                  <Card>
                    <CardBody>
                      <div className="email-app-sidebar left-bookmark">
                        <div className='d-flex align-items-center'>
                          <div className="media-size-email">
                            <Image attrImage={{
                              className: 'me-3 rounded-circle',
                              src: `${Img}`, alt: ''
                            }} />
                          </div>
                          <div className='flex-grow-1'>
                            <H6 attrH6={{ className: 'f-w-600' }}>{MarkJecno}</H6>
                            <P>{MARKJENCOEMAIL}</P>
                          </div>
                        </div>
                        <NavTab />
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </Col>
            <Col xxl="9" xl="8" md="12" className="box-col-8">
              <div className="email-right-aside bookmark-tabcontent">
                <Card className="email-body">
                  <div className="ps-0">
                    <BookmarksTabs />
                  </div>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
export default BookmarksContain;
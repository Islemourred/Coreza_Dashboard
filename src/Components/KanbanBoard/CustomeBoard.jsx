import React, { Fragment } from 'react';
import Board from '@asseinfo/react-kanban';
import { Card, CardHeader, CardBody, Media } from 'reactstrap';
import { H4, H6, LI, P, UL, Image } from '../../AbstractElements';
import { customDefaultData } from '../../Data/MockTable/apiboard';
import { CustomBoards } from '../../Constant/index';

const CustomeBoard = () => {
  const customboard = customDefaultData;
  var images = require.context('../../assets/images', true);
  const dynamicImage = (image) => {
    return images(`./${image}`);
  };
  return (
    <Fragment>
      {customboard &&
        <Card>
          <CardHeader className="pb-0">
            <H4>{CustomBoards}</H4>
          </CardHeader>
          <CardBody>
            <div id="demo2" >
              <div className="kanban-container custom-board">
                <main className="kanban-drag">
                  <Board
                    initialBoard={customboard}
                    renderCard={({ title, date, priority, img, company, rate, customer_img1, customer_img2, customer_img3, bg_color, id }) => (
                      <div className="kanban-item" key={id}>
                        <a className={`kanban-box`} href="#javascript">
                          <span className="date">{date}</span>
                          <span className={`badge ${priority === 'Low' ? 'badge-success' : 'badge-primary'} f-right`}>{priority}</span>
                          <H6>{title}</H6>
                          <Media className='d-flex'>
                            <Image attrImage={{
                              className: 'img-20 me-1 rounded-circle', src:
                                `${dynamicImage(img)}`, alt: ''
                            }} />
                            <Media body className='flex-grow-1'>
                              <P attrPara={{ className:'mb-0' }}>{company}</P>
                            </Media>
                          </Media>
                          <div className="d-flex mt-3">
                            <UL attrUL={{ className: 'simple-list list ' }}>
                              <LI>
                                <i className="fa fa-comments-o"></i>{'2'}
                              </LI>
                              <LI>
                                <i className="fa fa-paperclip ms-1"></i>{'2'}
                              </LI>
                              <LI>
                                <i className="fa fa-eye ms-1"></i>
                              </LI>
                            </UL>
                            <div className="customers">
                              <UL attrUL={{ className: 'simple-list d-flex flex-row' }}>
                                <LI attrLI={{ className: 'd-inline-block me-3' }}>
                                  <P attrPara={{ className: 'f-12 mb-0' }}>{rate}</P>
                                </LI>
                                <LI attrLI={{ className: 'd-inline-block' }}>
                                  <Image attrImage={{ className: 'img-20 rounded-circle', src: ` ${dynamicImage(customer_img1)}`, alt: '' }} />
                                </LI>
                                <LI attrLI={{ className: 'd-inline-block' }}>
                                  <Image attrImage={{ className: 'img-20 rounded-circle', src: ` ${dynamicImage(customer_img2)}`, alt: '' }} />
                                </LI>
                                <LI attrLI={{ className: 'd-inline-block' }}>
                                  <Image attrImage={{ className: 'img-20 rounded-circle', src: ` ${dynamicImage(customer_img3)}`, alt: '' }} />
                                </LI>
                              </UL>
                            </div>
                          </div>
                        </a>
                      </div>
                    )}
                  >
                    {customboard}
                  </Board>
                </main>
              </div>
            </div>
          </CardBody>
        </Card>}
    </Fragment>
  );
};
export default CustomeBoard;
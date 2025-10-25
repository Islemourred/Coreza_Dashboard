import React, { Fragment } from 'react';
import { Media } from 'reactstrap';
import { LI, UL, Image, P, H6 } from '../../AbstractElements';

const InsideApi = (props) => {
  const { date = '', priority = '', title = '', img = '', company = '', rate = '', customer_img1 = '', customer_img2 = '', customer_img3 = '' } = props;
  return (
    <Fragment>
      <a className="kanban-box" href="#javascript">
        <span className="date">{date}</span>
        <span className={`badge ${priority === 'Urgent' ? 'badge-danger' : 'badge-primary'} f-right`}>{props.priority}</span>
        <Image attrImage={{ className: 'me-2 img-fluid', src: '', alt: '' }} /> 
        <H6>{title}</H6>
        <Media className='d-flex'>
          <Image attrImage={{ className: 'img-20 me-1 rounded-circle', src: `${img}`, alt: '' }} />
          <Media body className='flex-grow-1'> 
            <P attrPara={{ className: 'mb-0' }}>{company}</P>
          </Media>
        </Media>
        <div className="d-flex mt-3">
          <UL attrUL={{ className: 'simple-list list' }}>
            <LI>
              <i className="fa fa-comments-o"></i>2
            </LI>
            <LI>
              <i className="fa fa-paperclip ms-1"></i>2
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
                <Image attrImage={{ className: 'img-20 rounded-circle', src: `${customer_img1}`, alt: '' }} />
              </LI>
              <LI attrLI={{ className: 'd-inline-block' }}>
                <Image attrImage={{ className: 'img-20 rounded-circle', src: `${customer_img2}`, alt: '' }} />
              </LI>
              <LI attrLI={{ className: 'd-inline-block' }}>
                <Image attrImage={{ className: 'img-20 rounded-circle', src: `${customer_img3}`, alt: '' }} />
              </LI>
            </UL>
          </div>
        </div>
      </a>
    </Fragment>
  );
};
export default InsideApi;
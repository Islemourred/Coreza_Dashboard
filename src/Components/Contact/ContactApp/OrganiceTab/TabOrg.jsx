import React, { Fragment } from 'react';
import {  TabPane } from 'reactstrap';
import { orgList } from '../../../../Data/ContactApp/OrgList';
import { H5, H6, P, Image, UL, LI } from '../../../../AbstractElements';
import { EmailAddress, Gender, General, Personal, Print } from '../../../../Constant';

const TabOrg = () => {
  return (
    <Fragment>
      {orgList.map((item, i) =>
        <TabPane tabId={item.activeTab} key={i}>
          <div className="profile-mail">
            <div className='d-flex'>
              <Image attrImage={{ className: 'p-0 img-100 img-fluid m-r-20 rounded-circle update_img_5', src: `${require(`../../../../assets/images/${item.img}`)}`, alt: '' }} />
              <div className="mt-0 flex-grow-1">
                <H5><span className="first_name_5">{item.name}</span></H5>
                <P attrPara={{ className: 'email_add_5' }}>{item.email}</P>
                <UL attrUL={{ className: 'simple-list' }}>
                  <LI>
                    <a href="#javascript" data-toggle="modal" data-target="#printModal">{Print}</a>
                  </LI>
                </UL>
              </div>
            </div>
            <div className="email-general">
              <H6>{General}</H6>
              <P>{EmailAddress}:
                <span className="font-primary email_add_5">{item.email}</span>
              </P>
              <div className="gender">
                <H6>{Personal}</H6>
                <P>{Gender}:
                  <span>{item.gender}</span>
                </P>
              </div>
            </div>
          </div>
        </TabPane>
      )}
    </Fragment>
  );
};

export default TabOrg;
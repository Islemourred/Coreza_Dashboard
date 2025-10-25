import React, { Fragment, useState } from 'react';
import { Card, CardBody } from 'reactstrap';
import { H6, LI, P, UL, Image } from '../../../AbstractElements';
import user from '../../../assets/images/user/user.png';
import { Inbox, MarekjecnoMailId, MARKJENCO, NEWMAIL } from '../../../Constant';
import { emailSidbar } from '../../../Data/Email';
import { Link } from 'react-router-dom';

const MailSidebar = () => {
  const [IsOpen, setIsOpen] = useState(false);
  const OnHandelClick = () => {
    setIsOpen(!IsOpen);
  };
  return (
    <Fragment>
      <div className="md-sidebar">
        <a className="btn btn-primary md-sidebar-toggle" href="#javascript" onClick={OnHandelClick}>email filter</a>
        <div className={`md-sidebar-aside ${IsOpen ? 'open' : ''}`}>
          <div className="email-left-aside">
            <Card >
              <CardBody>
                <div className="email-app-sidebar">
                  <div className='d-flex'>
                    <div className="media-size-email flex-shrink-0">
                      <Image attrImage={{ className: 'me-3 rounded-circle', src: `${user}`, alt: '' }} />
                    </div>
                    <div className="flex-grow-1">
                      <H6 attrH6={{ className: 'f-w-600' }}><Link to={`${process.env.PUBLIC_URL}/users/userprofile`}>{MARKJENCO}</Link></H6>
                      <P attrPara={{ className: 'mb-0' }}>{MarekjecnoMailId}</P>
                    </div>
                  </div>
                  <UL attrUL={{ className: 'simple-list nav main-menu custom-scrollbar', role: 'tablist' }}>
                    <LI attrLI={{ className: 'nav-item' }}>
                      <Link className="btn-primary btn-mail w-100" to={`${process.env.PUBLIC_URL}/email-app/compose`}>
                        <i className="icofont icofont-envelope me-2"></i> {NEWMAIL}
                      </Link>
                    </LI>
                    <LI attrLI={{ className: 'nav-item' }}>
                      <a className="show" id="pills-darkprofile-tab" data-bs-toggle="pill" href="#pills-darkprofile" role="tab" aria-controls="pills-darkprofile" aria-selected="false">
                        <span className="title">
                          <i className="icon-import"></i>{Inbox}
                        </span>
                        <span className="badge pull-right">(236)</span>
                      </a>
                    </LI>
                    {
                      emailSidbar && emailSidbar.map((item) => {
                        return (
                          <LI key={item.id}>
                            {!item.line ?
                              <a href="#javascript">
                                <span className="title">
                                  <i className={item.classname}></i>{item.title}
                                </span>
                                <span className="badge pull-right">{item.badge}</span>
                              </a>
                              : item.line
                            }
                          </LI>
                        );
                      })}
                  </UL>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default MailSidebar;

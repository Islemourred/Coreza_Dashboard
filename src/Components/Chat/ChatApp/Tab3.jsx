import React, { Fragment, } from 'react';
import { Col, Media, Row } from 'reactstrap';
import { H5, LI, P, UL } from '../../../AbstractElements';
import { Follower, Following, MarkJecno } from '../../../Constant';
import two from '../../../assets/images/user/2.png';
import { Link } from 'react-router-dom';

const Tab3 = () => {
    return (
        <Fragment>
            <div className="user-profile">
                <div className="image">
                    <div className="avatar text-center"><Media body alt="" src={two} /></div>
                    <div className="icon-wrapper"><i className="icofont icofont-pencil-alt-5"></i></div>
                </div>
                <div className="user-content text-center"><Link to={`${process.env.PUBLIC_URL}/users/userprofile`}><H5 attrH5={{ className: 'text-uppercase' }}>{MarkJecno}</H5></Link>
                    <div className="social-list">
                        <UL attrUL={{ className: 'simple-list d-flex flex-row' }}>
                            <LI ><a href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a></LI>
                            <LI ><a href="https://myaccount.google.com/"><i className="fa fa-google-plus"></i></a></LI>
                            <LI ><a href="https://twitter.com/"><i className="fa fa-twitter"></i></a></LI>
                            <LI ><a href="https://www.instagram.com/"><i className="fa fa-instagram"></i></a></LI>
                            <LI ><a href="https://dashboard.rss.com/auth/sign-in/"><i className="fa fa-rss"></i></a></LI>
                        </UL>
                    </div>
                    <div className="follow text-center">
                        <Row>
                            <Col className="border-right"><span>{Following}</span><div className="follow-num">{'236k'}</div> </Col>
                            <Col><span>{Follower}</span> <div className="follow-num">{'3691k'}</div>
                            </Col>
                        </Row>
                    </div>
                    <div className="text-center digits">
                        <P>{'Mark.jecno23@gmail.com'}</P>
                        <P>{'+91 365 - 658 - 1236'}</P>
                        <P>{'Fax: 123-4560'}</P>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
export default Tab3;
import React, { Fragment } from 'react';
import { Card, Col } from 'reactstrap';
import { H4, Image, LI, P, UL } from '../../AbstractElements';
import { MarkJecno } from '../../Constant';
import imgg from '../../assets/images/blog/blog.jpg';

const BgImage = () => {
    return (
        <Fragment>
            <Col xl="6" className='box-col-6 search-banner'>
                <Card className="mb-0">
                    <div className="blog-box blog-shadow">
                        <Image attrImage={{ className: 'img-fluid bg-img-cover', src: `${imgg}`, alt: '' }} />
                        <div className="blog-details">
                            <P>25 July 2023</P>
                            <H4>Accusamus et iusto odio dignissimos ducimus qui blanditiis.</H4>
                            <UL attrUL={{ className: 'simple-list blog-social d-flex flex-row' }}>
                                <LI><i className="icofont icofont-user"></i>{MarkJecno}</LI>
                                <LI><i className="icofont icofont-thumbs-up"></i>02 Hits</LI>
                            </UL>
                        </div>
                    </div>
                </Card>
            </Col>
        </Fragment>
    );
};
export default BgImage;
import React, { Fragment } from 'react';
import { Card, Col } from 'reactstrap';
import { P, Image, H4, UL, LI, Breadcrumbs } from '../../../AbstractElements';
import { MarkJecno } from '../../../Constant';
import blog from '../../../assets/images/blog/blog.jpg';
import {dynamicImage} from "../../../Services/index"
const BlogBox = () => {
  return (
    <Fragment>
        <Breadcrumbs mainTitle="Blog Detail" parent="Blog" title="Blog Detail" />
        <Col xxl="6"  className="box-col-50 xl-40">
          <Card>
            <div className="blog-box blog-shadow" style={{ backgroundImage: `url(${blog})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', display: 'block' }}>
              <Image
                attrImage={{
                  className: 'img-fluid bg-img-cover d-none',
                  src: dynamicImage("blog/blog.jpg"),
                  alt: '',
                }}
              />
              <div className="blog-details">
                <P>{'25 July 2023'}</P>
                <H4>
                  {'Accusamus et iusto odio dignissimos ducimus qui blanditiis.'}
                </H4>
                <UL attrUL={{ className: 'simple-list blog-social flex-row' }}>
                  <LI>
                    <i className="icofont icofont-user"></i>
                    {MarkJecno}
                  </LI>
                  <LI>
                    <i className="icofont icofont-thumbs-up"></i>
                    {'02 Hits'}
                  </LI>
                  <LI>
                    <i className="icofont icofont-ui-chat"></i>
                    {'598 Comments'}
                  </LI>
                </UL>
              </div>
            </div>
          </Card>
        </Col>
    </Fragment>
  );
};

export default BlogBox;

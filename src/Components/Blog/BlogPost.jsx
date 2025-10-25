import { Fragment } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { PostEdit, Post, Discard } from '../../Constant';
import { Breadcrumbs, Btn } from '../../AbstractElements';
import FormPost from './BlogPost/FormPost';
import DropzoneClass from './BlogPost/DropzoneClass';
import HeadingCommon from "../../Common/Component/HeadingCommon"
const BlogPostContain = () => {
  return (
    <Fragment>
       <Breadcrumbs mainTitle="Add Post" parent="Blog" title="Add Post" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <HeadingCommon CardHeaderClassName="pb-0" Heading={PostEdit}  />
              <CardBody className="add-post">
                <FormPost />
                <DropzoneClass />
                <div className="btn-showcase">
                  <Btn attrBtn={{ color: 'primary', type: 'submit' }} >
                    {Post}
                  </Btn>
                  <Btn attrBtn={{ color: 'light', type: 'reset' }}>
                    {Discard}
                  </Btn>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default BlogPostContain;
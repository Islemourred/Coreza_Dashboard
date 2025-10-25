import { Image } from '../../../AbstractElements';
import { Href } from '../../../Constant';
import { dynamicImage } from '../../../Services';
import PostHeader from './common/PostHeader';
import PostReact from './common/PostReact';
import SocialIcon from './common/SocialIcons';
import { Card, Col, Row } from 'reactstrap';

const ProfileContain2 = () => {
    return (
        <Col sm="12">
          <Card>
            <div className="profile-post">
              <PostHeader h6={'5 Hours ago'} />
              <div className="post-body">
                <div className="img-container">
                  <Row className="mt-4 pictures my-gallery" id="aniimated-thumbnials-2" itemScope="">
                    <Col sm="6"  itemProp="associatedMedia" itemScope="">
                      <a href={Href} itemProp="contentUrl" data-size="1600x950">
                        <Image attrImage={{ className: 'img-fluid rounded', src: dynamicImage('user-profile/post2.jpg'), itemProp: 'thumbnail', alt: 'gallery' }} />
                      </a>
                    </Col>
                    <Col sm="6"  itemProp="associatedMedia" itemScope="">
                      <a href={Href} itemProp="contentUrl" data-size="1600x950">
                        <Image attrImage={{ className: 'img-fluid rounded', src: dynamicImage('user-profile/post3.jpg'), itemProp: 'thumbnail', alt: 'gallery' }} />
                      </a>
                    </Col>
                  </Row>
                </div>
                <PostReact h6={'+25 people react this post'} />
                <SocialIcon />
              </div>
            </div>
          </Card>
        </Col>
    );
};
export default ProfileContain2;
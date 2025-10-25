import { Image } from '../../../AbstractElements';
import PostHeader from './common/PostHeader';
import PostReact from './common/PostReact';
import SocialIcon from './common/SocialIcons';
import ProfileContain2 from './ProfileContain2';
import ProfileContain3 from './ProfileContain3';
import { Card, Col, Row } from 'reactstrap';
import { Href } from '../../../Constant';
import { dynamicImage } from '../../../Services';

const ProfileContain = () => {
    return (
        <Col xl="9" md="7" lg="8" className="xl-65 box-col-70">
          <Row>
            <Col sm="12">
              <Card>
                <div className="profile-post">
                  <PostHeader h6={'22 Hours ago'} />
                  <div className="post-body ">
                    <div className="img-container">
                      <div className="my-gallery" id="aniimated-thumbnials" itemScope="">
                        <Col itemProp="associatedMedia" itemScope="">
                              <a href={Href} itemProp="contentUrl" datasize="1600x950">
                                <Image attrImage={{ className: 'img-fluid rounded', src: dynamicImage('user-profile/post1.jpg'), itemProp: 'thumbnail', alt: 'gallery' }} />
                              </a>
                        </Col>
                      </div>
                    </div>
                    <br />
                    <PostReact h6={'+5 people react this post'} />
                    <SocialIcon />
                  </div>
                </div>
              </Card>
            </Col>
            <ProfileContain2  />
            <ProfileContain3  />
          </Row>
        </Col >
    );
};
export default ProfileContain;
import { Link } from 'react-router-dom';
import { Card, Col } from 'reactstrap';
import { H4, H6, Image } from '../../../AbstractElements';
import Img from '../../../assets/images/user-profile/bg-profile.jpg';
import { Designer, Href } from '../../../Constant';
import {dynamicImage} from "../../../Services/index"
import SocialMediaIcons from './SocialMediaIcons';
import FollowIcons from './FollowIcons';
const ProfileHeader = () => {
  return (
      <Col sm="12">
        <Card className="profile-header bg-image" style={{ backgroundImage: `url(${Img})`, backgroundSize: 'cover', backgroundPosition: 'center', display: 'block' }}>
          <Image attrImage={{ className: 'img-fluid bg-img-cover d-none', src: dynamicImage('user-profile/bg-profile.jpg'), alt: '' }} />
          <div className="profile-img-wrrap" style={{ backgroundImage: `url(${Img})`, backgroundSize: 'cover', backgroundPosition: 'center', display: 'block' }}>
            <Image attrImage={{ className: 'img-fluid bg-img-cover d-none', src: dynamicImage('user-profile/bg-profile.jpg'), alt: '' }} />
          </div>
          <div className="userpro-box">
            <div className="img-wrraper">
              <div className="avatar">
                <Image attrImage={{ className: 'img-fluid', alt: '', src: dynamicImage('user/7.jpg') }} />
              </div>
              <Link className="icon-wrapper" to={`${process.env.PUBLIC_URL}/users/useredit`}>
                <i className="icofont icofont-pencil-alt-5"></i>
              </Link>
            </div>
            <div className="user-designation">
              <div className="title">
                <a target="_blank" rel="noreferrer" href={Href}>
                  <H4>Emay Walter</H4>
                  <H6>{Designer}</H6>
                </a>
              </div>
              <SocialMediaIcons />
              <FollowIcons />
            </div>
          </div>
        </Card>
      </Col>
  );
};
export default ProfileHeader;
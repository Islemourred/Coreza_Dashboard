import { MARKJENCO, MARKJENCOEMAIL } from '../../Constant';
import { H6, Image, P } from '../../AbstractElements';
import { Link } from 'react-router-dom';
import { dynamicImage } from '../../Services/index';

const HeaderProfile = () => {
  return (
      <div className='d-flex align-items-center'>
        <div className="media-size-email">
          <Image attrImage={{ className: 'me-3 rounded-circle', src: dynamicImage("user/user.png"), alt: '' }} />
        </div>
        <div  className='flex-grow-1'>
          <H6 attrH6={{ className: 'f-w-600' }} >
            <Link to={`${process.env.PUBLIC_URL}/users/userprofile`}>{MARKJENCO}</Link></H6>
          <P attrPara={{ className:'mb-0' }}>{MARKJENCOEMAIL}</P>
        </div>
      </div>
  );
};

export default HeaderProfile;
import { H5, H6, Image } from '../../../../AbstractElements';
import { EmayWalter, Href } from '../../../../Constant';
import { dynamicImage } from '../../../../Services';

const PostHeader = ({ h6 }) => {
  return (
      <div className="post-header">
        <div className="d-flex">
          <Image attrImage={{ className: 'img-thumbnail rounded-circle me-3', src: dynamicImage('user/7.jpg'), alt: 'Generic placeholder image' }} />
          <div className="flex-grow-1 align-self-center">
            <a href={Href}>
              <H5 attrH5={{ className: 'user-name' }} >{EmayWalter}</H5>
            </a>
            <H6 attrH6={{ className: 'f-w-500' }}>{h6}</H6>
          </div>
        </div>
        <div className="post-setting">
          <i className="fa fa-ellipsis-h"></i>
        </div>
      </div>
  );
};

export default PostHeader;
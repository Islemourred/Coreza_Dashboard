import { AddFriend } from '../../../Constant';
import { Btn, LI, UL, Image } from '../../../AbstractElements';
import { FriendsData } from '../../../Data/SocialApp';
import { CardBody, } from 'reactstrap';

const AddFriends = () => {
  return (
      <CardBody className="avatar-showcase pt-0">
        <div className="pepole-knows">
          <UL attrUL={{ className: 'simple-list d-flex flex-row flex-wrap' }}>
            {FriendsData.map((item) =>
              <LI key={item.id}>
                <div className="add-friend text-center">
                  <Image attrImage={{ className: 'img-60 img-fluid rounded-circle', alt: 'twoImg', src: item.img }} />
                  <span className="d-block f-w-600">{item.title}</span>
                  <Btn attrBtn={{ color: 'primary', size: 'xs' }}>{AddFriend}</Btn>
                </div>
              </LI>
            )}
          </UL>
        </div>
      </CardBody>
  );
};
export default AddFriends;
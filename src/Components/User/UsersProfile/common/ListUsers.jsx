import { CardBody } from 'reactstrap';
import { AddFriend, Href } from '../../../../Constant';
import { Image } from '../../../../AbstractElements';
import { FollowersData } from '../../../../Data/users/index';

const ListUsers = () => {
  return (
      <CardBody className="social-list filter-cards-view">
        {
          FollowersData.map((item) =>
            <div className="d-flex justify-content-start" key={item.id}>
              <Image attrImage={{ className: 'img-50 img-fluid m-r-20 rounded-circle', alt: '', src: `${(item.img)}` }} />
              <div className="flex-grow-1">
                <span className="d-block">{item.name}</span>
                <a href={Href}>{AddFriend}</a>
              </div>
            </div>
          )
        }
      </CardBody>
  );
};

export default ListUsers;
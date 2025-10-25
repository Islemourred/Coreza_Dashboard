import { useState } from 'react';
import { Col,  Nav, NavLink } from 'reactstrap';
import { H6, Image, P } from '../../../AbstractElements';
import SearchNotFoundClass from './SearchNotFoundClass';

const ListNewContact = ({ users, userCallback }) => {
  const [dynamictab, setDynamicTab] = useState('0');

  const ContactDetails = (user) => {
    userCallback({ id: user.id, name: user.name, surname: user.surname, avatar: user.avatar, age: user.age, mobile: user.mobile });
  };

  return (
      <Col xl="4" md="5" className='xl-40'>
        <Nav className="flex-column nav-pills">
          {users ?
            users.map((user, index) => {
              return (
                <NavLink className={dynamictab === index ? 'active' : ''} onClick={() => setDynamicTab(index)} key={index} >
                  <div className='d-flex' onClick={() => ContactDetails(user)}>
                    <Image attrImage={{ className: 'p-0 img-fluid img-50 m-r-20 rounded-circle update_img_0', src: `${user.avatar}`, alt: '' }} />
                    <div className='flex-grow-1'>
                      <H6>
                        <span className="first_name_0">{user.name}</span>
                        <span className="last_name_0">{user.surname}</span>
                      </H6>
                      <P attrPara={{ className: 'email_add_0' }}>{user.name}{'@gmail.com'}</P>
                    </div>
                  </div>
                </NavLink>
              );
            })
            :
            <SearchNotFoundClass />
          }
        </Nav>
      </Col>
  );
};

export default ListNewContact;
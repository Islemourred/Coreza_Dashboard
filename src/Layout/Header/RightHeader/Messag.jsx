import React from 'react'
import user1 from '../../../assets/images/user/3.jpg';
import user2 from '../../../assets/images/user/6.jpg';
import user3 from '../../../assets/images/user/10.jpg';
import { Image } from '../../../AbstractElements';
import {MessageSquare,X } from 'react-feather'
import { Href } from '../../../Constant';
const Message = ({active,setActive}) => {
  return (
      <li className="onhover-dropdown">
        <div className="message"><MessageSquare onClick={()=>setActive("messagbox")} /></div>
        <ul className={`message-dropdown onhover-show-div ${active === "messagbox"? "active" : '' }`}>
          <li>
            <MessageSquare />
            <h6 className="f-18 mb-0">Messages</h6>
          </li>
          <li>
            <div className="d-flex align-items-start">
              <div className="message-img bg-light-primary">
                <Image attrImage={{ className: 'img-fluid me-0', src: user1, alt: '' }} />
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-0">Emay Walter</h5>
                <p>Do you want to go see movie?</p>
              </div>
              <div className="notification-right"><a href={Href}><X/></a></div>
            </div>
          </li>
          <li>
            <div className="d-flex align-items-start">
              <div className="message-img bg-light-primary">
                <Image attrImage={{ className: 'img-fluid me-0', src: user2, alt: '' }} />
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-0">Jason Borne</h5>
                <p>Thank you for rating us.</p>
              </div>
              <div className="notification-right"><a href={Href}><X/></a></div>
            </div>
          </li>
          <li>
            <div className="d-flex align-items-start">
              <div className="message-img bg-light-primary">
                <Image attrImage={{ className: 'img-fluid me-0', src: user3, alt: '' }} />
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-0">Sarah Loren</h5>
                <p>What`s the project report update?</p>
              </div>
              <div className="notification-right"><a href={Href}><X/></a></div>
            </div>
          </li>
          <li><a className="btn btn-primary" href={Href}>Check Messages</a></li>
        </ul>
      </li>
  )
}

export default Message;
import { H5, H6, P, Image } from '../../AbstractElements';
import React, { Component } from 'react';

class Printpreview extends Component {
  render() {
    const { selectedUser } = this.props;
    return (
      <div className="profile-mail pt-0" id="DivIdToPrint">
        <div className="d-flex">
          <Image attrImage={{ className: 'img-100 img-fluid m-r-20 rounded-circle', id: 'updateimg', src: `${selectedUser.avatar}`, alt: '' }} />
          <div className="flex-grow-1 mt-0">
            <H5>
              <span id="printname">{selectedUser.name} </span>
              <span id="printlast">{selectedUser.surname}</span>
            </H5>
            <P id="printmail">{selectedUser.name}{'@gmail.com'}</P>
          </div>
        </div>
        <div className="email-general">
          <H6>{'General'}</H6>
          <P>{'Email Address'}: 
            <span className="font-primary" id="mailadd">{selectedUser.surname}{'@gmail.com'}   </span>
          </P>
        </div>
      </div>
    );
  }
}

export default Printpreview;
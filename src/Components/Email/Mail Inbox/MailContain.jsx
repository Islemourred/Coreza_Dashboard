import { H6, P, Image } from '../../../AbstractElements';
import EmailContext from '../../../Helper/email';
import React, {  useContext, useState } from 'react';
import { Star } from 'react-feather';
import { Link } from 'react-router-dom';
import { Card, Row, Dropdown, DropdownItem, DropdownToggle, DropdownMenu,  Label, Input } from 'reactstrap';
import { Action } from '../../../Constant';

const MailContain = () => {
  const { allEmails } = useContext(EmailContext);
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);
  var images = require.context('../../../assets/images', true);
  const dynamicImage = (image) => {
    return images(`./${image}`);
  };
  return (
      <div className="email-right-aside">
        <Card className="email-body">
          <div className="email-profile theme-scrollbar">
            <div>
              <div className="pe-0 b-r-light"></div>
              <div className="email-top">
                <Row>
                  <div className="col-12">
                    <div className='d-flex'>
                      <Label className="email-chek d-block" htmlFor="chk-ani">
                        <Input className="checkbox_animated" id="chk-ani" type="checkbox" />
                      </Label>
                      <div>
                        <div className="dropdown">
                          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle color="primary" caret>
                              {Action}
                            </DropdownToggle>
                            <DropdownMenu>
                              <DropdownItem className="dropdown-item">Refresh</DropdownItem>
                              <DropdownItem className="dropdown-item">Mark as important</DropdownItem>
                              <DropdownItem className="dropdown-item">Move to spam</DropdownItem>
                              <DropdownItem className="dropdown-item">Move to Trash</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </div>
                      </div>
                    </div>
                  </div>
                </Row>
              </div>
              <div className="inbox">
                {
                  allEmails && allEmails.map((item) => 
                    (
                      <div className="d-flex" key={item.id}>
                        <div className="flex-shrink-0">
                          <Label className="d-block mb-0" htmlFor="chk-ani">
                            <Input className="checkbox_animated" id="chk-ani" type="checkbox" />
                          </Label>
                          <Star className={`${item.favourite}`} />
                          <Image attrImage={{
                            className: 'me-3 rounded-circle'
                            , src: `${dynamicImage(item.image)}`, alt: ''
                          }} />
                        </div>
                          <div className='flex-grow-1'>
                          <Link to={{
                              pathname: `${process.env.PUBLIC_URL}/email/readmail`,
                              state: item.name
                            }}>
                            <H6>{item.name}</H6></Link>
                            <P>{item.text}</P>
                            <span>{item.time}</span>
                          </div>
                      </div>
                    )
                  )}
              </div>
            </div>
          </div>
        </Card>
      </div>
  );
};
export default MailContain;

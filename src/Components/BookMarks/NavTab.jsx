import React, { Fragment, useContext, useState } from 'react';
import { Bookmark, PlusCircle } from 'react-feather';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Btn } from '../../AbstractElements';
import { NewBookmark, Views, CreatedByMe, Favourites, SharedWithMe, MyBookmark, Tags, Newsletter, Notification, } from '../../Constant';
import BookmarkContext from '../../Helper/bookmark';
import BookmarkModal from './ModalBookMark';
import ModalTag from './ModalTag';

const NavTab = () => {
  const { mybookmarkData, setActiveTabss } = useContext(BookmarkContext);
  const [addModal, setaddModal] = useState(false);
  const [tagModal, setTagModal] = useState(false);// eslint-disable-next-line
  const [activeTab, setActiveTab] = useState('1');
  const addToggle = () => {
    setaddModal(!addModal);
  };
  const tagToggle = () => {
    setTagModal(!tagModal);
  };
  const onHandleClick = (id) => {
    setActiveTabss(id);
  };
  return (
    <Fragment>
      <Nav className="main-menu" role="tablist">
        <NavItem>
          <Btn attrBtn={{ color: 'primary', className: 'btn-mail', onClick: addToggle }}>
            <Bookmark className='me-2' /> {NewBookmark}
          </Btn>
          <BookmarkModal value={addModal} addToggle={addToggle} />
        </NavItem>
        <NavItem>
          <span className="main-title">{Views}</span>
        </NavItem>
        <NavItem>
          <NavLink href="#javascript" className={activeTab === '1' ? 'active' : ''} onClick={() => onHandleClick('1')}>
            <span className="title"> {CreatedByMe}</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#javascript" className={activeTab === '2' ? 'active' : ''} onClick={() => onHandleClick('2')} >
            <span className="title">{Favourites}  ({mybookmarkData.length}) </span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#javascript" className={activeTab === '3' ? 'active' : ''} onClick={() => onHandleClick('3')}>
            <span className="title"> {SharedWithMe}</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#javascript" className={activeTab === '4' ? 'active' : ''} onClick={() => onHandleClick('4')} >
            <span className="title"> {MyBookmark}</span>
          </NavLink>
        </NavItem>
        <li> <hr /> </li>
        <NavItem>
          <span className="main-title">
            {' '}{Tags}
            <span className="pull-right" onClick={tagToggle}> <PlusCircle /></span>
          </span>
        </NavItem>
        <ModalTag value={tagModal} tagToggle={tagToggle} />
        <NavItem>
          <NavLink href="#javascript" className={activeTab === '5' ? 'show' : ''} onClick={() => onHandleClick('5')}  >
            <span className="title"> {Notification}</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#javascript" className={activeTab === '6' ? 'show' : ''} onClick={() => onHandleClick('6')} >
            <span className="title"> {Newsletter}</span>
          </NavLink>
        </NavItem>
      </Nav>
    </Fragment>
  );
};
export default NavTab;
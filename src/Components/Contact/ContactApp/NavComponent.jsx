import React, { Fragment, useState } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Views, FollowUp, Orgenization, Favourites, Ideas, Business, Holidays, Important, Personal } from '../../../Constant';
import CreateContact from './CreateContact';
import CategoryCreate from './CategoryCreate';

const NavComponent = ({ callbackActive }) => {
  const [activeTab, setActiveTab] = useState('1');

  return (
    <Fragment>
      <Nav className="main-menu contact-options" role="tablist">
        <NavItem>
          <CreateContact />
        </NavItem>
        <NavItem>
          <span className="main-title"> {Views}</span>
        </NavItem>
        <NavItem>
          <a href="#javascript" className={activeTab === '1' ? 'active' : ''} onClick={() => {
            setActiveTab('1'); callbackActive('1');
            }}>
            <span className="title"> {Personal}</span>
          </a>
        </NavItem>
        <li>
          <CategoryCreate />
        </li>
        <NavItem>
          <a href="#javascript" className={activeTab === '2' ? 'active' : ''} onClick={() => {
            setActiveTab('2'); callbackActive('2');
            }}>
            <span className="title"> {Orgenization}</span>
          </a>
        </NavItem>
        <NavItem>
          <a href="#javascript" className={activeTab === '3' ? 'active' : ''} onClick={() => {
            setActiveTab('3'); callbackActive('3');
            }}>
            <span className="title">{FollowUp}</span>
          </a>
        </NavItem>
        <NavItem>
          <a href="#javascript" className={activeTab === '4' ? 'active' : ''} onClick={() => {
            setActiveTab('4'); callbackActive('4');
            }}>
              <span className="title">{Favourites}</span>
          </a>
        </NavItem>
        <NavItem>
          <a href="#javascript" className={activeTab === '5' ? 'active' : ''} onClick={() => {
            setActiveTab('5'); callbackActive('5');
            }}>
            <span className="title">{Ideas}</span>
          </a>
        </NavItem>
        <NavItem>
          <a href="#javascript" className={activeTab === '6' ? 'active' : ''} onClick={() => {
            setActiveTab('6'); callbackActive('6');
            }}>
            <span className="title">{Important}</span>
          </a>
        </NavItem>
        <NavItem>
          <a href="#javascript" className={activeTab === '7' ? 'active' : ''} onClick={() => {
            setActiveTab('7'); callbackActive('7');
            }}>
            <span className="title">{Business}</span>
          </a>
        </NavItem>
        <NavItem>
          <a href="#javascript" className={activeTab === '8' ? 'active' : ''} onClick={() => {
            setActiveTab('8'); callbackActive('8');
            }}>
            <span className="title">{Holidays}</span>
          </a>
        </NavItem>
      </Nav>
    </Fragment>
  );
};

export default NavComponent;
import React, { Fragment, useState } from 'react';
import { Image, Map, Settings, Target, VideoOff } from 'react-feather';
import { Nav, NavLink, NavItem } from 'reactstrap';
import { All, Images, Maps, Videos } from '../../Constant';

const SearchTabs = ({ callbackActive }) => {
  const [activeTab, setActiveTab] = useState('1');
  return (
    <Fragment>
      <Nav tabs className="search-list" id="top-tab" role="tablist">
        <NavItem>
          <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => {
            setActiveTab('1'); callbackActive('1');
          }}><Target />&nbsp;{All}
          </NavLink>
          <div className="material-border"></div>
        </NavItem>
        <NavItem>
          <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => {
            setActiveTab('2'); callbackActive('2');
          }}><Image />&nbsp;{Images}
          </NavLink>
          <div className="material-border"></div>
        </NavItem>
        <NavItem>
          <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => {
            setActiveTab('3'); callbackActive('3');
          }}><VideoOff />&nbsp;{Videos}
          </NavLink>
          <div className="material-border"></div>
        </NavItem>
        <NavItem>
          <NavLink className={activeTab === '4' ? 'active' : ''}>
            <Map className="icon-map-alt" />&nbsp;{Maps}
          </NavLink>
          <div className="material-border"></div>
        </NavItem>
        <NavItem>
          <NavLink className={activeTab === '5' ? 'active' : ''} >
            <Settings />&nbsp;Settings
          </NavLink>
          <div className="material-border"></div>
        </NavItem>
      </Nav>
    </Fragment>
  );
};
export default SearchTabs;
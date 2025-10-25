import React from 'react'
import { FolderPlus } from 'react-feather';
import HeaderDashboard from './HeaderDashboard';
import Appliacation from './Application';
import Pages from './Pages';
import { Link } from 'react-router-dom'
import {  UL, LI } from '../../../AbstractElements';

const LeftHeader = () => {
  return (
    <div className="left-header col horizontal-wrapper ps-0">
      <div className=" simple-list left-menu-header">
        <UL attrUL={{ className: "app-list" }}>
          <LI attrLI={{ className: "onhover-dropdown" }}>
            <div className="app-menu">
              <FolderPlus />
            </div>
            <UL attrUL={{ className: "simple-list onhover-show-div left-dropdown" }}>
              <LI><Link to={'/file-manager'}>File Manager</Link></LI>
              <LI><Link to={'/social-app'}> Social App</Link></LI>
              <LI><Link to={'/bookmark'}> Bookmark</Link></LI>
            </UL>
          </LI>
        </UL>
        <UL attrUL={{ className: "simple-list header-left d-flex" }}   >
          <HeaderDashboard />
          <Appliacation />
          <Pages />
        </UL>
      </div>
    </div>
  )
}

export default LeftHeader
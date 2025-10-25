import React, { useContext } from "react";
import { Grid } from "react-feather";
import CustomizerContext from "../../Helper/Customizer";
import LeftHeader from "./LeftHeader/LeftHeader";
import RightHeader from "./RightHeader/RightHeader";
import { Image } from "../../AbstractElements";
import { Link } from "react-router-dom";


const Header = () => {
  const { togglSidebar, setTogglSidebar } = useContext(CustomizerContext);
  
  return (
    <div className={`page-header  ${togglSidebar ? "close_icon" : ""}`}>
      <div className="header-wrapper row m-0">
        <div className="header-logo-wrapper col-auto p-0">
          <div className="toggle-sidebar" onClick={() => setTogglSidebar(!togglSidebar)}>
            <Grid className="status_toggle middle sidebar-toggle" />
          </div>
          <div className="logo-header-main">
            <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}>
              <Image attrImage={{  className: 'img-fluid for-light img-100', src: `${require('../../assets/images/logo/logo2.png')}`, alt: 'logo' }} />
              <Image attrImage={{  className: 'img-fluid for-dark', src: `${require('../../assets/images/logo/logo.png')}`, alt: 'logo' }} />
            </Link>
            </div>
        </div>
        <LeftHeader />
        <RightHeader />
      </div>
    </div>
  );
};

export default Header;

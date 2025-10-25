import { useState } from "react";
import { Inbox, LogIn, Settings, User } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import { LI, UL } from "../../../AbstractElements";
import { Account, LogOut } from "../../../Constant";
const Users = () => {
  const [toggle, setToogle] = useState(true);
  const history = useNavigate();
  const Logout = () => {
    localStorage.removeItem("profileURL");
    localStorage.removeItem("Name");
    localStorage.removeItem("token");
    history(`${process.env.PUBLIC_URL}/login`);
    localStorage.setItem("login", false);
  };
  const Active = () => setToogle(!toggle);
  
  return (
    <LI attrLI={{ className: `profile-nav onhover-dropdown` }}>
      <div className="account-user"><User onClick={Active} /></div>
      <UL attrUL={{ className: "profile-dropdown onhover-show-div" }}>
        <LI><Link to={"/users/userProfile"}><User /><span>{Account}</span></Link></LI>
        <LI><Link to={"/email-app"}><Inbox /><span>Inbox</span></Link></LI>
        <LI><Link to={`${process.env.PUBLIC_URL}/users/useredit`}><i><Settings /></i><span>Settings</span></Link></LI>
        <LI attrLI={{ onClick: Logout }}><Link to={`${process.env.PUBLIC_URL}/login`}><LogIn /><span>{LogOut}</span></Link></LI>
      </UL>
    </LI>
  );
};

export default Users;

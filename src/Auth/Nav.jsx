import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import {  JWT, SimpleLogin } from "../Constant";
import { Image } from "../AbstractElements";
import jwtImg from "../assets/images/jwt.svg";
import simpleLogin from '../assets/images/simple-login.svg';


const NavAuth = ({ callbackNav, selected }) => {
  return (
    <Nav className="border-tab flex-md-column" tabs>
      <NavItem>
        <NavLink
          className={selected === "simpleLogin" ? "active" : ""}
          onClick={() => callbackNav("simpleLogin")}
        >
          <Image attrImage={{ src: `${simpleLogin}`, alt: "" }} />
          <span>{SimpleLogin}</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={selected === "jwt" ? "active" : ""}
          onClick={() => callbackNav("jwt")}
        >
          <Image attrImage={{ src: `${jwtImg}`, alt: "" }} />
          <span>{JWT}</span>
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default NavAuth;

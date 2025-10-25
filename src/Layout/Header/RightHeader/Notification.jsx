import React from "react";
import { Bell, FileText, Send, ShoppingCart, Truck } from "react-feather";
import { LI, P } from "../../../AbstractElements";
import { Link } from 'react-router-dom';

const Notification = ({ active, setActive }) => {
  return (
    <LI attrLI={{ className: "onhover-dropdown" }}>
      <div className="notification-box">
        <Bell onClick={() => setActive("notificationbox")} />
      </div>
      <ul className={`notification-dropdown  onhover-show-div ${active === "notificationbox" ? "active" : ""}`}>
        <LI>
          <Bell />
          <h6 className="f-18 mb-0">Notification</h6>
        </LI>
        <LI>
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
              <Truck />
            </div>
            <div className="flex-grow-1">
              <P>
                <Link to={`${process.env.PUBLIC_URL}/ecommerce/orderhistory `}>Delivery processing</Link>
                <span className="pull-right">6 hr</span>
              </P>
            </div>
          </div>
        </LI>
        <LI>
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
              <ShoppingCart />
            </div>
            <div className="flex-grow-1">
              <P>
                <Link to={`${process.env.PUBLIC_URL}/ecommerce/cart `}>Order Complete</Link>
                <span className="pull-right">3 hr</span>
              </P>
            </div>
          </div>
        </LI>
        <LI>
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
              <FileText />
            </div>
            <div className="flex-grow-1">
              <P>
                <Link to={`${process.env.PUBLIC_URL}/ecommerce/invoice `}>Tickets Generated</Link>
                <span className="pull-right">1 hr</span>
              </P>
            </div>
          </div>
        </LI>
        <LI>
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
              <Send />
            </div>
            <div className="flex-grow-1">
              <P>
                <Link to={`${process.env.PUBLIC_URL}/email-app `}>Delivery Complete</Link>
                <span className="pull-right">45 min</span>
              </P>
            </div>
          </div>
        </LI>
        <LI>
          <Link className="btn btn-primary" to={`${process.env.PUBLIC_URL}/email-app `}>Check all notification</Link>
        </LI>
      </ul>
    </LI>
  );
};

export default Notification;

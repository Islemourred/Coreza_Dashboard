import { Link } from "react-router-dom";
import { NavLink } from "reactstrap";
import { ChevronDown } from 'react-feather'
import { LI, UL } from "../../../AbstractElements";
import {Href} from "../../../Constant"
const Appliacation = () => {
  return (
    <LI attrLI={{ className: "onhover-dropdown" }}>
      <span className="f-w-600">Application</span>
      <span><ChevronDown className="middle" /></span>
      <UL attrUL={{ className: "onhover-show-div left-dropdown" }}>
        <LI attrLI={{ className: "flyout-right" }}>
          <NavLink href={Href}>Project </NavLink>
          <UL>
            <LI><Link to={`${process.env.PUBLIC_URL}/project/project-list`}>Project List</Link></LI>
            <LI><Link to={`${process.env.PUBLIC_URL}/project/new-project`}>Project Create</Link></LI>
          </UL>
        </LI>
        <LI><NavLink to={`${process.env.PUBLIC_URL}/file-manager`}>File manager</NavLink></LI>
        <LI><Link to={`${process.env.PUBLIC_URL}/kanban-board`}>kanban</Link></LI>
        <LI attrLI={{ className: "flyout-right" }}>
          <NavLink href={Href}> Ecommerce</NavLink>
          <UL>
            <LI><Link to={`${process.env.PUBLIC_URL}/ecommerce/product`}>Product</Link></LI>
            <LI><Link to={`${process.env.PUBLIC_URL}/ecommerce/product-page/1`}>Product Page</Link></LI>
            <LI><Link to={`${process.env.PUBLIC_URL}/ecommerce/product-list`}> Product List</Link></LI>
            <LI><Link to={`${process.env.PUBLIC_URL}/ecommerce/payment-details`}> Payment Details</Link></LI>
            <LI><Link to={`${process.env.PUBLIC_URL}/ecommerce/orderhistory`}> Order History</Link></LI>
            <LI><Link to={`${process.env.PUBLIC_URL}/ecommerce/invoice`}>Invoice</Link></LI>
            <LI><Link to={`${process.env.PUBLIC_URL}/ecommerce/cart`}>Cart</Link></LI>
            <LI><Link to={`${process.env.PUBLIC_URL}/ecommerce/whishlist`}> Wishlist</Link></LI>
            <LI><Link to={`${process.env.PUBLIC_URL}/ecommerce/checkout`}> Checkout</Link></LI>
            <LI><Link to={`${process.env.PUBLIC_URL}/ecommerce/pricing`}> Pricing </Link></LI>
          </UL>
        </LI>
        <LI attrLI={{ className: "flyout-right" }}>
          <NavLink href={Href}> Email</NavLink>
          <UL>
            <LI><Link to={`${process.env.PUBLIC_URL}/email-app`}>Mail Inbox</Link></LI>
            <LI><Link to={`${process.env.PUBLIC_URL}/email/readmail`}>Read Mail</Link></LI>
            <LI><Link to={`${process.env.PUBLIC_URL}/email-app/compose`}>Compose</Link></LI>
          </UL>
        </LI>
        <LI attrLI={{ className: "flyout-right" }}>
          <NavLink href={Href}>Chat </NavLink>
            <UL>
              <LI><Link to={`${process.env.PUBLIC_URL}/chat-app`}>Chat App</Link></LI>
              <LI><Link to={`${process.env.PUBLIC_URL}/video-chat-app`}>Video Chat</Link></LI>
            </UL>
        </LI>
        <LI attrLI={{ className: "flyout-right" }}>
          <NavLink href={Href}>Users</NavLink>
          <UL>
            <LI><Link to={`${process.env.PUBLIC_URL}/users/userProfile`}>User Profile</Link></LI>
            <LI><Link to={`${process.env.PUBLIC_URL}/users/userEdit`}>Users Edit</Link></LI>
            <LI><Link to={`${process.env.PUBLIC_URL}/users/userCards`}>User Cards</Link></LI>
          </UL>
        </LI>
        <LI><Link to={`${process.env.PUBLIC_URL}/bookmark`}>Bookmarks</Link></LI>
        <LI><Link to={`${process.env.PUBLIC_URL}/contact`}>Contacts</Link></LI>
        <LI><Link to={`${process.env.PUBLIC_URL}/social-app`}>Social App</Link>
        </LI>
      </UL>
    </LI>
  );
};

export default Appliacation;

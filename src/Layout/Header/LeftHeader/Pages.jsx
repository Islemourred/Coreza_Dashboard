import { ChevronDown } from 'react-feather'
import { LI, UL } from "../../../AbstractElements";
import { Link } from "react-router-dom";
const Pages = () => {
  return (
    <LI attrLI={{ className: "onhover-dropdown" }}>
      <span className="f-w-600">More pages</span>
      <span><ChevronDown className="middle" /></span>
      <UL attrUL={{ className: "onhover-show-div left-dropdown" }}>
        <LI><Link to={`${process.env.PUBLIC_URL}/samplepage`}>Sample Page</Link></LI>
        <LI><Link to={`${process.env.PUBLIC_URL}/bookmark`}>Bookmark</Link></LI>
        <LI><Link to={`${process.env.PUBLIC_URL}/todo-app/todo`}>To-do</Link></LI>
        <LI><Link to={`${process.env.PUBLIC_URL}/faq`}>Faq</Link></LI>
      </UL>
    </LI>
  );
};

export default Pages;

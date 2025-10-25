import React, {  useState, useEffect } from "react";
import { ChevronsUp } from "react-feather";

const TapTop = () => {
  const [taptopStyle, setTapTopStyle] = useState("none");

  const executeScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (window.scrollY > 600) {
      setTapTopStyle("block");
    } else {
      setTapTopStyle("none");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
      <div className="tap-top" style={{ display: taptopStyle }}>
        <ChevronsUp onClick={() => executeScroll()} />
      </div>
  );
};
export default TapTop;

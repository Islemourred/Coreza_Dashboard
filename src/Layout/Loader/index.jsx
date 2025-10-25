import React, { useEffect, useState } from "react";

const Loader = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [show]);

  return (
    <div className={`loader-wrapper ${!show ? "" : "d-none"}`}>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"> </div>
      <div className="dot"></div>
    </div>
  );
};

export default Loader;

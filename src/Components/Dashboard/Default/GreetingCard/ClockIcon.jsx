import React from "react";
import { Clock } from "react-feather";

const ClockIcon = ({ curHr, curMi, meridiem }) => {
  return (
    <div className="badge-group">
      <span className="badge badge-light-primary f-12">
        <Clock style={{ width: "12px", height: "12px" }} className="me-1" />
        <span id="txt">
          {curHr}:{curMi < 10 ? "0" + curMi : curMi} {meridiem}
        </span>
      </span>
    </div>
  );
};

export default ClockIcon;

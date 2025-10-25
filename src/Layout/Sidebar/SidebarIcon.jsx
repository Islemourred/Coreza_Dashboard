import  {  useState } from "react";
import { Grid } from "react-feather";
import { Link } from 'react-router-dom';
import SidebarLogo from "./SidebarLogo";
const SidebarIcon = () => {

  const [sidebartoogle, setSidebartoogle] = useState(true);
  return (
    <>
      <div className="logo-wrapper ">
      <SidebarLogo sidebartoogle={sidebartoogle} setSidebartoogle={setSidebartoogle} />
      </div>
      <div className="logo-icon-wrapper">
        <Link to={"/dashboard/default"} >
          <div className="icon-box-sidebar">
            <Grid />
          </div>
        </Link>
      </div>

    </>
  );
};

export default SidebarIcon;

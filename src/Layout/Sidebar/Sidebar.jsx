import { Fragment, useContext, useEffect, useState } from "react";
import CustomizerContext from "../../Helper/Customizer";
import { MENU } from "./Menu";
import { getMenuByRole } from "./CRMMenu";
import { useCRM } from "../../Helper/CRM/CRMProvider";
import SidebarIcon from "./SidebarIcon";
import SimpleBar from "simplebar-react";
import { ArrowLeft, ArrowRight } from "react-feather";
import ConfigDB from "../../Config/ThemeConfig";
import SidebarSubMenu from "./SidebarSubMenu";
import BackBtn from "./BackBtn";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState([]);
  const { togglSidebar } = useContext(CustomizerContext);
  const { user } = useCRM();
  const sidebar_types = localStorage.getItem("sidebar_types");
  const wrapper = sidebar_types || ConfigDB.data.settings.sidebar.type;
  const [margin, setMargin] = useState(0);
  const [leftArrow, setLeftArrow] = useState(false);
  const [rightArrow, setRightArrow] = useState(false);
  const [width, setWidth] = useState(0);

  // Get menu based on user role, fallback to default menu if no role
  const menuToUse = user?.role ? getMenuByRole(user.role) : MENU;

  const handleResize = () => {
    setWidth(window.innerWidth - 500);
  };
  const id = window.location.pathname.split("/").pop();
  const layout = id;
  useEffect(() => {
    setLeftArrow(true);
  }, []);

  useEffect(() => {
    document.querySelector(".left-arrow").classList.add("d-none");
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [layout]);
  const scrollToRight = () => {
    if (margin <= -2598 || margin <= -2034) {
      if (width === 492) {
        setMargin(-3570);
      } else {
        setMargin(-3464);
      }
      setRightArrow(true);
      setLeftArrow(false);
    } else {
      setLeftArrow(false);
      setMargin((margin) => (margin += -width));
    }
  };
  const scrollToLeft = () => {
    if (margin >= -width) {
      setMargin(0);
      setLeftArrow(true);
      setRightArrow(false);
    } else {
      setMargin((margin) => (margin += width));
      setRightArrow(false);
    }
  };
  return (
    <div
      className={`sidebar-wrapper ${togglSidebar ? "close_icon" : ""} `}
      id="sidebar-wrapper"
    >
      <div>
        <SidebarIcon />
        <nav className="sidebar-main">
          <div
            className={`left-arrow ${leftArrow ? "d-none" : ""}`}
            id="left-arrow"
            onClick={scrollToLeft}
          >
            <ArrowLeft />
          </div>
          <div
            id="sidebar-menu"
            style={
              wrapper.split(" ").includes("horizontal-wrapper")
                ? { marginLeft: margin + "px" }
                : { margin: "0px" }
            }
          >
            <ul
              className="sidebar-links"
              style={{ display: "block" }}
              id="simple-bar"
            >
              <SimpleBar style={{ height: "300px" }}>
                <BackBtn />
                {menuToUse.map((item, i) => (
                  <Fragment key={i}>
                    <li className={item.className}>
                      <SidebarSubMenu
                        menu={item.menu}
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        level={0}
                      />
                    </li>
                  </Fragment>
                ))}
              </SimpleBar>
            </ul>
          </div>
          <div
            className={`right-arrow ${rightArrow ? "d-none" : ""}`}
            onClick={scrollToRight}
          >
            <ArrowRight />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;

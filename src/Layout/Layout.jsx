import  { Fragment, useContext, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Footer from "./Footer/index";
import TapTop from "./TapTop/index";
import Header from "./Header";
import SideBar from "./Sidebar/Sidebar";
import Themecustomizer from "./ThemeCustomizer";
import CheckContext from "../Helper/Customizer";
import ProductContext from "../Helper/product";
import AnimationThemeContext from "../Helper/AnimationTheme";
import ConfigDB from "../Config/ThemeConfig";
import Loader from "./Loader";

const Layout = ({ children, classNames, ...rest }) => {
  const navigate = useNavigate();
  const {   setDefaultClass, setTogglSidebar ,sidebar_types } =
    useContext(CheckContext);
  const { setIsVertical } = useContext(ProductContext);
  const location = useLocation();
  const queryData = location?.search?.split("=")[1]?.toString();
  const { animation } = useContext(AnimationThemeContext);
  const animationTheme =
  localStorage.getItem("animation") ||
  animation ||
  ConfigDB.data.router_animation;
  const sidebarType = localStorage.getItem("sidebar_types");
  let sidebar_types1 = (queryData === "compact-wrapper" || queryData === "horizontal-wrapper")? queryData: localStorage.getItem('sidebar_types') || ConfigDB.data.settings.sidebar.type || sidebar_types;

const sideBarReload = ()=>{
  if (sidebarType === "horizontal-wrapper") {
    if (window.innerWidth <= 1200) {
      navigate({ search: `?sidebar=compact-wrapper` });
      setDefaultClass(true);
      sidebar_types1= "compact-wrapper"
    } else {
      navigate({ search: `?sidebar=horizontal-wrapper` });
      setDefaultClass(false);
    }
  }
} 
  useEffect(() => { 
    sideBarReload()
    setDefaultClass(true);
    window.addEventListener("resize", () => {
      sideBarReload()
      if (window.innerWidth - 440 <= 759) {
        setTogglSidebar(true);
      } else {
        setTogglSidebar(false);
      }
      if (window.innerWidth <= 1200) {
        setIsVertical(true);
      } else {
        setIsVertical(false);
      }
    });
  }, []);


  return (
    <Fragment>
      <Loader />
      <TapTop />
      <div className={`page-wrapper ${sidebar_types1} `} id="pageWrapper">
        <Header />
        <div className="page-body-wrapper">
          <SideBar />
          <div className="page-body">
            <TransitionGroup {...rest}>
              <CSSTransition key={location.key} timeout={100} classNames={animationTheme} unmountOnExit>
                <div>
                  <Outlet />
                </div>
              </CSSTransition>
            </TransitionGroup>
          </div>
          <Footer />
        </div>
      </div>
      <Themecustomizer />
      <ToastContainer />
    </Fragment>
  );
};
export default Layout;
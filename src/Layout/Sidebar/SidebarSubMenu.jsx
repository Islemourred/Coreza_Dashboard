import { useEffect } from "react";
import { Href } from "../../Constant";
import { ActiveNavLinkUrl } from "../../Helper/ActioveNavUrl";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SidebarSubMenu = ({ menu, className, setIsOpen, isOpen, level }) => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  function shouldSetActive({ item }) {
    var returnValue = false;
    if (item?.url === pathname) {
      returnValue = true;
    }
    if (!returnValue && item?.menu) {
      item?.menu.every((subItem) => {
        returnValue = shouldSetActive({ item: subItem });
        return !returnValue;
      });
    }
    return returnValue;
  }

  useEffect(() => {
    menu.forEach((item) => {
      let gotValue = shouldSetActive({ item });
      if (gotValue) {
        let temp = isOpen;
        temp[level] = item.title;
        setIsOpen(temp);
      }
    });
  }, []);

  return (
    <ul className={`${className ? className : ""}`}>
      {menu.map((item, i) => (
        <li
          key={i}
          className={`${className ? '' : 'sidebar-link sidebar-title'}  ${(item.menu ? item.menu.map((innerItem) => ActiveNavLinkUrl(innerItem.url)).includes(true) : ActiveNavLinkUrl(item.url)) || isOpen[level] === item.title  ? 'active' : ''}`}
        >
          <Link
            className={`${className ? "" : "sidebar-link sidebar-title"}  ${
              (item.menu? item.menu.map((innerItem) => ActiveNavLinkUrl(innerItem.url)).includes(true): ActiveNavLinkUrl(item.url)) || isOpen[level] === item.title ? "active": ""}`}
            to={item.url ? item.url : Href}
            onClick={() => {
              const temp = isOpen;
              temp[level] = item.title !== temp[level] && item.title;
              setIsOpen(temp);
            }}
          >
              {item.icon ? item.icon : ""}
              <span className={`${item.class ? item.class : ""}`}>
                {t(item.title)}
              </span>
            {item.menu && (<div className="according-menu"><i className="fa fa-angle-right"></i></div>)}
          </Link>
          {item.menu && (
            <SidebarSubMenu menu={item.menu} isOpen={isOpen} setIsOpen={setIsOpen} level={level + 1} className="sidebar-submenu "
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default SidebarSubMenu;
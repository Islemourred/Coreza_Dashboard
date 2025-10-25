import { useState, useEffect, useCallback, useContext } from "react";
import { Search } from "react-feather";
import { LI } from "../../../AbstractElements";
import { SEARCHMENU } from "../../Sidebar/Menu";
import CustomContext from "../../../Helper/Customizer";
import { Input } from "reactstrap";
import ListOfMenu from "../RightHeader/Bookmark/ListOfMenu";
import EmpltyClass from "../RightHeader/Bookmark/EmptyClass";
const SearchBar = () => {
  const mainmenu = SEARCHMENU;
  const [IsOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchIcon, setSearchIcon] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const { setIsClose } = useContext(CustomContext);

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) { setSearchValue(""); setSearchResult([]); setIsClose(false);}}, []);
  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction, searchValue]);
  const checkSearchResultEmpty = (items) => {
    if (!items.length) {
      setSearchIcon(true);
    } else {
      setSearchIcon(false);
    }
  };
  const addFix = () => setSearchToggle(true);
  const removeFix = () => { setSearchValue(""); setSearchToggle(false);};
  const handleSearchKeyword = (keyword) => {
    keyword ? addFix() : removeFix();
    const items = [];
    setSearchValue(keyword);
    mainmenu?.map((menuItems) => {
      menuItems.menu.filter((mItems) => {
        if ( mItems.title.toLowerCase().includes(keyword) && mItems.type === "link") items.push(mItems);
        if (!mItems.menu) return false;
        mItems.menu.filter((subItems) => {
          if ( subItems.title.toLowerCase().includes(keyword) && subItems.type === "link") { subItems.icon = mItems.icon; items.push(subItems);}
          if (!subItems.menu) return false;
          subItems.menu.filter((suSubItems) => {
            if (suSubItems.title.toLowerCase().includes(keyword)) { suSubItems.icon = mItems.icon; items.push(suSubItems);}
            return suSubItems;
          });
          return subItems;
        }); checkSearchResultEmpty(items); setSearchResult(items); return mItems;
      });
      return menuItems;
    });
  };

  return (
    <>
      <LI>
        <div className="right-header ps-0">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text mobile-search">
                <i className="fa fa-search"></i>
              </span>
            </div>
            <Input type="text" placeholder="Search Here........" defaultValue={searchValue} onChange={(e) => handleSearchKeyword(e.target.value)}/>
            <ListOfMenu searchValue={searchValue} searchResult={searchResult} removeFix={removeFix} searchBar={true} searchToggle={searchToggle}/>
            <EmpltyClass searchIcon={searchIcon} search={true} />
          </div>
        </div>
      </LI>
      <LI attrLI={{ className: "serchinput" }}>
        <div className="serchbox">
          <Search onClick={() => setIsOpen(!IsOpen)} />
        </div>
        <div className={`form-group search-form ${IsOpen ? "open" : ""}`}>
          <Input type="text" placeholder="Search here..." defaultValue={searchValue} onChange={(e) => handleSearchKeyword(e.target.value)}/>
          <ListOfMenu searchValue={searchValue} searchResult={searchResult} removeFix={removeFix} searchBar={true} searchToggle={searchToggle}/>
          <EmpltyClass searchIcon={searchIcon} search={true} />
        </div>
      </LI>
    </>
  );
};

export default SearchBar;

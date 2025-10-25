import {useState,useEffect,useCallback,useContext,} from "react";
import { Input } from "reactstrap";
import { SEARCHMENU } from "../../../../Layout/Sidebar/Menu";
import { LI, UL } from "../../../../AbstractElements";
import ListOfMenu from "./ListOfMenu";
import EmpltyClass from "./EmptyClass";
import BackBtns from "./BackBtn";
import CustomContext from "../../../../Helper/Customizer";
import RemoveBookmark from "./RemoveBookmark";
import { Bookmark } from "react-feather";
import BookmarkContext from "../../../../Helper/bookmark";

const Bookmarks = () => {
  const { bookMarkClass } = useContext(BookmarkContext);
  const mainmenu = SEARCHMENU
  const { setIsClose } = useContext(CustomContext);
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState(false); // eslint-disable-next-line
  const [bookmarkSearch, SetBookmarkSearch] = useState(false);
  const [bookmarkItems, setBookmarkItems] = useState([]);
  const [searchIcon, setSearchIcon] = useState(false);
  const [bookmarkDropDown, setBookmarkDropDown] = useState(false);
  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) { setSearchValue(""); setSearchResult([]); SetBookmarkSearch(false); setIsClose(false);} // eslint-disable-next-line
}, []);
  const checkSearchResultEmpty = (items) => {
    if (!items.length) {setSearchIcon(true);
    } else {setSearchIcon(false);}
  };
  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    mainmenu?.map((menuItems) => {
      menuItems.menu.filter((mItems) => {
        if ( mItems.bookmark) setBookmarkItems((bookmarkItems) => [...bookmarkItems, mItems])
        if (!mItems.menu) return false;
        mItems.menu.filter((subItems) => {
          if ( subItems.bookmark) { subItems.icon = mItems.icon; setBookmarkItems((bookmarkItems) => [...bookmarkItems, subItems]);}
          if (!subItems.menu) return false;
          subItems.menu.filter((suSubItems) => {
            if (suSubItems.bookmark) { suSubItems.icon = mItems.icon; setBookmarkItems((bookmarkItems) => [...bookmarkItems, suSubItems]);}
            return suSubItems;
          });
          return subItems;
        });
        return mItems;
      });
      return menuItems;
    });
    return () => {document.removeEventListener("keydown", escFunction, false);};
  }, [mainmenu, escFunction]);
  const addFix = () => setIsClose(true)
  const removeFix = () => setSearchValue(searchValue)
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
      });return menuItems; });};
  const removeFixCallback = useCallback((searchVal) => {setSearchValue(searchVal);}, []);
  const setCallbackBookmark = useCallback((valueAdd) => {setBookmarkItems(valueAdd);}, []);
  return (
      <LI attrLI={{ className: "onhover-dropdown" }}>
        <div className="notification-box" onClick={() => setBookmarkDropDown(!bookmarkDropDown)}><Bookmark /></div>
        <div className={`onhover-show-div bookmark-flip ${bookmarkDropDown ? "active" : ""}`}>
          <div className="flip-card">
            <div className={`flip-card-inner ${bookMarkClass ? "flipped" : ""}`}>
              <RemoveBookmark bookmarkItems={bookmarkItems} />
              <div className="back dropdown-title">
                <UL>
                    <LI>
                    <div className="bookmark-dropdown flip-back-content">
                      <Input type="text" placeholder="search..." defaultValue={searchValue} onChange={(e) => handleSearchKeyword(e.target.value)}/>
                      <ListOfMenu removeFix={removeFixCallback} bookmarkItems={bookmarkItems} setCallbackBookmark={setCallbackBookmark} searchValue={searchValue} setBookmarkItems={setBookmarkItems} searchResult={searchResult} setSearchResult={setSearchResult}/>
                      <EmpltyClass searchIcon={searchIcon} />
                    </div>
                  </LI><BackBtns />
                </UL>
              </div>
            </div>
          </div>
        </div>
      </LI>
  );
};
export default Bookmarks;
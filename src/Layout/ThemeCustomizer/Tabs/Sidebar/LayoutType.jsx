import { Fragment, useState, useContext, useEffect } from 'react';
import { H6, LI, UL } from '../../../../AbstractElements';
import ConfigDB from '../../../../Config/ThemeConfig';
import CustomizerContext from '../../../../Helper/Customizer/index';
import CommenUL from './CommenUL';
import { useLocation, useNavigate } from 'react-router';

const LayoutType = () => {
  const navigate = useNavigate()
  const { addLayout} = useContext(CustomizerContext);
  const localStorageLayout = localStorage.getItem('layout_type') || ConfigDB.data.settings.layout_type;
  const [layout_type, setLayout_type] = useState(localStorageLayout);
  useEffect(() => {
    localStorageLayout && document.body.classList.add(localStorageLayout);
    ConfigDB.data.settings.layout_type = localStorageLayout;
    if (localStorageLayout === 'box-layout') {
      document.documentElement.dir = 'ltr';
    } else {
      document.documentElement.dir = localStorageLayout;
    }
  }, [localStorageLayout]);
  const location = useLocation();
  const queryData = location?.search?.split("=")[1]?.toString();


  useEffect(() => {
    if (queryData === "box-layout") {
      handleLayout("box-layout")
    }
  }, [queryData]);

  const handleLayout = (layout) => {
    addLayout(layout);
    setLayout_type(layout);
    if (layout === 'rtl') {
      document.body.classList.add('rtl');
      document.body.classList.remove('ltr');
      document.body.classList.remove('box-layout');
      document.documentElement.dir = 'rtl';
    } else if (layout === 'ltr') {
      document.body.classList.add('ltr');
      document.body.classList.remove('rtl');
      document.body.classList.remove('box-layout');
      document.documentElement.dir = 'ltr';
    } else if (layout === 'box-layout') {
      document.body.classList.remove('ltr');
      document.body.classList.remove('rtl');
      document.body.classList.add('box-layout');      
      document.documentElement.dir = 'ltr';
      navigate({search: "?layout=box-layout"});
    }
  };


  return (
    <Fragment>
      <H6>Layout Type</H6>
      <UL attrUL={{ className: 'simple-list main-layout layout-grid flex-row' }}>
        <LI attrLI={{ className: `${layout_type === 'ltr ' ? 'active  ' : ''}`, onClick: () => handleLayout('ltr')}}>
          <div className="header bg-light">
            <CommenUL /> </div>
          <div className="body">
            <UL>
              <LI attrLI={{ className: 'bg-light sidebar' }}></LI>
              <LI attrLI={{ className: 'bg-light body' }}>
                <span className="badge badge-primary">LTR</span>
              </LI>
            </UL>
          </div>
        </LI>
        <LI attrLI={{ className: `${layout_type === 'rtl sidebar-wrapper ' ? 'active  ' : ''}`, onClick: () => handleLayout('rtl') }}>
          <div className="header bg-light">
            <CommenUL /></div>
          <div className="body">
            <UL>
              <LI attrLI={{ className: 'bg-light body' }}>
                <span className="badge badge-primary">RTL</span>
              </LI>
              <LI attrLI={{ className: 'bg-light sidebar ms-1' }}></LI>
            </UL>
          </div>
        </LI>
        <LI attrLI={{className: `${layout_type === 'box-layout sidebar-wrapper ' ? 'active ' : ''}`, onClick: () => handleLayout('box-layout')}}>
          <div className="header bg-light">
            <CommenUL />
          </div>
          <div className="body">
            <UL>
              <LI attrLI={{ className: 'bg-light sidebar' }} ></LI>
              <LI attrLI={{ className: 'bg-light body' }}>
                <span className="badge badge-primary">Box</span>
              </LI>
            </UL>
          </div>
        </LI>
      </UL>
    </Fragment>
  );
};
export default LayoutType;
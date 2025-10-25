import React, { Fragment, useEffect, useContext, useState } from "react";
import { H6, LI, UL } from "../../../../AbstractElements";
import ConfigDB from "../../../../Config/ThemeConfig";
import { MixLayout } from "../../../../Constant";
import CustomizerContext from "../../../../Helper/Customizer/index";
import CommenUL from "../Sidebar/CommenUL";

const MixLayoutComponent = () => {
  const [isActive, setIsActive] = useState(1);
  const { addMixBackgroundLayout, setMixLayout } = useContext(CustomizerContext);
  const mixLayout = localStorage.getItem("mix_background_layout") || ConfigDB.data.color.mix_background_layout;

  useEffect(() => {
    if (mixLayout !== "light-only") {
      setMixLayout(false);
    } else {
      setMixLayout(true);
    }
    ConfigDB.data.color.mix_background_layout = mixLayout;
    document.body.classList.add(mixLayout);
  }, [mixLayout, setMixLayout]);

  const handleCustomizerMix_Background = (value, num) => {
    addMixBackgroundLayout(value);
    if (value === "light-only") {
      document.body.classList.add("light-only");
      document.body.classList.remove("dark-sidebar");
      document.body.classList.remove("dark-only");
      setIsActive(num);
    } else if (value === "dark-sidebar") {
      document.body.classList.remove("light-only");
      document.body.classList.add("dark-sidebar");
      document.body.classList.remove("dark-only");
      setIsActive(num);
    } else if (value === "dark-only") {
      document.body.classList.remove("light-only");
      document.body.classList.remove("dark-sidebar");
      document.body.classList.add("dark-only");
      setIsActive(num);
    }
  };
  return (
    <Fragment>
      <H6 className="">{MixLayout}</H6>
      <UL attrUL={{ className: "simple-list flex-row layout-grid customizer-mix" }}>
        <LI
          attrLI={{
            className: `color-layout ${isActive === 2 ? "active" : ""}`,
            dataattr: "dark-sidebar",
            onClick: () => handleCustomizerMix_Background("dark-sidebar", 2),
          }}
        >
          <div className="header bg-light">
            <CommenUL />
          </div>
          <div className="body">
            <UL attrUL={{ className: "simple-list flex-row" }}>
              <LI attrLI={{ className: "bg-dark sidebar" }}></LI>
              <LI attrLI={{ className: "bg-light body" }}> </LI>
            </UL>
          </div>
        </LI>
        <LI
          attrLI={{
            className: `color-layout ${isActive === 3 ? "active" : ""}`,
            dataattr: "dark-only",

            onClick: () => handleCustomizerMix_Background("dark-only", 3),
          }}
        >
          <div className="header bg-dark">
            <CommenUL />
          </div>
          <div className="body">
            <UL attrUL={{ className: "simple-list flex-row" }}>
              <LI attrLI={{ className: "bg-dark sidebar" }}></LI>
              <LI attrLI={{ className: "bg-dark body" }}> </LI>
            </UL>
          </div>
        </LI>
      </UL>
    </Fragment>
  );
};

export default MixLayoutComponent;

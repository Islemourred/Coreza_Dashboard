import React, { useState } from "react";
import { Globe } from "react-feather";
import { LI } from "../../../AbstractElements";
import { useTranslation } from "react-i18next";
import { English, Deutsch, Español, Français, Português, 简体中文 } from '../../../Constant';

const Language = () => {
  const [open, setOpen] = useState(false);

  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  const LanguageSelection = (open) => {
    if (open) {
      setOpen(!open);
    } else {
      setOpen(!open);
    }
  };
  return (
    <LI attrLI={{ className: "language-nav" }}>
      <div className={`translate_wrapper ${open ? "active" : ""}`}>
        <div className="current_lang">
          <div className="lang" onClick={() => LanguageSelection(open)}>
            <Globe />
          </div>
        </div>
        <ul className={`more_lang ${open ? "active" : ""}`}>
        <div className="lang" onClick={() => changeLanguage('en')}><i className="flag-icon m-0 flag-icon-us"></i><span className="lang-txt">{English}<span> {'(US)'}</span></span></div>
                    <div className="lang" onClick={() => changeLanguage('du')}><i className="flag-icon m-0 flag-icon-de"></i><span className="lang-txt">{Deutsch}</span></div>
                    <div className="lang" onClick={() => changeLanguage('es')}><i className="flag-icon m-0 flag-icon-es"></i><span className="lang-txt">{Español}</span></div>
                    <div className="lang" onClick={() => changeLanguage('fr')}><i className="flag-icon m-0 flag-icon-fr"></i><span className="lang-txt">{Français}</span></div>
                    <div className="lang" onClick={() => changeLanguage('pt')}><i className="flag-icon m-0 flag-icon-pt"></i><span className="lang-txt">{Português}<span> {'(BR)'}</span></span></div>
                    <div className="lang" onClick={() => changeLanguage('cn')}><i className="flag-icon m-0 flag-icon-cn"></i><span className="lang-txt">{简体中文}</span></div>
                    <div className="lang" onClick={() => changeLanguage('ae')}><i className="flag-icon m-0 flag-icon-ae"></i><span className="lang-txt">{'لعربية'}<span> {'(ae)'}</span></span></div>
        </ul>
      </div>
    </LI>
  );
};

export default Language;

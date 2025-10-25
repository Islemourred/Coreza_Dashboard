import { useState, useContext, useEffect } from "react";
import { LI } from "../../../AbstractElements";
import CustomizerContext from "../../../Helper/Customizer";
import { useLocation, useNavigate } from "react-router";

const DarkMode = () => {
  const { addMixBackgroundLayout } = useContext(CustomizerContext);
  const [moonlight, setMoonlight] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const queryData = location?.search?.split("=")[1]?.toString();
  const handleSttings = (sidebar_Settings) => {
    navigate({ search: `?layout=${sidebar_Settings}` });
  };

  useEffect(() => {
    setTimeout(() => {
      if (queryData === "light-only" || queryData === 'dark-only') {
        MoonlightToggle(queryData === "light-only");
      } 
    },200)
    
  }, [queryData]);


  const MoonlightToggle = (light) => {
    if (light) {
        addMixBackgroundLayout('light-only');
        document.body.classList.remove("dark-only");
        document.body.classList.add("light-only");
        setMoonlight(!light);
    } else {
        addMixBackgroundLayout('dark-only');
        document.body.classList.remove("light-only");
        document.body.classList.add("dark-only");
        setMoonlight(!light);
    }
};

  return (
    <LI>
      <div className="mode" onClick={() => MoonlightToggle(moonlight)}>
        {moonlight ? (
          <i onClick={()=>handleSttings("light-only")} className="fa fa-lightbulb-o"></i>
        ) : (
          <i onClick={()=>handleSttings("dark-only")} className="fa fa-moon-o"></i>
        )}
      </div>
    </LI>
  );
};

export default DarkMode;

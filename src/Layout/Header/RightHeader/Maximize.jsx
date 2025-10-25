import React, { useState } from 'react';
import { LI } from '../../../AbstractElements'
import {  Maximize2, Minimize2 } from 'react-feather';


const Maximizes = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  /*
   *full screen function
   */
  function goFull() {

    if (
      (document.fullScreenElement && document.fullScreenElement !== null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)
    ) {
      setIsFullScreen(prev => prev = true);
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      setIsFullScreen(prev => prev = false);
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }
  return (
   <LI attrLI={{className:"maximize"}} >
   <a href="#javascript" onClick={goFull}>
        {isFullScreen ? <Minimize2/> : <Maximize2 />}
      </a>
       </LI>
  )
}

export default Maximizes
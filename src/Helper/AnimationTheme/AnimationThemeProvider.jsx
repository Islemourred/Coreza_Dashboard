import React, { useEffect, useState } from 'react';
import ConfigDB from '../../Config/ThemeConfig';
import Context from './index';

const AnimationThemeProvider = (props) => {
  const [animation, setAnimation] = useState('');

  useEffect(() => {
    setAnimation(ConfigDB.data.router_animation);
  }, [setAnimation, animation]);

  const routerAnimation = (layout_anim) => {
    ConfigDB.data.settings.router_animation = layout_anim;
    localStorage.setItem('animation', layout_anim);
    setAnimation(layout_anim);
  };

  return (
    <Context.Provider
      value={{
        ...props,
        animation,
        routerAnimation
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default AnimationThemeProvider;

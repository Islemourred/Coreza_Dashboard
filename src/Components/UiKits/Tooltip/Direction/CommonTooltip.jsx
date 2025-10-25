import React, { Fragment, useState } from 'react';
import { Btn, ToolTip } from '../../../../AbstractElements';

const CommonTooltip = ({ item }) =>{

    const [tooltip, setTooltip] = useState(false);
    const toggle = () => setTooltip(!tooltip);

    return(
      <Fragment>
        <Btn attrBtn={{ color:'primary', id:'Tooltip-' + item.id }}>{item.tooltip}</Btn>
        <ToolTip
            attrToolTip={{ 
                placement:item.placement, 
            isOpen:tooltip, 
            target:'Tooltip-' + item.id, 
            toggle:toggle }} >
          {item.tooltip}
        </ToolTip>
      </Fragment>
    );
};

export default CommonTooltip;

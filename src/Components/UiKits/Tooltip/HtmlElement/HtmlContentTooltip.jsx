import React, { Fragment, useState } from 'react';
import { Btn, ToolTip } from '../../../../AbstractElements';

const HtmlContentTooltip = ({ item }) =>{

    const [tooltip, setTooltip] = useState(false);
    const toggle = () => setTooltip(!tooltip);

    return(
      <Fragment>
        <Btn attrBtn={{ color:'primary', id:'Tooltip-' + item.id, onClick:toggle }}>{item.btntext}</Btn>
        <ToolTip
            attrToolTip={{ 
                placement:item.placement, 
            isOpen:tooltip, 
            target:'Tooltip-' + item.id }} >
          {item.tooltip}
        </ToolTip>
      </Fragment>
    );
};

export default HtmlContentTooltip;

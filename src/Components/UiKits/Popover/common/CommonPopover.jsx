import React, { useState } from 'react';
import { Popover, PopoverBody, PopoverHeader } from 'reactstrap';
import { Btn } from '../../../../AbstractElements';

const CommonPopover = ({ item }) => {
  const [popover, setPopover] = useState(false);
  const Toggle = () => setPopover(!popover);
  return (
    <>
      <Btn attrBtn={{ color: `${item.btncolor}`, className: "example-popover", id: `${'Popover-' + item.id}` }}>{item.btntext}</Btn>
      <Popover
        placement={item.placement}
        isOpen={popover}
        target={'Popover-' + item.id}
        toggle={Toggle}
        offset={item.offset}
        trigger={item.trigger}

      >
        <PopoverHeader>Popover title</PopoverHeader>
        <PopoverBody>
          {item.Popoverbody}
        </PopoverBody>
      </Popover>
    </>
  );
};

export default CommonPopover;
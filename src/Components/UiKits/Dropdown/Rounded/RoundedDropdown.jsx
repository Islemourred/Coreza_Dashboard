import React from 'react';
import { Button, ButtonGroup, Dropdown, DropdownItem, DropdownMenu } from 'reactstrap';

const RoundedDropdowns = ({ item }) => {
  return (
    <Dropdown>
      <ButtonGroup className="mb-0">
        <Button className="dropbtn btn-round rounded-pill" color={'primary'}>{item.btnText}<span><i className="icofont icofont-arrow-down"></i></span></Button>
        <DropdownMenu className="dropdown-content">
          {item.items.map((itm) =>
            <DropdownItem href="#" key={itm.id}>{itm.item}</DropdownItem>
          )}
        </DropdownMenu>
      </ButtonGroup>
    </Dropdown>
  );
};

export default RoundedDropdowns;
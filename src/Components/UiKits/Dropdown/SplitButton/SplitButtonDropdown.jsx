import React from 'react';
import { Dropdown, DropdownItem, DropdownMenu } from 'reactstrap';
import { Btn } from '../../../../AbstractElements';

const SplitButtonDropdown = ({ item }) =>{
    return(
      <div className="btn-group">
        <Btn attrBtn={{ color:item.leftButton }} >{item.btnText}</Btn>
        <Dropdown className="separated-btn">
          <Btn attrBtn={{ color:item.btncolor }} ><i className="icofont icofont-arrow-down"></i></Btn>
          <DropdownMenu className="dropdown-content digits">
            {item.items.map((itm, i) =>
              <DropdownItem href="#" key={i}>{itm.item}</DropdownItem>
              )}
          </DropdownMenu>
        </Dropdown>
      </div>
    );
};

export default SplitButtonDropdown;
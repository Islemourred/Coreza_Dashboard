import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import { AnotherAction, ButtonDropdown } from "../../../Constant";

const CommonDropDown = ({color,className}) => {
  return (
    <UncontrolledDropdown>
      <DropdownToggle color={color} caret className={className ?className:""}>
        {ButtonDropdown}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>{AnotherAction}</DropdownItem>
        <DropdownItem>{AnotherAction}</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default CommonDropDown;

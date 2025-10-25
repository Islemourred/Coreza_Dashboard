import { Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu } from 'reactstrap';
import { Btn } from '../../../AbstractElements';
import { Action, AnotherAction, BasicColorDropdown, Href, SeparatedLink, SomethingElseHere } from '../../../Constant';
import { BasicColorData } from '../../../Data/Ui-kits';
import CommonDropDown from './Common/CommonDropDown';
import HeadingCommon from '../../../Common/Component/HeadingCommon';

const BasicColor = () => {
  return (
    <Col sn="12" xl="12">
      <Card>
        <HeadingCommon Heading={BasicColorDropdown} CardHeaderClassName="pb-0" />
        <CardBody className="dropdown-basic">
          <Dropdown>
            <div className="btn-group mb-0">
              <Btn attrBtn={{ color: 'primary', className: 'dropbtn btn-pill' }} >Action <span><i className="icofont icofont-arrow-down"></i></span></Btn>
              <DropdownMenu className="dropdown-content">
                <DropdownItem href={Href}>{Action}</DropdownItem>
                <DropdownItem href={Href}>{AnotherAction}</DropdownItem>
                <DropdownItem href={Href}>{SomethingElseHere}</DropdownItem>
                <DropdownItem divider />
                <DropdownItem href={Href}>{SeparatedLink}</DropdownItem>
              </DropdownMenu>
            </div>
          </Dropdown>
          {BasicColorData.map((items) =>
            <CommonDropDown key={items.id} item={items} />
          )}
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicColor;
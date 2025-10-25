import { Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu } from 'reactstrap';
import { Btn } from '../../../../AbstractElements';
import { DropdownSplitButton, Href } from '../../../../Constant';
import { SplitData } from '../../../../Data/Ui-kits';
import SplitButtonDropdown from './SplitButtonDropdown';
import HeadingCommon from '../../../../Common/Component/HeadingCommon';

const SplitButton = () => {
  return (
    <Col sn="12" xl="12">
      <Card>
      <HeadingCommon Heading={DropdownSplitButton} CardHeaderClassName="pb-0" />
        <CardBody className="dropdown-basic">
          <div className="btn-group">
            <Btn attrBtn={{ color: 'light' }} >Primary Button</Btn>
            <Dropdown className="separated-btn">
              <Btn attrBtn={{ color: 'primary' }} ><i className="icofont icofont-arrow-down"></i></Btn>
              <DropdownMenu className="dropdown-content digits">
                <DropdownItem href={Href}>Link 1</DropdownItem>
                <DropdownItem href={Href}>Link 1</DropdownItem>
                <DropdownItem href={Href}>Link 1</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          {SplitData.map((items) =>
            <SplitButtonDropdown key={items.id} item={items} />
          )}
        </CardBody>
      </Card>
    </Col>
  );
};

export default SplitButton;
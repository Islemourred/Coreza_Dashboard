import { Button, ButtonGroup, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu } from 'reactstrap';
import { Href, RoundedDropdown } from '../../../../Constant';
import CommonDropDown from '../Common/CommonDropDown';
import { RoundedData } from '../../../../Data/Ui-kits';
import HeadingCommon from '../../../../Common/Component/HeadingCommon';

const Rounded = () => {
  return (
    <Col sn="12" xl="12">
      <Card>
        <HeadingCommon Heading={RoundedDropdown} CardHeaderClassName="pb-0" />
        <CardBody className="dropdown-basic">
          <Dropdown>
            <ButtonGroup className="mb-0">
              <Button className="dropbtn btn-round rounded-pill" color={'primary'}>Primary button<span><i className="icofont icofont-arrow-down"></i></span></Button>
              <DropdownMenu className="dropdown-content">
                <DropdownItem href={Href}>Action</DropdownItem>
                <DropdownItem href={Href}>Another Action</DropdownItem>
                <DropdownItem href={Href}>Something Else Here</DropdownItem>
                <DropdownItem href={Href}>Separated Link</DropdownItem>
              </DropdownMenu>
            </ButtonGroup>
          </Dropdown>
          {RoundedData.map((items) =>
            <CommonDropDown key={items.id} item={items} />
          )}
        </CardBody>
      </Card>
    </Col>
  );
};

export default Rounded;
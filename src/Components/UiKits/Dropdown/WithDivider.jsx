import { Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu } from 'reactstrap';
import { Btn } from '../../../AbstractElements';
import { AnotherLink, DropdownButton, DropdownDividerSpan, DropdownWithDivider, Href } from '../../../Constant';
import HeadingCommon from '../../../Common/Component/HeadingCommon';

const WithDivider = () => {
  return (
    <Col sm="12" lg="6">
      <Card>
        <HeadingCommon Heading={DropdownWithDivider} CardHeaderClassName="pb-0" span={DropdownDividerSpan} />
        <CardBody className="dropdown-basic">
          <Dropdown>
            <Btn attrBtn={{ color: 'primary', className: 'dropbtn' }}  >{DropdownButton} <span><i className="icofont icofont-arrow-down"></i></span></Btn>
            <DropdownMenu className="dropdown-content">
              <DropdownItem href={Href}>{'Link 1'}</DropdownItem>
              <DropdownItem href={Href}>{'Link 2'}</DropdownItem>
              <DropdownItem href={Href}>{'Link 3'}</DropdownItem>
              <DropdownItem divider />
              <DropdownItem href={Href}>{AnotherLink}</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithDivider;
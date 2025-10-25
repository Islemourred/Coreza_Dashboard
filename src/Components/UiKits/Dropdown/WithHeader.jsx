import { Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu } from 'reactstrap';
import { Btn} from '../../../AbstractElements';
import { AnotherLink, DropdownButton, DropdownHeader, DropdownWithHeader, DropdownWithHeaderSpan, Href } from '../../../Constant';
import HeadingCommon from '../../../Common/Component/HeadingCommon';

const WithHeader = () => {
  return (
    <Col sm="12" lg="6">
      <Card>
        <HeadingCommon Heading={DropdownWithHeader} CardHeaderClassName="pb-0" span={DropdownWithHeaderSpan} />
        <CardBody className="dropdown-basic">
          <Dropdown>
            <Btn attrBtn={{ color: 'primary', className: 'dropbtn' }}>{DropdownButton} <span><i className="icofont icofont-arrow-down"></i></span></Btn>
            <DropdownMenu className="dropdown-content">
              <DropdownItem header>{DropdownHeader}</DropdownItem>
              <DropdownItem href={Href}>{'Link 1'}</DropdownItem>
              <DropdownItem href={Href}>{'Link 2'}</DropdownItem>
              <DropdownItem header>{DropdownHeader}</DropdownItem>
              <DropdownItem href={Href}>{AnotherLink}</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithHeader;
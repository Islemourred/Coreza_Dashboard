import { Card, CardBody,  Col, Dropdown, DropdownItem, DropdownMenu } from 'reactstrap';
import { Btn } from '../../../AbstractElements';
import { Active, Disabled, DropdownButton, DropdownWithDisable, DropdownWithDisableSpan, Href, Normal } from '../../../Constant';
import HeadingCommon from '../../../Common/Component/HeadingCommon';

const WithDisable = () => {
  return (
    <Col sm="12" xl="4">
      <Card>
        <HeadingCommon Heading={DropdownWithDisable} CardHeaderClassName="pb-0" span={DropdownWithDisableSpan} />
        <CardBody className="dropup-basic">
          <Dropdown className="dropup">
            <Btn attrBtn={{ color: 'primary', className: 'dropbtn' }}>{DropdownButton} <span><i className="icofont icofont-arrow-up"></i></span></Btn>
            <DropdownMenu className="dropup-content dropdown-content">
              <DropdownItem href={Href}>{Normal}</DropdownItem>
              <DropdownItem href={Href} active>{Active}</DropdownItem>
              <DropdownItem href={Href} disabled>{Disabled}</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithDisable;
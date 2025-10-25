import { Card, CardBody,  Col, Dropdown, DropdownItem, DropdownMenu } from 'reactstrap';
import { Btn } from '../../../AbstractElements';
import {  DropdownWithDropUp, DropdownWithDropUpSpan, Href, DropStart,DropUp,DropEnd,DropDowns} from '../../../Constant';
import HeadingCommon from '../../../Common/Component/HeadingCommon';

const WithDropUp = () => {
  return (
    <Col sm="12" xl="8">
      <Card>
        <HeadingCommon Heading={DropdownWithDropUp} CardHeaderClassName="pb-0" span={DropdownWithDropUpSpan} />
        <CardBody>
          <div className="dropup-basic dropdown-basic">
            <Dropdown className="dropup me-3">
              <Btn attrBtn={{ color: 'warning', className: 'dropbtn' }}  >{DropUp} <span><i className="icofont icofont-arrow-up"></i></span></Btn>
              <DropdownMenu className="dropup-content dropdown-content">
                <DropdownItem href={Href}>{'Link 1'}</DropdownItem>
                <DropdownItem href={Href}>{'Link 2'}</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown className="dropend me-3">
              <Btn attrBtn={{ color: 'danger', className: 'dropbtn' }}  >{DropEnd} <span><i className="icofont icofont-arrow-up"></i></span></Btn>
              <DropdownMenu className="dropend-content dropdown-content">
                <DropdownItem href={Href}>{'Link 1'}</DropdownItem>
                <DropdownItem href={Href}>{'Link 2'}</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown className="dropdown me-3">
              <Btn attrBtn={{ color: 'info', className: 'dropbtn' }}  >{DropDowns} <span><i className="icofont icofont-arrow-up"></i></span></Btn>
              <DropdownMenu className="dropdown-content dropdown-content">
                <DropdownItem href={Href}>{'Link 1'}</DropdownItem>
                <DropdownItem href={Href}>{'Link 2'}</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown className="dropstart me-3">
              <Btn attrBtn={{ color: 'success', className: 'dropbtn' }}  >{DropStart} <span><i className="icofont icofont-arrow-up"></i></span></Btn>
              <DropdownMenu className="dropstart-content dropdown-content">
                <DropdownItem href={Href}>{'Link 1'}</DropdownItem>
                <DropdownItem href={Href}>{'Link 2'}</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithDropUp;
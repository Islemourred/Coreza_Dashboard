import { ButtonGroup, Card, CardBody, Col, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import HeadingCommon from '../../../Common/Component/HeadingCommon'
import { Action, AnotherAction, Dropdown,  Header, Nesting } from "../../../Constant";
import { Btn } from "../../../AbstractElements";
import ButtonGroup2 from "./ButtonGroup2";
const NestingClass = () => {
  return (
    <Col lg="6">
      <Card className="height-equal">
        <HeadingCommon Heading={Nesting} CardHeaderClassName="pb-0" span="Make nesting buttons" />
        <CardBody className="btn-group-wrapper">
          <div className="m-b-30">
            <ButtonGroup>
              <Btn attrBtn={{ color: "primary" }}>
                <i className="fa fa-bold"></i>
              </Btn>
              <Btn attrBtn={{ color: "secondary" }}>
                <i className="fa fa fa-italic"></i>
              </Btn>
              <UncontrolledDropdown>
                <DropdownToggle color="light">{Dropdown}</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>{Header}</DropdownItem>
                  <DropdownItem disabled>{Action}</DropdownItem>
                  <DropdownItem>{AnotherAction}</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>{AnotherAction}</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </ButtonGroup>
          </div>
          <ButtonGroup2/>
          <ButtonGroup2 sizeLg={true} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default NestingClass;

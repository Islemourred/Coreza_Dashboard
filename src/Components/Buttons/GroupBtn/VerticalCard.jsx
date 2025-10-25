import {ButtonGroup,Card,CardBody,Col,} from "reactstrap";
import HeadingCommon from "../../../Common/Component/HeadingCommon";
import { Button, Vertical } from "../../../Constant";
import { Btn } from "../../../AbstractElements";
import CommonDropDown from "./CommonDropDown";

const VerticalCard = () => {
  return (
    <Col lg="6">
      <Card className="height-equal">
        <HeadingCommon Heading={Vertical} CardHeaderClassName="pb-0" span="Make Vertical Buttons" />
        <CardBody className="btn-group-wrapper">
          <ButtonGroup vertical>
            <Btn attrBtn={{ color: "primary", type: "button" }}>{"Button"}</Btn>
            <Btn attrBtn={{ color: "secondary", type: "button", className: "b-r-0",}}>{"Button"}</Btn>
            <CommonDropDown color="success" className="b-r-0"/>
            <Btn attrBtn={{ color: "info", type: "button", className: "b-r-0" }}>{Button}</Btn>
            <Btn attrBtn={{ color: "warning", type: "button", className: "b-r-0" }}>Button</Btn>
            <CommonDropDown color="danger" className="b-r-0"/>
            <CommonDropDown color="light"/>
          </ButtonGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default VerticalCard;

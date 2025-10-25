import  { Fragment } from "react";
import { Container, Row } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import GroupButtonClass from "./GroupButton";
import RadioBtnClass from "./RadioBtn";
import NestingClass from "./NestingClass";
import VerticalCard from "./VerticalCard";

const GroupButtonContain = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Button Group" parent="Buttons" title="Button Group"/>
      <Container fluid={true}>
        <Row>
          <GroupButtonClass />
          <RadioBtnClass />
          <NestingClass />
          <VerticalCard />
        </Row>
      </Container>
    </Fragment>
  );
};

export default GroupButtonContain;

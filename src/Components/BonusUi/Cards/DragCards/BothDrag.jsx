import React from "react";
import Board from "@asseinfo/react-kanban";
import { Col, Card, CardBody } from "reactstrap";
import { DragBothTitleCard } from "../../../../Constant";
import HeadingCommon from "../../../../Common/Component/HeadingCommon";
import { BothDragClassboard } from "../../../../Data/Bonus-ui/DragableCard";

const BothDragClass = () => {
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon CardHeaderClassName="pb-0" Heading={DragBothTitleCard} />
        <CardBody className="draggable-card">
          <Board initialBoard={BothDragClassboard}>{BothDragClassboard}</Board>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BothDragClass;
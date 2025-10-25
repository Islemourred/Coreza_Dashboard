import Board from "@asseinfo/react-kanban";
import { Col, Card, CardBody } from "reactstrap";
import { DragOnlyCard } from "../../../../Constant";
import { DragCardOnlyClassBoard } from "../../../../Data/Bonus-ui/DragableCard";
import HeadingCommon from "../../../../Common/Component/HeadingCommon";

const DragCardOnlyClass = () => {
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={DragOnlyCard} CardHeaderClassName="pb-0" />
        <CardBody className="draggable-card">
          <Board disableCardDrag initialBoard={DragCardOnlyClassBoard}>
            {DragCardOnlyClassBoard}
          </Board>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DragCardOnlyClass;
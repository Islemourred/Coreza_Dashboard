import Board from "@asseinfo/react-kanban";
import { Col, Card, CardBody } from "reactstrap";
import { DragOnlyContent } from "../../../../Constant";
import { DragOnlyContentClassBoard } from "../../../../Data/Bonus-ui/DragableCard";
import HeadingCommon from "../../../../Common/Component/HeadingCommon";

const DragOnlyContentClass = () => {
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={DragOnlyContent} CardHeaderClassName="pb-0" />
        <CardBody className="draggable-card">
          <Board initialBoard={DragOnlyContentClassBoard} disableColumnDrag>
            {DragOnlyContentClassBoard}
          </Board>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DragOnlyContentClass;

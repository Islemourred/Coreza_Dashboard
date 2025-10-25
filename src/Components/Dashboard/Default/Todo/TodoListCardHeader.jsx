import { CardHeader } from "reactstrap";
import { OurToDoList, todolist } from "../../../../Constant";
import { H4, P } from "../../../../AbstractElements";

const TodoListCardHeader = () => {
  return (
    <CardHeader className=" pb-0">
      <div className="d-flex justify-content-between">
        <div className="flex-grow-1">
          <P attrPara={{ className: "square-after f-w-600 header-text-primary" }}>
            {OurToDoList}
            <i className="fa fa-circle"> </i>
          </P>
          <H4>{todolist}</H4>
        </div>
      </div>
    </CardHeader>
  );
};

export default TodoListCardHeader;
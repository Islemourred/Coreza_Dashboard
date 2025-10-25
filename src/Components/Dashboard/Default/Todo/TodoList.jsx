import { Card, Col } from "reactstrap";
import TodoListCardHeader from "./TodoListCardHeader";
import TodoListCardBody from "./TodoListCardBody";

const TodoList = () => {
  return (
    <Col xl="4" md="6" className="box-col-33">
      <Card className="our-todolist">
        <TodoListCardHeader />
        <TodoListCardBody />
      </Card>
    </Col>
  );
};

export default TodoList;

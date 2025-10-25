import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../AbstractElements';
import Leftsideuser from './Leftsideuser';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

const TodoContain = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle="To-do" parent="Apps" title="To-do" />
            <Container fluid={true} className="todo-wrap email-wrap bookmark-wrap">
                <Row>
                    <Col xl="3" className='xl-30 box-col-30'>
                        <Leftsideuser />
                    </Col>
                    <Col xl="9" className='xl-70 box-col-70'>
                        <Card className='todo'>
                            <CardHeader className='border-bottom'>
                                <AddTodo />
                            </CardHeader>
                            <CardBody>
                                <div className="todo">
                                    <div className="todo-list-wrapper theme-scrollbar">
                                        <div className="todo-list-container">
                                            <TodoList />
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};
export default TodoContain;
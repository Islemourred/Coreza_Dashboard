import React, { Fragment, useContext, useState } from 'react'
import { Input } from 'reactstrap'
import { AddTask } from '../../Constant';
import TodoContext from '../../Helper/Todo';

const AddTodo = () => {
    const { addNewTodo } = useContext(TodoContext);
    const [task, setTask] = useState('');

    const addNewTask = () => {
        if (task === '') {
            return;
        }
        else {
            addNewTodo(task);
            setTask('');
        }
    };
    const onTaskChanged = (e) => {
        setTask(e.currentTarget.value);
    };
    return (
        <Fragment>
            <div className="todo-list-header">
                <div className="new-task-wrapper input-group">
                    <Input className="form-control" id="new-task" value={task} placeholder="Enter new task here. . ." onChange={onTaskChanged} />
                    <span className="btn btn-primary add-new-task-btn" id="add-task" onClick={() => { addNewTask() }}>{AddTask}</span>
                </div>
            </div>
        </Fragment>
    )
}
export default AddTodo
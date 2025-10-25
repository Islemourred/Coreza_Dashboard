import  {  useContext } from 'react';
import { toast } from 'react-toastify';
import { H4, LI, UL, H5 } from '../../AbstractElements';
import TodoContext from '../../Helper/Todo';

const TodoList = () => {
    const { showTodos, removeItems, selectedItem } = useContext(TodoContext);
    const handleRemoveTodo = (todoId, todo) => {
        removeItems(todoId);
        toast.success(todo);
    };

    const handleChangeStatus = (item) => {
        if (item.status === 'completed') {
            selectedItem(item.id, 'pending', 'badge-light-danger');
            toast.error(item.title + 'as Incomplete');
        } else if (item.status === 'pending') {
            selectedItem(item.id, 'completed', 'badge-light-success');
            toast.success(item.title + 'as Complete');
        }
    }
    return (
            <div className="todo-list-body">
                <UL attrUL={{ className: 'simple-list', id: 'todo-list' }}>
                    {showTodos.length > 0 ?
                        showTodos?.map((todo, index) =>
                            <LI attrLI={{ className: `task ${todo.status}`, onClick: () => { handleChangeStatus(todo) } }} key={index}>
                                <div className="task-container d-flex align-items-center justify-content-between">
                                    <H4 attrH4={{ className: 'task-label' }}>{todo.title}</H4>
                                    <div className='d-flex  align-items-center gap-3'>
                                        <span className={`badge ${todo.badgeclass}`}>{todo.badge}</span>
                                        <H5 attrH5={{ className: 'assign-name m-0' }}>{todo.timelimit}</H5>
                                        <span className="task-action-btn ">
                                            <span className="action-box large delete-btn " title="Delete Task" onClick={() => handleRemoveTodo(todo.id, todo.title)} >
                                                <i className='icon me-0'><i className='icon-trash me-0'></i></i>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </LI>
                        ) : ''}
                </UL>
            </div>
    );
};
export default TodoList;
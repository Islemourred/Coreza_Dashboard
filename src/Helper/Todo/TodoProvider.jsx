import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TodoApi } from '../../api';
import Context from './index';

const TodoProvider = (props) => {
  const [allTodos, setAllTodo] = useState([]);
  const [showTodos, setShowTodos] = useState([]);
  const [todoItem, setTodoItem] = useState([]);
  const fetchTodo = async () => {
    try {
      await axios.get(`${TodoApi}`).then((resp) => {
        setAllTodo(resp.data);
      });
    } catch (error) {
      console.log('error', error);
    }
  };
  useEffect(() => {
    setShowTodos(allTodos);
  }, [allTodos])

  useEffect(() => {
    fetchTodo();
  }, [setAllTodo, setTodoItem]);

  const addNewTodo = (tasks) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const currentDate = new Date()
    const temp = {
      id: allTodos.length + 1,
      title: tasks,
      status: 'pending',
      badge: 'Pending',
      badgeclass: 'badge-light-danger',
      timelimit: currentDate.getDate() + " " + months[currentDate.getMonth()]
    };
    setAllTodo([temp, ...allTodos]);
    setTodoItem([temp, ...allTodos]);
  };

  const selectItem = (id, status, badgeClass) => {
    const temp = allTodos.reduce((todoAcc, item) => {
      if (item.id === id) {
        if (status === 'pending') {
          todoAcc.push({ ...item, status: status, badgeclass: badgeClass, badge: 'Pending' });
        } else if (status === 'completed') {
          todoAcc.push({ ...item, status: status, badgeclass: badgeClass, badge: 'Done' });
        }
      } else todoAcc.push(item);
      return todoAcc;
    }, []);

    setTodoItem(temp);
    setAllTodo(temp);
  };

  const removeItems = (id) => {
    const updatedItems = allTodos.filter((item, i) => {
      return item.id !== id;
    }, []);
    setTodoItem(updatedItems);
    setAllTodo(updatedItems);
  };
  return (
    <Context.Provider
      value={{
        ...props,
        allTodos,
        todoItem,
        setAllTodo,
        showTodos,
        setShowTodos,
        addNewTodo: addNewTodo,
        selectedItem: selectItem,
        removeItems: removeItems,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default TodoProvider;

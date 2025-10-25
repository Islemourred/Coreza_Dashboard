import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Context from './index';
import { TaskApi } from '../../api';

const TaskProvider = (props) => {
    const [allTask, setAllTask] = useState([]);
    const [newTask, setNewTask] = useState([]);

    const getTask = async () => {
        try {
            await axios.get(TaskApi).then((resp) => {
                setAllTask(resp.data);
            });
        } catch (error) {
            console.log('error', error);
        }
    };
    useEffect(() => {
        getTask();
    }, [setAllTask, setNewTask]);

    const AddNewTask = (data) => {
        const taskTemp = {
            title: data.title,
            collection: data.collection,
            desc: data.desc,
        };
        setNewTask((prev) => [...prev, taskTemp]);
    };

    const RemoveTask = (id) => {
        setAllTask(allTask.filter((data) => data.id !== id));
    };

    return (
        <Context.Provider
            value={{
                ...props,
                allTask,
                newTask,
                AddNewTask: AddNewTask,
                RemoveTask: RemoveTask
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default TaskProvider;
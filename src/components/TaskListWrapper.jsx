import './TaskListWrapper.css';
import { TaskListForm } from "./TaskListForm";
import { TaskList } from "./TaskList";
import React, { useState } from 'react';
import { TaskListEditModal } from './TaskListEditModal';

export function TaskListWrapper() {
    const [tasks, setTasks] = useState([]);
    const [currentTask, setCurrentTask] = useState({});
    const [modalState, setModalState] = useState(false);

    const addTask = (taskName) => {
        setTasks([ ...tasks , {id : tasks.length, name: taskName}]);
    };

    const editTask = (task) => {
        setTasks(tasks.map(t => 
            t.id === task.id ? {...t, name: task.name} : t
        ));
    }

    const deleteTask = (task) => {
        setTasks(tasks.filter(t => { 
            return t.id !== task.id
        }));
    }

    const changeModalState = (modalState, task) => {
        setModalState(modalState);
        setCurrentTask(task);
    }

    return (   
        <div className='main'>
            <h1>To Do List</h1>
            <TaskListForm addTask={addTask} />
            {
                tasks.map((task) => 
                <TaskList task={task} deleteTask={deleteTask} changeModalState={changeModalState}/>
                )
            }
            {
                modalState && <TaskListEditModal task={currentTask} editTask={editTask} changeModalState={changeModalState}/>
            }

        </div>
    )
}
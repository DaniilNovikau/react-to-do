import './TaskListEditModal.css';
import React, { useState } from 'react';

export function TaskListEditModal({task, editTask, changeModalState}) {
    const [inputValue, setInputValue] = useState(task.name);

    const handleSubmit = () => {

        if (inputValue) {
            task.name = inputValue;
            editTask(task);
            setInputValue('');
            changeModalState(false);
        }
    };

    const handleClose = () => {
        changeModalState(false);
    }

    return (
        <div className='modal'>
            <div className='modal-container'>
                <header className='modal-header'>
                    <h1>Edit Task</h1>
                </header>
                <div className='modal-body'>
                    <input className='modal-input' type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                </div>
                <footer className='modal-footer'>
                    <button onClick={handleClose}>Close</button>
                    <button className='modal-button-save' onClick={handleSubmit}>Save</button>
                </footer>
            </div>
        </div>
    )
}
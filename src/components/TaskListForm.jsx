import './TaskListForm.css';
import React, { useState } from 'react';

export function TaskListForm({addTask}) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        if (inputValue) {
            addTask(inputValue);

            setInputValue('');
        }
    };

    return (   
        <form  onSubmit={handleSubmit}>
            <input className='input-form' type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='What is the task today?'/>
            <button type='submit'>Add</button>
        </form>
    )
}
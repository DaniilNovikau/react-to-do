import './TaskList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export function TaskList({task, changeModalState, deleteTask}) {
    const openEditModal = () => {
        changeModalState(true, task);
    }

    const removeTask = () => {
        deleteTask(task);
    }

    return (
        <div className="task-list">
            <p>{task.name}</p>
            <div>
                <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={openEditModal}/>
                <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={removeTask}/>
            </div>
        </div>
      )
}
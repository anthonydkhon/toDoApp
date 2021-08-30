import React from 'react';
import TaskForm from './taskForm';

const PopUp = (props) => {
    

    return (
        <div className="pop-up">
            <div className="popup-inner">
                <TaskForm tasks={props.tasks} setTask={props.setTasks} addTaskToList={props.addTaskToList} updateTask={props.updateTask} setShowAddForm={props.setShowAddForm} />
            </div>
        </div>
    )
}

export default PopUp;
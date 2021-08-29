import React, { useState } from 'react';
import TaskForm from './taskForm';

const PopUp = (props) => {
    

    return (
        <div className="pop-up">
            <div className="popup-inner">
                <TaskForm tasks={props.tasks} setTask={props.setTasks} addTaskToList={props.addTaskToList} />
            </div>
        </div>
    )
}

export default PopUp;
import React from 'react';
import { Button } from 'reactstrap'
import { BsCheck, BsFillTrashFill } from 'react-icons/bs';
import { BiRefresh } from 'react-icons/bi';

const Task = (props) => {
    const removeTask = (id) => {
        if (props.deleteTask) {
            props.deleteTask(id);
        }
    };

    const markComplete = (Completed) => {
        const task = {
            ...props.task,
            completed: Completed
        }
        props.updateTask(task)
    }

    return (
        <div className="task">
            <li className={`task-status ${props.task.completed ? "completed" : ""}`}>
                <i className={props.task.icon} /> {props.task.name}
            </li>
            <div className="task-btns">
                    {props.task.completed ? (
                         <Button
                            className="undo-btn" 
                            onClick={() => {
                                markComplete(false);
                                }}
                                >
                                    <BiRefresh />
                        </Button>
                        ) : (
                        <Button
                        className="complete-btn"
                            onClick={() => {
                                markComplete(true);
                                }}
                            style={{backgroundColor: `rgb(${20}, ${178}, ${60})`}}
                                >
                                    <BsCheck />
                        </Button>
                    )}
                <Button onClick={() => removeTask(props.task.id)} className="delete-btn" style={{backgroundColor: `rgb(${243}, ${14}, ${14})`}}>
                    <BsFillTrashFill />
                </Button>
            </div>
        </div>
    )
}

export default Task;

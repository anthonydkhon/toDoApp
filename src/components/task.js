import React from 'react';
import { BsCheck, BsFillTrashFill } from 'react-icons/bs';
import { BiRefresh } from 'react-icons/bi';

const Task = (props) => {
    const deleteTask = () => {
        props.setTasks(props.tasks.filter((task) => task.id !== props.task.id));
    };
    // const completeTask = () => {
    //     props.setTasks(props.tasks.map((item) => {
    //         if(item.id === props.task.id){
    //             return {
    //                 ...item, 
    //                 completed: !item.completed
    //             }
    //         }
    //         return item;
    //     }))
    // }

    const markComplete = (Completed) => {
        const task = {
            ...props.task,
            completed: Completed
        }
        props.updateTask(task)
    }

    return (
        <div className="task">
            <li className="task-item">
                <i className={props.icon} /> {props.task.name}
            </li>
            {props.task.completed ? (
                <button 
                    onClick={() => {
                        markComplete(false);
                    }}
                >
                    <BiRefresh />
                </button>
            ) : (
                <button
                    onClick={() => {
                        markComplete(true);
                    }}
                >
                    <BsCheck />
                </button>
            )}
            <button onClick={deleteTask} className="delete-btn">
                <BsFillTrashFill />
            </button>
        </div>
    )
}

export default Task;

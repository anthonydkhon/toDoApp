import React from 'react';
import Task from './task';

const TaskList = (props) => {
    
    
    return (
        <div>
            <ul className="task-list">
                {props.filtered.map(task => (
                    <Task 
                    key={task.id} 
                    setTasks={props.setTasks}
                    task={task}
                    tasks={props.tasks}
                    updateTask={props.updateTask}
                    deleteTask={props.deleteTask}
                     />
                ))}
            </ul>
        </div>
      );
}

 

export default TaskList;
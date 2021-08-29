import React, { useState } from 'react'
import { 
    Dropdown, 
    DropdownToggle, 
    DropdownMenu, 
    DropdownItem 
} from 'reactstrap';

const TaskForm = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const task = 
            { 
                name: e.target.taskName.value,
                completed: false,
                id: Math.floor(Math.random()*10000),
                icon: ""
            };
        props.addTaskToList(task);

    };

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a task"
                name="taskName"
                className="task-input"
            />
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                Categories
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Add</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem value="All" >View All Tasks</DropdownItem>
                    <DropdownItem value="Completed" >View Completed Tasks</DropdownItem>
                    <DropdownItem value="Not Completed" >View Non-Completed Tasks</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <button 
            className="add-task-btn"
            type="submit">
                Add Task
            </button>

        </form>
    )
}

export default TaskForm;

import React, { useState } from 'react'
import '../App.css';
import { Button } from 'reactstrap';
import { FaRegWindowClose } from 'react-icons/fa';

const TaskForm = (props) => {
    const icons = {
        cart: "fas fa-shopping-cart",
        heart: "fas fa-heartbeat",
        mail:  "fas fa-envelope",
        phone: "fas fa-envelope",
        exclamation: "fas fa-exclamation",
        laptop: "fas fa-laptop-code"
    }
    const [icon, setIcon] =useState(icons.cart);



        

    const selectIcon = (e) => {
        setIcon(icons[e.target.value])
        console.log(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const task = 
            { 
                name: e.target.taskName.value,
                completed: false,
                id: Math.floor(Math.random()*10000),
                icon
            };
        props.addTaskToList(task);
        props.setShowAddForm(false);

    };


    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a task"
                name="taskName"
                className="task-input"
            />
                <select onChange={selectIcon}>
                    <option value="cart">cart</option>
                    <option value="heart">heart</option>
                    <option value="mail">mail</option>
                    <option value="phone">phone</option>
                    <option value="exclamation">exclamation</option>
                    <option value="laptop">laptop</option>
                </select>
                <i className={icon} />
            <Button 
            className="add-task-btn"
            type="submit"
            >
                Add Task
            </Button>
                <FaRegWindowClose className="close-btn" onClick={() => props.setShowAddForm(false)} />
        </form>
    )
}

export default TaskForm;


            
           

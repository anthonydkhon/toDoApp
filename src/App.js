import React, { useState, useEffect } from 'react';
import './App.css';
import TaskList from './components/taskList';
import DropDown from './components/dropDown';
import PopUp from './components/popup';
import { Button } from 'reactstrap';

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('storedTasks')) || []);
  const [status, setStatus] = useState("All");
  const [showAddForm, setShowAddForm] = useState(false);
  const [filtered, setFiltered] = useState([]);

  const addTaskToList = (task) => {
    const newTasks = [...tasks, task];
    console.log(task);
    saveTasks(newTasks);
  }
  const openPopUp = (show) => {
    setShowAddForm(show)
  }

  const updateTask = (task) => {
    const currentTasks = [...tasks];
    const taskIndex = currentTasks.findIndex((t) => t.id === task.id);
    if (taskIndex !== -1) {
      currentTasks[taskIndex] = task;
    }
   saveTasks(currentTasks); 
  };

  const deleteTask = (id) => {
    saveTasks(tasks.filter((task) => task.id != id));
};

  const saveTasks = (tasks) => {
    setTasks(tasks)
    localStorage.setItem('storedTasks', JSON.stringify(tasks));
  }

  const filterTaskStatus = (taskStatus) => {setStatus(taskStatus)}

  const filterStatus = () => {
        switch(status){
          case 'Completed':
            setFiltered(tasks.filter(task => task.completed === true));
            break;
          case 'Not Completed':
            setFiltered(tasks.filter(task => task.completed === false));
            break;
          default:
            setFiltered(tasks);
            break;
        }
      };

useEffect(() => {
    filterStatus();
}, [tasks, status])


  
  return (
    <div className="To-Do-App">
      {showAddForm && <PopUp tasks={tasks} setTasks={setTasks} addTaskToList={addTaskToList} updateTask={updateTask} setShowAddForm={setShowAddForm} />}
      <header className="App-header">
        <h1>To Do App</h1>
        <div className="menu">
        <Button className="Add" onClick={() => {openPopUp(true)}}>Add a Task</Button>
        <DropDown filterTaskStatus={filterTaskStatus} />
        </div>
        <TaskList tasks={tasks} setTasks={setTasks} filterStatus={filterStatus} filtered={filtered} updateTask={updateTask} deleteTask={deleteTask} />
      </header>
    </div>
  );
}

export default App;

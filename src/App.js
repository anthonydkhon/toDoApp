import React, { useState, useEffect } from 'react';
import './App.css';
import TaskList from './components/taskList';
import DropDown from './components/dropDown';
import PopUp from './components/popup';

function App() {
  const [tasks, setTasks] = useState([])
  const [status, setStatus] = useState("All");
  const [showAddForm, setShowAddForm] = useState(false);
  const [filtered, setFiltered] = useState([]);

  const addTaskToList = (task) => {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
    console.log(task)
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
   setTasks(currentTasks); 
  };

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
      {showAddForm && <PopUp tasks={tasks} setTasks={setTasks} addTaskToList={addTaskToList} />}
      <header className="App-header">
        <h1>To Do App</h1>
        <button className="Add" onClick={() => {openPopUp(true)}}>Add a Task</button>
        <DropDown filterTaskStatus={filterTaskStatus} />
        {/* <TaskForm tasks={tasks} setTasks={setTasks}/> */}
        <TaskList tasks={tasks} setTasks={setTasks} filterStatus={filterStatus} filtered={filtered} updateTask={updateTask} />
      </header>
    </div>
  );
}

export default App;

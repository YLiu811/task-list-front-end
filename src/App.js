import { useEffect } from 'react';
import TaskList from './components/TaskList.js';
import { useState } from 'react';
import './App.css';
import axios from 'axios';
import NewTaskFrom from './components/NewTaskForm.js';
import React from 'react';

// const INITIAL_TASKS = [
//   {
//     id: 1,
//     title: 'Mow the lawn',
//     isComplete: false,
//   },
//   {
//     id: 2,
//     title: 'Cook Pasta',
//     isComplete: true,
//   },
// ];


const App = () => {
  const [taskList, setTasksList] = useState([]);
  const URL = 'http://127.0.0.1:5000/tasks';
  useEffect (()=>{
    axios.get(URL)
    .then((res)=>{
      console.log(res);
      const taskAPiResCopy = res.data.map((task)=>{
        return {
          ...task};

      });
      setTasksList(taskAPiResCopy);
    })
    .catch((err)=>{
      console.log(err);
    });
  },[]);



  // const initialCopy = INITIAL_TASKS.map((task) => {
  //   return { ...task };
  // });
  

  const updateComplete = (taskId, updatedComplete) => {
    console.log('updatedComplete called');
    const newTasksList = [];
    for (const task of taskList) {
      if (task.id !== taskId) {
        newTasksList.push(task);
      } else {
        const newTask = {
          ...task,
          isComplete: updatedComplete,
        };
        newTasksList.push(newTask);
      }
    }
    setTasksList(newTasksList);
  };

  const deleteTask = (taskId) => {
    const newTasksList = [];
    for (const task of taskList) {
      if (task.id !== taskId) {
        newTasksList.push(task);
      }
    }
    setTasksList(newTasksList);
  };
  const addTask = (newTaskInfo) => {
    axios.post(URL, newTaskInfo)
    .then((response)=>{
      //fetchAllBikes();  //<- This helper function will make a .get() call to fetch all bikes and update the state variable to display them
      const newTasks = [...taskList];
      const newTaskJSON = {
        ...newTaskInfo,
        'id': response.data.id
      };
      newTasks.push(newTaskJSON);
      setTasksList(newTasks); //this method does not require a .get request; we are pushing the bike data to the bikes list and using the setter to trigger a rerender.
    })
    .catch((error)=>{
      console.log(error);
    });
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <TaskList tasks={taskList} updateComplete={updateComplete} deleteTask={deleteTask}/>
        </div>
        <div>
        <NewTaskFrom addTaskCallbackFunc={addTask}/>
        </div>
      </main>
    </div>
  );
};

export default App;

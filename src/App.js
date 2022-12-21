import React from 'react';
import TaskList from './components/TaskList.js';
import { useState } from 'react';
import './App.css';

const INITIAL_TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {
  const initialCopy = INITIAL_TASKS.map((task) => {
    return { ...task };
  });
  const [taskList, setTasksList] = useState(initialCopy);
  const updateComplete = (taskId, updatedComplete) => {
    // console.log("updatedComplete called");
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

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <TaskList tasks={taskList} updateComplete={updateComplete} />
        </div>
      </main>
    </div>
  );
};

export default App;

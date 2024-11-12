import React, { useRef, useMemo, useReducer, useEffect } from 'react'
import useLocalStorage from './useLocalStorage';
import TaskInfo from './TaskInfo';
import UserHeader from './UserHeader';
import { UserProvider } from './UserContext';
import TaskList from './TaskList';
import './App.css';

//Had to ask Chat GPT Some questions on this one.
//This was a really hard assignment to know how to do using only the slides
//with the limited javascript experience I have.
function App() {
  const inputRef = useRef(null);
  //intervalRef
  const intervalRef = useRef(null);

  const [storedTasks, setStoredTasks] = useLocalStorage('tasks', []);
  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return [...state, { id: Date.now(), title: action.title, completed: false }];
      case 'TOGGLE_TASK':
        return state.map(task => task.id === action.id ? { ...task, completed: !task.completed } : task);
      case 'DELETE_TASK':
        return state.filter(task => task.id !== action.id);
      default:
        return state;
    }
  };
  
  const [tasks, dispatch] = useReducer((state, action) => {
    const newState = reducer(state, action);
    setStoredTasks(newState); 
    return newState;
  }, storedTasks);
  
  useEffect(() => localStorage.setItem('tasks', JSON.stringify(tasks)), [tasks]);
  
  
  // Use useMemo to calculate the total number of tasks and the number of 
  // completed tasks to optimize performance, so these values only re-calculate 
  // when the task list changes.
  const totalTasks = useMemo(() => tasks.length, [tasks]);
  const completedTasks = useMemo(() => tasks.filter(task => task.completed).length, [tasks]);

  //Use useRef to focus the input field automatically when the app loads.
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);


  return (
  <UserProvider>
    <div className='app-container'>
      <UserHeader />
      <TaskInfo total={totalTasks} completed={completedTasks} />
      <TaskList tasks={tasks} dispatch={dispatch} inputRef={inputRef} />
    </div>
  </UserProvider>
  );
}

export default App;

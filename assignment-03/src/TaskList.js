import React, { useState, useCallback } from 'react';
import Task from './Task';

function TaskList({ tasks, dispatch, inputRef }) {
  const [taskTitle, setTaskTitle] = useState('');


  // Use useCallback to memoize functions that update tasks, 
  // like addTask, toggleTask, and deleteTask, to prevent them from 
  // being re-created on every render.
  const handleAddTask = useCallback(() => {
    if (taskTitle.trim()) {
      dispatch({ type: 'ADD_TASK', title: taskTitle });
      setTaskTitle('');
    }
  }, [taskTitle, dispatch]);

  return (
    <div>
        <div className='task-input-container'>
            <input
                ref={inputRef}
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
        <ul className='task-list'>
            {tasks.map(task => (
            <Task key={task.id} task={task} dispatch={dispatch} />
            ))}
        </ul>
        
    </div>
  );
}

export default TaskList;

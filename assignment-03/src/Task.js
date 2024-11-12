import React, { useCallback } from 'react';

function Task({ task, dispatch }) {
   // Use useCallback to memoize functions that update tasks, 
  // like addTask, toggleTask, and deleteTask, to prevent them from 
  // being re-created on every render.
  const handleToggle = useCallback(() => dispatch({ type: 'TOGGLE_TASK', id: task.id }), [task.id, dispatch]);
  const handleDelete = useCallback(() => dispatch({ type: 'DELETE_TASK', id: task.id }), [task.id, dispatch]);

  return (
    <li className='task-item'>
      <input type="checkbox" checked={task.completed} onChange={handleToggle} />
      <span className={task.completed ? 'completed' : ''}>{task.title}</span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default Task;

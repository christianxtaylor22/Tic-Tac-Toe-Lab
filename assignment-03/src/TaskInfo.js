import React from 'react';

function TaskInfo({ total, completed }) {
  return (
    <div className='task-stats'>
      <p>Total Number of Tasks: {total}</p>
      <p>Number of Completed Tasks: {completed}</p>
    </div>
  );
}

export default TaskInfo;

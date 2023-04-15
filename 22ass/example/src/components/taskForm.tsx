// adding task component

import { useState } from 'react';

export const TaskForm = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [isDone, setIsDone] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log({ taskTitle, taskDescription, isDone });
    // You can replace the console.log with any function to handle the form data
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="taskTitle">Task Title: </label>
        <input
          type="text"
          id="taskTitle"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="taskDescription">Task Description: </label>
        <textarea
          id="taskDescription"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="isDone">Is Done: </label>
        <input
          type="checkbox"
          id="isDone"
          checked={isDone}
          onChange={(e) => setIsDone(e.target.checked)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};



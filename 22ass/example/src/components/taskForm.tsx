// adding task component
import { selectAuthState } from "../store/authSlice";

import { supabase } from '@/lib/supabase';
import { TaskState, createTask } from "@/store/taskSlice";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const TaskForm = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [isDone, setIsDone] = useState(false);
  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log({ taskTitle, taskDescription, isDone });
    // You can replace the console.log with any function to handle the form data
    // add this to supabase and then to our redux store
    const res = await supabase.from('tasks').insert({
      task_name: taskTitle,
      description: taskDescription,
      is_done: isDone,
      user: authState.user?.id ?? 'error'
    }).select();
    if (res.error) {
      console.log(res.error);
      return
    }
    // update the redux store
    dispatch(createTask(res.data[0] as TaskState));
  };

  return (
    <form onSubmit={handleSubmit} className='TaskForm'>
      <div>
        <label htmlFor="taskTitle">Task Title: </label>
        <input
          className='px-4 py-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          type="text"
          id="taskTitle"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="taskDescription">Task Description: </label>
        <textarea
        className='block w-full px-4 py-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          id="taskDescription"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="isDone">Is Done: </label>
        <input
        className='w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500'
          type="checkbox"
          id="isDone"
          checked={isDone}
          onChange={(e) => setIsDone(e.target.checked)}
        />
      </div>
      <button type="submit" className='inline-flex items-center justify-center px-4 py-2 text-white bg-indigo-600 border border-transparent rounded-md font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>Submit</button>
    </form>
  );
};



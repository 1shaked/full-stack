// react component to display the task list and edit and delete button for each task getting the props of the id and index
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppState } from "@/store/store";
import { supabase } from "@/lib/supabase";
import { setTaskName, setIsDone, setDescription, deleteTask } from "@/store/taskSlice";
export const TaskItem = (props: { index: number }) => {
  const tasksList = useSelector((state: AppState) => state.task.taskList);
  const authState = useSelector((state: AppState) => state.auth);
  const [edit, setEdit] = useState(false);
  const [taskTitle, setTaskTitle] = useState(tasksList[props.index].task_name);
  const [taskDescription, setTaskDescription] = useState(tasksList[props.index].description);
  const [isDone, setIsDoneUseState] = useState(tasksList[props.index].is_done);
  const dispatch = useDispatch();
  async function updateTask() {
    // update the task in the database
    const respond = await supabase.from('tasks').update({ task_name: taskTitle, description: taskDescription, is_done: isDone }).eq('id', tasksList[props.index].id)
    console.log(respond);
    if (respond.error) {
      console.log(respond.error);
      return
    }
    // update the task in the redux store
    dispatch(setTaskName({ index: props.index, task_name: taskTitle }));
    dispatch(setIsDone({ index: props.index, is_done: isDone }));
    dispatch(setDescription({ index: props.index, description: taskDescription }));
    setEdit(false);
  }
  async function deleteTaskFunc() {
    // delete the task in the database
    const respond = await supabase.from('tasks').delete().eq('id', tasksList[props.index].id)
    console.log(respond);
    if (respond.error) {
      console.log(respond.error);
      return
    }
    // update the task in the redux store
    dispatch(deleteTask(props.index));
    setEdit(false);
  }
  return (
    <>
      <li className="taskItem" style={{ height: window.innerWidth < 700 && edit ? '50vh' : '30vh' }}>
        {!edit ? <>
          <h3>{tasksList[props.index].task_name}</h3>
          <p>{tasksList[props.index].description}</p>
          <div>status: {tasksList[props.index].is_done ? 'done' : 'not done'}</div>
        </> : <>
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
              onChange={(e) => setIsDoneUseState(e.target.checked)}
            />
          </div>
          <div>
            <button className="EditButton" onClick={updateTask}>Submit</button>
          </div>
        </>}
        {tasksList[props.index].user === authState.user?.id ? <div className="EditDeleteRow">
          <button onClick={() => setEdit(!edit)}>Edit</button>
          <button onClick={deleteTaskFunc}>DELETE</button>
        </div> : null}


      </li>
    </>
  );
}
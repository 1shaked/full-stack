// component that will show a task list

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppState } from "../store/store";
import { supabase } from "@/lib/supabase";
import { TaskState, addTasksList } from "@/store/taskSlice";

export const TaskListComponent = () => {
  const authState = useSelector((state: AppState) => state.auth);
  const tasksList = useSelector((state: AppState) => state.task.taskList);
  const dispatch = useDispatch();
  useEffect(() => {
    // This function will run when the component mounts
    console.log("Component mounted!!!");
    // getTasks();
    getTasksList();
  }, [authState.authState]);
  // async function getTasks() {
  //     // const {data,error} = await supabase.from('tasks').select('*').eq('user_id', authState.user?.id);
  //     const channel = supabase.channel('tasks').on('postgres_changes',
  //     {
  //         event: '*',
  //         schema: 'public',
  //         table: 'tasks',
  //     },
  //     (payload) => {
  //         console.log('Change received!', payload);
  //         const eventType = payload.eventType;
  //         console.log(payload.new);
  //         console.log('----------------------------------------------------------------');
  //         console.log(payload.old);

  //     }
  //     );
  //     channel.subscribe();
  //     setTimeout(() => {
  //         debugger;
  //         channel.unsubscribe();
  //     }, 35000)
  // }
  async function getTasksList() {
    // const response = await supabase.from('tasks').select('*').filter('user', 'eq', authState.user?.id);
    const response = await supabase.from("tasks").select("*");
    if (response.error && response.error.message) {
      console.log(response.error.message);
      return "";
    }
    console.log(response.data);
    debugger;
    const taskListTemp = response.data as TaskState[];
    dispatch(addTasksList(taskListTemp));
    return response.data;
  }
  return (
    <>
      <ul className="taskList">
        <li>
          <h3>Task 1</h3>
          <p>Task 1 description</p>
          <div>by who and du at when</div>
        </li>
        {tasksList.map((task) => (
        <li key={task.id}>
          <h3>{task.task_name}</h3>
          <p>{task.description}</p>
          <div>status: {task.id_done ? 'done' : 'not done'}</div>
        </li>
      ))}
      </ul>
    </>
  );
};

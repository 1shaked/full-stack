import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";
export interface TaskState {
    id: number;
    // createAt: Date;
    user: string;
    task_name: string;
    is_done: boolean;
    description: string;
}
export interface TasksState {
  taskList: TaskState[],

}
// Initial state
const initialState: TasksState = {
    taskList: []
};

// Actual Slice
export const TaskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    // Action to set the authentication status
    setId(state, action: PayloadAction<{id:number, index:number}>) {
      state.taskList[action.payload.index].id = action.payload.id;
    },
    setTaskName(state, action: PayloadAction<{index:number, task_name:string}>) {
        state.taskList[action.payload.index].task_name = action.payload.task_name;
    },
    // setCreateAt(state, action: PayloadAction<Date>) {
    //     state.createAt = action.payload;
    // },
    setUser(state, action: PayloadAction<{index:number, user:string}>) {
        state.taskList[action.payload.index].user = action.payload.user;
    },
    setIsDone(state, action: PayloadAction<{index:number, is_done:boolean}>) {
        state.taskList[action.payload.index].is_done = action.payload.is_done;
    },
    setDescription(state, action: PayloadAction<{index:number, description:string}>) {
        state.taskList[action.payload.index].description = action.payload.description;
    },
    addTasksList(state, action: PayloadAction<TaskState[]>) {
      state.taskList = action.payload;
    },
    createTask(state, action: PayloadAction<TaskState>) {
      state.taskList.push(action.payload);
    },
    setTaskByIndex(state, action: PayloadAction<{index:number, task:TaskState}>) {
      state.taskList[action.payload.index] = action.payload.task;
    },
    deleteTask(state, action: PayloadAction<number>) {
      state.taskList.splice(action.payload, 1);
    }
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.Task,
      };
    },
  },
});

export const {  setId , setTaskName , setUser 
  ,setDescription, addTasksList, createTask
,setTaskByIndex,
setIsDone, deleteTask } = TaskSlice.actions;

export const TaskState = (state: AppState) => state.task;

export default TaskSlice.reducer;
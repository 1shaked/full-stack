import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";
import {PayloadAction} from '@reduxjs/toolkit'
// Type for our state
export interface TaskState {
    id: number;
    // createAt: Date;
    user: string;
    task_name: string;
    id_done: boolean;
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
    setTaskName(state, action: PayloadAction<{id:number, task_name:string}>) {
        state.taskList[action.payload.id].task_name = action.payload.task_name;
    },
    // setCreateAt(state, action: PayloadAction<Date>) {
    //     state.createAt = action.payload;
    // },
    setUser(state, action: PayloadAction<{id:number, user:string}>) {
        state.taskList[action.payload.id].user = action.payload.user;
    },
    setIdDone(state, action: PayloadAction<{id:number, is_done:boolean}>) {
        state.taskList[action.payload.id].id_done = action.payload.is_done;
    },
    setDescription(state, action: PayloadAction<{id:number, description:string}>) {
        state.taskList[action.payload.id].description = action.payload.description;
    },
    addTasksList(state, action: PayloadAction<TaskState[]>) {
      state.taskList = action.payload;
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

export const {  setId , setTaskName , setUser , setIdDone , setDescription, addTasksList } = TaskSlice.actions;

export const TaskState = (state: AppState) => state.task;

export default TaskSlice.reducer;
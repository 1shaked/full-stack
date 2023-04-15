import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";
import {PayloadAction} from '@reduxjs/toolkit'
// Type for our state
export interface CounterState {
    value: number;
}

// Initial state
const initialState: CounterState = {
    value: 0,
};

// Actual Slice
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // Action to set the authentication status
    setCounter(state, action: PayloadAction<number>) {
      state.value = action.payload;
    },
    increment(state) {
        state.value += 1
    },
    decrement(state) {
        state.value += -1
    }
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.counter,
      };
    },
  },
});

export const { setCounter, increment, decrement } = counterSlice.actions;

export const counterState = (state: AppState) => state.counter.value;

export default counterSlice.reducer;
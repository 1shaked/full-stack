import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";

export const storeRedux = configureStore({
    reducer: counterSlice.reducer
})
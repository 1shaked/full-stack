import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";
import { todoSlice } from './todosSlice'
export const storeRedux = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        todo: todoSlice.reducer,
    }
});

export type RootState = ReturnType<typeof storeRedux.getState>
export type AppDispatch = ReturnType<typeof storeRedux.dispatch>
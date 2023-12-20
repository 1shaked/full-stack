import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface TodoInterface {
    title: string;
}

interface TodoSliceStateInterface {
    todos: TodoInterface[]
}

const initialState: TodoSliceStateInterface = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TodoInterface>) => {
            state.todos = [...state.todos, action.payload]
            // state.todos.push(action.payload)
        }
    },
    // extraReducers(builder) {
        
    // },
})
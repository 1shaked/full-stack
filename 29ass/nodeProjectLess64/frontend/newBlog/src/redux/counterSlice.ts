import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'

export interface CounterInterface {
    value: number;
    arr: string[]
}

const initialState: CounterInterface = { value: 0, arr: ['a', 'b'] }

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    incremented: (state, action: PayloadAction<number | undefined>) => {
      state.value += action.payload ?? 1
    },
    decremented: state => {
      state.value -= 1
    },
    add: (state, action: PayloadAction<string>) => {
        state.arr = [...state.arr, action.payload]
    }
  }
})

export const { incremented, decremented, add } = counterSlice.actions

export const storeRedux = configureStore({
  reducer: counterSlice.reducer
})
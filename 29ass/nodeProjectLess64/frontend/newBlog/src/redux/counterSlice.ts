import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'

export interface CounterInterface {
    value: number;
}

const initialState: CounterInterface = { value: 0}

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    incremented: (state, action: PayloadAction<number | undefined>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += action.payload ?? 1
    },
    decremented: state => {
      state.value -= 1
    }
  }
})

export const { incremented, decremented } = counterSlice.actions

export const storeRedux = configureStore({
  reducer: counterSlice.reducer
})
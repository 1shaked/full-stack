import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice';
import postsReducer from './postsSlice';
import counterReducer from './counterSlice'
const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;

import { Post } from '@/types/redux';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PostsState {
    posts: Post[];
}

const initialState: PostsState = {
    posts: [],
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: (state, action: PayloadAction<Post>) => {
            state.posts.push(action.payload);
        },
    },
});

export const { addPost } = postsSlice.actions;
export default postsSlice.reducer;

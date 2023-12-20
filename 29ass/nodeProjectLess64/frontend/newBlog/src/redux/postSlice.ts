import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchPosts = createAsyncThunk(
    'post/fetchPosts',
    async (_, thunkAPI) => {
        console.log({thunkAPI})
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
        const data = await response.json() as PostInterface[]
        console.log(data)
        return data
    }
)



interface PostInterface {
    userId: number,
    id: number,
    title: string,
    body: string
}

interface PostSliceInterface {
    posts: PostInterface[],
}


const initialState: PostSliceInterface = {
    posts: []
}

export const postSlice = createSlice({
    name: 'postSlice',
    initialState: initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<PostInterface>) => {
            state.posts = [...state.posts, action.payload]
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.posts = action.payload
        })
    },
})
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchByPost = createAsyncThunk(
    'users/fetchById',
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        // {
        //     // signal: thunkAPI.signal
        // }
        return await response.json()
    }
)


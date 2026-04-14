import {createSlice} from '@reduxjs/toolkit'
import { fetchByPost } from '../Thunk/thunk'

const initialState = {
    entity : [],
    loading : 'Idle',
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers:{
       
        },
        extraReducers: (builder)=>{
            builder.addCase(fetchByPost.fulfilled,(state, action)=>{
                state.entity = action.payload
            })

        }
    })

// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default postSlice.reducer
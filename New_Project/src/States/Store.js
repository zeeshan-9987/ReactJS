import {configureStore} from '@reduxjs/toolkit'
import  counterSlice  from '../slice/counterSlice'
import  postSlice  from '../slice/postSlice'

export const store = configureStore({
    reducer:{
        counter:counterSlice,
        post : postSlice
    }
})
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../featuers/Todo/todoSlice';


export const store = configureStore({
    reducer: todoReducer
})
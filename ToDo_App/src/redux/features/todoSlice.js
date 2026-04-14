import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //sab tasks yaha store honge
  todos: [], 
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: state.todos.length + 1, //auto generate (1,2,3...)
        text: action.payload, //input value
        status: "Pending", //default "Pending"
      });
    },
    toggleStatus: (state, action) => {
      const todo = state.todos.find(
        (item) => item.id === action.payload
      );
      if (todo) {
        todo.status =
          todo.status === "Pending" ? "Completed" : "Pending";
      }
    },
  },
});

export const { addTodo, toggleStatus } = todoSlice.actions;
export default todoSlice.reducer;
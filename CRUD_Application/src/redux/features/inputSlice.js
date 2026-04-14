import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], //yaha saare inputs store honge
};

const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    addItem: (state, action) => { //input ko array me add karega
      state.items.push(action.payload);
    },
    deleteItem: (state, action) => { //input ko array me add karega
      state.items = state.items.filter(
        (_, index) => index !== action.payload
      );
    },
    setItems: (state, action) => {
        state.items = action.payload;
    }
  },
});

export const { addItem, deleteItem, setItems } = inputSlice.actions;
export default inputSlice.reducer;
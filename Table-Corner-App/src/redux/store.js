import { configureStore } from "@reduxjs/toolkit";
import showReducer from "./features/showSlice";

export const store = configureStore({
  reducer: {
    show: showReducer,
  },
});
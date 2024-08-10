import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import todoReducer from "./slices/todoSlice";
import filterReducer from "./slices/filterSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    todo: todoReducer,
    filter: filterReducer,
  },
});

export default store;

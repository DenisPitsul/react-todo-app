import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
  done: "all",
  overdue: "all",
};

const filterSlice = createSlice({
  initialState,
  name: "filters",
  reducers: {
    setValue: (state, { payload }) => {
      state.value = payload;
    },
    setDone: (state, { payload }) => {
      state.done = payload;
    },
    setOverdue: (state, { payload }) => {
      state.overdue = payload;
    },
  },
});

const { reducer, actions } = filterSlice;

export const { setValue, setDone, setOverdue } = actions;

export default reducer;

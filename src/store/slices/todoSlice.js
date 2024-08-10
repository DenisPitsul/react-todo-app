import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { getDatePlusDaysStr } from "../../utils/date";

const initialState = {
  todos: [
    {
      id: uuidv4(),
      value: "Overdue undone todo",
      isDone: false,
      deadline: getDatePlusDaysStr(-2),
    },
    {
      id: uuidv4(),
      value: "Not overdue done todo",
      isDone: true,
      deadline: getDatePlusDaysStr(2),
    },
    {
      id: uuidv4(),
      value: "Overdue done todo",
      isDone: true,
      deadline: getDatePlusDaysStr(-1),
    },
    {
      id: uuidv4(),
      value: "Not overdue undone todo",
      isDone: false,
      deadline: getDatePlusDaysStr(1),
    },
  ],
};

const todoSlice = createSlice({
  initialState,
  name: "todo",
  reducers: {
    createTodo: (state, { payload }) => {
      state.todos.push({
        ...payload,
        isDone: false,
        id: uuidv4(),
      });
    },
    updateTodo: (state, { payload: { id, data } }) => {
      const updatedTodoIndex = state.todos.findIndex((t) => t.id === id);
      state.todos[updatedTodoIndex] = {
        ...state.todos[updatedTodoIndex],
        ...data,
      };
    },
    deleteTodo: (state, { payload }) => {
      state.todos = state.todos.filter((c) => c.id !== payload);
    },
  },
});

const { reducer, actions } = todoSlice;

export const { createTodo, updateTodo, deleteTodo } = actions;

export default reducer;

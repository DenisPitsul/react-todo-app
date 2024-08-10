import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as API from "../../api";

const initialState = {
  randomUser: {
    firstName: "Test",
    lastName: "Testovich",
    image: "/user.jpg",
    age: 21,
  },
  isFetching: false,
  error: null,
};

export const getUserThunk = createAsyncThunk(
  "user/getUser",
  async (payload, thunkAPI) => {
    try {
      const { data } = await API.getRandomUser();
      return {
        firstName: data.results[0].name.first,
        lastName: data.results[0].name.last,
        image: data.results[0].picture.large,
        age: data.results[0].dob.age,
      };
    } catch (err) {
      return thunkAPI.rejectWithValue({ message: err.message });
    }
  }
);

const usersSlice = createSlice({
  initialState,
  name: "user",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserThunk.pending, (state, { payload }) => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(getUserThunk.fulfilled, (state, { payload }) => {
      state.randomUser = payload;
      state.isFetching = false;
    });
    builder.addCase(getUserThunk.rejected, (state, { payload }) => {
      state.error = payload;
      state.isFetching = false;
    });
  },
});

const { reducer } = usersSlice;

export default reducer;

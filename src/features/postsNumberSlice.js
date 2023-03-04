import { createSlice } from "@reduxjs/toolkit";

export const postsNumberSlice = createSlice({
  name: "postsNumber",
  initialState: {
    value: {},
  },
  reducers: {
    setPostsNumber: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setPostsNumber } = postsNumberSlice.actions;

export default postsNumberSlice.reducers;

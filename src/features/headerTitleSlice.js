import { createSlice } from "@reduxjs/toolkit";

export const headerTitleSlice = createSlice({
  name: "headerTitle",
  initialState: {
    value: "ZAEYON LOG",
  },
  reducers: {
    setHeaderTitle: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setHeaderTitle } = headerTitleSlice.actions;

export default headerTitleSlice.reducers;

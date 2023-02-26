import { createSlice } from "@reduxjs/toolkit";

export const visibleMenuSlice = createSlice({
  name: "visibleMenu",
  initialState: {
    value: false,
  },
  reducers: {
    setVisibleMenu: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setVisibleMenu } = visibleMenuSlice.actions;

export default visibleMenuSlice.reducer;

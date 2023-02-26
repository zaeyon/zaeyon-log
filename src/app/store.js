import { configureStore } from "@reduxjs/toolkit";
import visibleMenuReducer from "../features/visibleMenuSlice";

export const store = configureStore({
  reducer: {
    visibleMenu: visibleMenuReducer,
  },
});

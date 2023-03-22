import {
  configureStore,
  combineReducers,
  PayloadAction,
} from "@reduxjs/toolkit";
import { create } from "domain";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import visibleMenuReducer from "../features/visibleMenuSlice";
import postsNumberReducer from "../features/postsNumberSlice";

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }

  return combineReducers({
    visibleMenu: visibleMenuReducer,
    postsNumber: postsNumberReducer,
  })(state, action);
};

const makeStore = () =>
  configureStore({
    reducer,
  });

const store = makeStore();

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV === "development",
});

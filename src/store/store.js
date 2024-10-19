import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainReducer from "../store/redusers/userSlice";

const appReducer = combineReducers({
  mainReducer,
});

export const myStore = configureStore({
  reducer: appReducer,
});
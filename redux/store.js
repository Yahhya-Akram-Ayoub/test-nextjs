import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice";
import langSlice from "./slices/LangSlice";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
  user: userSlice,
  lang: langSlice,
});

// const store = configureStore({
//   reducer: {
//     user: userSlice,
//   },
// });

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export default store;

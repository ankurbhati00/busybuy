import { configureStore } from "@reduxjs/toolkit";
import { homeReducer } from "./reducers/home.reducer";

export const store = configureStore({
  reducer: {
    homeReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import { homeReducer } from "./reducers/home.reducer";
import { cartReducer } from "./reducers/cart.reducer";
export const store = configureStore({
  reducer: {
    homeReducer,
    cartReducer,
  },
});

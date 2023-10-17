import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data";
const INITIAL_STATE = {
  loading: false,
  products: products,
};

const homeSlice = createSlice({
  name: "home",
  initialState: INITIAL_STATE,
  reducers: {
    search: (state, action) => {
      state.products = state.products.filter((product) =>
        product.details.includes(action.payload)
      );
    },
  },
});

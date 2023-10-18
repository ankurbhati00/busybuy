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
    //search the products
    search: (state, action) => {
      state.products = INITIAL_STATE.products.filter((product) =>
        product.details.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    //filter the products by the category like {range:99, category:[men, women]}
    filter: (state, action) => {
      state.products = INITIAL_STATE.products.filter((product) => {
        const { price, category } = action.payload;
        //if user select categroies
        if (category.length > 0) {
          if (price >= product.price && category.includes(product.category)) {
            return true;
          }
          //if user not select any categories
        } else {
          if (price >= product.price) {
            return true;
          }
        }
        //else return false
        return false;
      });
    },
  },
});

//reducer for home
export const homeReducer = homeSlice.reducer;
//actions for home
export const homeActions = homeSlice.actions;
//selector
export const homeSelector = (state) => state.homeReducer;

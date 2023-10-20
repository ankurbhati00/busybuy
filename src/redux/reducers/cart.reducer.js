import { createSlice } from "@reduxjs/toolkit";




const INITIAL_STATE = {
  totalPrice: 0,
  cart: [
    {
      product: {},
      quantity: 1,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    add: (state, action) => {
      state.cart.push({ product: action.payload, quantity: 1 });
      state.totalPrice += action.payload.price;
      },
      remove: (state, action) => {
        //   state.cart.
      }
  },
});

//actions for cart
export const cartActions = cartSlice.actions;
//cart reducer
export const cartReducer = cartSlice.reducer;
//cart selectors
export const cartSelector = (state) => state.cartReducer;

import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { products } from "../../data";
import {db} from '../../config/firebaseInit.js';
import { collection, getDocs } from "firebase/firestore";



const INITIAL_STATE = {
  loading: false,
  products: [],
};

export const fetchData = createAsyncThunk(
  'home/fetchData',
  async (_, thunkApi)=> {
    const data = await getDocs(collection(db, 'products'));
    const result = [];
    data.forEach((doc) => {
      result.push(doc.data());
      // console.log(doc.data());
    });
    return result;
  }
);
//entity adapter for the state
const homeEntity = createEntityAdapter({
  selectId: (elm) => elm.id,
});



const homeSlice = createSlice({
  name: "home",
  initialState: homeEntity.getInitialState(),
  reducers: {
    //search the products
    search: (state, action) => {
      state.products = INITIAL_STATE.products.filter((product) =>
        product.details.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    //filter the products by the category like {range:99, category:[men, women]}
    filter: (state, action) => {
      console.log(INITIAL_STATE);
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
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, { payload }) => {
      homeEntity.addMany(state, payload);
    })
  }
  
});

//reducer for home
export const homeReducer = homeSlice.reducer;
//actions for home
export const homeActions = homeSlice.actions;
//selector
export const homeSelector = (state) => state.homeReducer;

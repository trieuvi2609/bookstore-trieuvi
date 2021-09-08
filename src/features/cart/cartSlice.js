import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
    addCart: (state, action) => {
        state.cart.push(action.payload);
        },
    resetCart: (state, action) => {
        state.cart= action.payload;
        }
    }
  });
  
  export const selectCart = (state) => state.cart.cart;
  export const { addCart,resetCart } = cartSlice.actions;
  export default cartSlice.reducer;
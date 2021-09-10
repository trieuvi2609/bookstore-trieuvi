import { createSlice, current } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        addCart: (state, action) => {
            if (!state.cart) {
                const newCart = [{ item: action.payload, number: 1 }];
                state.cart = newCart;
            }
            else {
                const data = current(state.cart);
                console.log(action.payload);
                const number = data.filter((x) => (x.item === action.payload)).length;
                if (number === 0) {
                    const newItem = { item: action.payload, number: 1 };
                    state.cart.push(newItem);
                }
                else {
                    const index = data.findIndex((x) => (x.item === action.payload));
                    const newCart = state.cart;
                    newCart[index].number++;
                    state.cart = newCart;
                }
            }
        },
        removeCart: (state, action) => {
            const data = current(state.cart);
            const index = data.findIndex((x) => (x.item === action.payload));
            if (data[index].number === 1) {
                state.cart.splice(index,1);
            }
            else {
                const newCart = state.cart;
                newCart[index].number--;
                state.cart = newCart;
            }
        },
        resetCart: (state, action) => {
            state.cart = [];
        }
    }
});

export const selectCart = (state) => state.cart.cart;
export const { addCart, resetCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
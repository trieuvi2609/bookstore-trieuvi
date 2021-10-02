import { createSlice} from "@reduxjs/toolkit";
export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        addCart: (state, action) => {
            if (state.cart.length===0) {
                state.cart = [{ item: action.payload, number: 1 }];          }
            else {
                const num = state.cart.filter((x) => (x.item.b_id === action.payload.b_id)).length;
                if (num === 0) {
                    const newItem = { item: action.payload, number: 1 };
                    state.cart.push(newItem);
                }
                else {
                    const index = state.cart.findIndex((x) => (x.item.b_id === action.payload.b_id));
                    state.cart[index].number++;
                }
            }
        },
        removeCart: (state, action) => {
            const index = state.cart.findIndex((x) => (x.item.b_id === action.payload.b_id));
            if (state.cart[index].number === 1) {
                state.cart.splice(index,1);
            }
            else {
                state.cart[index].number--;
            }
        },
        resetCart: (state, action) => {
            state.cart = [];
        },
        setCart: (state, action)=>{
            state.cart = action.payload;
        }
    }
});

export const selectCart = (state) => state.cart.cart;
export const { addCart, resetCart, removeCart,setCart} = cartSlice.actions;
export default cartSlice.reducer;
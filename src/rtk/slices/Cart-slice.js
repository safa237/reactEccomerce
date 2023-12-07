import { createSlice } from "@reduxjs/toolkit";
/*import Product from "../../compoenents/Product";*/
export const cartSlice = createSlice ({
    initialState : [],
    name : "cartSlice" , 
    reducers: {
        addToCart: (state, action) => {
            const findproduct = state.find((Product) => Product.id === action.payload.id);
            if(findproduct) {
                findproduct.quantity += 1;
            } else {
                const productClone = {...action.payload , quantity : 1}
                state.push(productClone);
            }
            
        },

        deleteFromCart: (state, action) => {
            return state.filter((Product)=> Product.id !== action.payload.id)
        },
    }
})



export const {addToCart ,deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
export const saveCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };
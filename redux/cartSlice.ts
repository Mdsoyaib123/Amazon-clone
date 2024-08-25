import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./index";
interface cartSate{
    cart:any;
}
const initialState:cartSate={
    cart:[]
    
}

const cartSlice =createSlice({
    name:'cart',
    initialState,
    reducers:{
        // multiple action 
        addToCart:(state,action)=>{
            state.cart.push(action.payload)
        },
        removeFromCart:(state,action)=>{
            state.cart = state.cart.filter((item:any)=>{
                return item.id !== action.payload;
            })
        }
    }
})
export const {addToCart,removeFromCart} = cartSlice.actions;
export const getCart = (state: RootState) => state.cart.cart
export default cartSlice.reducer;
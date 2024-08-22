import { createSlice } from "@reduxjs/toolkit";

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
        }
    }
})
export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;
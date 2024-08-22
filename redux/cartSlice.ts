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
        
    }
})
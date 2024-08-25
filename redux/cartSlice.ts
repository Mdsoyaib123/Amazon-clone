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
            const isPresent = state.cart.find((item:any)=>{
                return item.id === action.payload.id;
            })
            if(isPresent ){
                // update quantity
                state.cart= state.cart.map((item:any)=>{
                    return item.id === action.payload.id ? {...item,quantity:item.quantity+1} : item;
                })
            }
            else{
                state.cart.push({...action.payload,quantity:1})
            }
            
        },
        removeFromCart:(state,action)=>{
            state.cart = state.cart.filter((item:any)=>{
                return item.id !== action.payload;
            })
        },
        incrementQuantity: (state,action)=>{
            state.cart= state.cart.map((item:any)=>{
                return item.id === action.payload.id ? {...item,quantity:item.quantity+1} : item;
            })
        },
        DecrementQuantity: (state,action)=>{
            state.cart= state.cart.map((item:any)=>{
                return item.id === action.payload.id ? {...item,quantity:item.quantity-1} : item;
            })
        },
    }
})
export const {addToCart,removeFromCart,incrementQuantity,DecrementQuantity} = cartSlice.actions;
export const getCart = (state: RootState) => state.cart.cart
export default cartSlice.reducer;
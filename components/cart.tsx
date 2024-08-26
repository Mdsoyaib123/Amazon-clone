"use client"
import { useAppSelector } from "@/lib/supabase/hooks/redux";
import ProccedToBuy from "./ProccedToBuy"
import ShoppingCart from "./ShoppingCart"
import { getCart } from "@/redux/cartSlice";

const Cart = () => {
  const cart = useAppSelector(getCart);
  let totalPrice = 0 ;
  cart.forEach((item:any)=>{
    totalPrice += item.price * item.quantity
  })
  return (
    <div className='flex gap-6 pt-10 mx-8'>
      <div className="w-[75%]  ">
      <ShoppingCart cart={cart} totalPrice={totalPrice}></ShoppingCart>
    </div>
    <div className='w-[25%] bg-white rounded-md  p-4 h-fit'>
     <ProccedToBuy length={cart.length} totalPrice={totalPrice}></ProccedToBuy>
    </div>
    </div>
    
  )
}

export default Cart

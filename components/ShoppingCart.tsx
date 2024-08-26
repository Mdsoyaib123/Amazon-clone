'use client'
import {useAppDispatch, useAppSelector } from "@/lib/supabase/hooks/redux";
import { getCart, removeFromCart,DecrementQuantity,incrementQuantity } from "@/redux/cartSlice";
import Image from "next/image";
import SubTotal from "./SubTotal";

const ShoppingCart = () => {
  const cart = useAppSelector(getCart);
  const dispatch = useAppDispatch();
  let totalPrice = 0 ;
  cart.forEach((item:any)=>{
    totalPrice += item.price * item.quantity
  })
  return (
    <div className='bg-white rounded-md px-6 py-1'>
      <div className='border-b-2 border-gray-200 flex justify-between items-end'>
        <div className='py-5'>
        <h1 className="font-bold text-2xl  ">ShoppingCart</h1>
        <h1 className='text-sm'>{`Total Products : ${cart.length}`}</h1>
        </div>
        <p className=''>Price</p>
        </div>
        
      {cart.map((product:any) => {
        return (
          <div key={product.id} className='flex justify-between items-center py-4 border-b-2 border-gray-200 '>
            <div className='flex gap-4 items-center'>
              <div>
                <Image src={product.image} width={100} height={100} alt={product.title}/>
              </div>
              <div >
                <h1 className='font-medium '>{product.title}</h1>
                <p className='text-[#007600] my-1 text-xs font-bold'>In Stock</p>
                <h1 onClick={()=>{
                  dispatch(removeFromCart(product.id))
                }} className='font-bold  text-red-600 cursor-pointer'>REMOVE</h1>
                <div className='flex gap-7 items-center bg-gray-200 rounded-md px-5 py-1 w-fit font-medium my-3'>
                  <div onClick={()=>{
                   product.quantity > 1 && dispatch(DecrementQuantity(product))
                  }} className='text-lg cursor-pointer'>-</div>
                  <div className=' '>{product.quantity}</div>
                  <div onClick={()=>{
                    dispatch(incrementQuantity(product))
                  }} className='text-lg cursor-pointer'>+</div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-lg font-bold">${product.price}</h1>
              <p className='text-xs py-1'>M.R.P.:<span className='line-through'>$3,495.00</span></p>
            </div>
          </div>
        );
      })}
      <SubTotal length={cart.length} totalPrice={totalPrice}></SubTotal>
    </div>
  );
};

export default ShoppingCart;

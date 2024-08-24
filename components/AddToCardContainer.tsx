import { useAppDispatch } from '@/lib/supabase/hooks/redux';
import { addToCart } from '@/redux/cartSlice';
import React from 'react'
import { TiLocationOutline } from "react-icons/ti";
import { useRouter } from 'next/navigation';

const AddToCardContainer = ({item}:{item:any}) => {
 const dispatch = useAppDispatch()
 const router = useRouter()
  return (
    <div className='border border-gray-300 rounded-md h-fit'>
      <div className="p-4"> 
        <h1 className='text-2xl font-medium pb-3'>${item.price}</h1>
        <h1>$875.33 Shipping & Import Fees Deposit to Bangladesh</h1>
        <h1 className='py-1'>Delivery <span className=' font-bold'>Wednesday, September 4</span> . Order within <span className='text-[#527600] '>22 hrs 44 mins</span></h1>
        <p className='py-2 flex gap-1 item-center hover:text-[#c7511f] cursor-pointer'>
          <TiLocationOutline className='text-black' size={20}></TiLocationOutline>
        Deliver to Bangladesh</p>
        <p className='text-xl py-1 text-[#007600]'>In Stock</p>
        <div className='flex gap-4 text-sm  text-[#565959] mb-2'>
          <ul className='space-y-1'>
            <li>Ships from</li>
            <li>Sold by</li>
            <li>Returns</li>
            <li>Payment</li>
          </ul>
          <ul className='space-y-1'>
            <li className='text-black'>Amazon.com</li>
            <li className='text-black'>Amazon.com</li>
            <li className='text-[#527185]' >30-day refund</li>
            <li className='text-[#527185]'>Secure transaction</li>
          </ul>
        </div>
        <button onClick={()=>{
         dispatch(addToCart(item))
         router.push('/cart')
        }} className='bg-[#ffd814] py-1 px-2 rounded-full w-full text-sm mb-2'>Add to Cart</button>
        <button className='bg-[#ffa41c] py-1 px-2 rounded-full w-full text-sm'>Buy Now</button>
      </div>
    </div>
  )
}

export default AddToCardContainer

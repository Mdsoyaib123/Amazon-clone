import React from 'react'
import { TiLocationOutline } from "react-icons/ti";

const AddToCardContainer = ({item}:{item:any}) => {
 
  return (
    <div className='border border-gray-300 rounded-md h-fit'>
      <div className="p-4"> 
        <h1 className='text-2xl font-medium pb-3'>${item.price}</h1>
        <h1>$875.33 Shipping & Import Fees Deposit to Bangladesh</h1>
        <h1 className='py-1'>Delivery <span className=' font-bold'>Wednesday, September 4</span> . Order within <span className='text-[#527600] '>22 hrs 44 mins</span></h1>
        <p className='py-2 flex gap-1 item-center hover:text-[#c7511f] cursor-pointer'>
          <TiLocationOutline className='text-black' size={20}></TiLocationOutline>
        Deliver to Bangladesh</p>
        <p className='text-2xl text-[#007600]'>In Stock</p>
        <div className='flex gap-4 text-sm  text-[#565959]'>
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
      </div>
    </div>
  )
}

export default AddToCardContainer

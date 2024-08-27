
import SubTotal from "./SubTotal"
import { IoMdCheckmarkCircle } from "react-icons/io";


const ProccedToBuy = ({length,totalPrice}:{length:number,totalPrice:number}) => {
  
  return (
    <div>
      <div className='flex items-center '>
      <IoMdCheckmarkCircle size={40} className='text-[#007600]'></IoMdCheckmarkCircle> 
      <h1 className="text-xs "><span className='text-[#007600] font-medium'>Your order is eligible for FREE Delivery .</span> Choose <span className='text-[#007600]'>FREE Delivery</span> option at checkout</h1>
      </div>
      <SubTotal length={length} left={true} totalPrice={totalPrice} ></SubTotal> 
      <button className='w-full  py-2 bg-[#FFD814] rounded -md shadow-md'>Procced To Buy</button> 
    </div>
  )
}

export default ProccedToBuy
